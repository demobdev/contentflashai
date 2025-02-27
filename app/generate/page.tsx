"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Loader2,
  Upload,
  Copy,
  Twitter,
  Linkedin,
  Clock,
  Zap,
  MessageSquare,
  Camera,
  Video,
  Share2,
} from "lucide-react";
import { GoogleGenerativeAI, Part } from "@google/generative-ai";
import ReactMarkdown from "react-markdown";
import { Navbar } from "@/components/Navbar";
import { SignInButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import {
  getUserPoints,
  saveGeneratedContent,
  updateUserPoints,
  getGeneratedContentHistory,
  createOrUpdateUser,
  getPromptTemplate,
} from "@/utils/db/actions";
import { TwitterMock } from "@/components/social-mocks/TwitterMock";
import { InstagramMock } from "@/components/social-mocks/InstagramMock";
import { LinkedInMock } from "@/components/social-mocks/LinkedInMock";
import Link from "next/link";
import { TikTokMock } from "@/components/social-mocks/TikTokMock";
import { FacebookMock } from "@/components/social-mocks/FacebookMock";
import { YouTubeShortsMock } from "@/components/social-mocks/YouTubeShortsMock";
import { TikTokScriptEditorMock } from "@/components/social-mocks/TikTokScriptEditorMock";
import { YouTubeScriptEditorMock } from "@/components/social-mocks/YouTubeScriptEditorMock";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { toast } from "react-hot-toast";
import { ContentSkeleton } from "@/components/ContentSkeleton";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;

const contentTypes = [
  { value: "twitter", label: "Twitter Thread" },
  { value: "instagram", label: "Instagram Caption" },
  { value: "linkedin", label: "LinkedIn Post" },
  { value: "tiktok", label: "TikTok Script" },
  { value: "youtube_shorts", label: "YouTube Shorts" },
  { value: "facebook", label: "Facebook Post" },
];

const MAX_TWEET_LENGTH = 280;
const POINTS_PER_GENERATION = 5;

interface HistoryItem {
  id: number;
  contentType: string;
  prompt: string;
  content: string;
  createdAt: Date;
}

const contentTemplates = {
  twitter: [
    { 
      name: "Thread Starter", 
      template: "Create a Twitter thread about [topic] that explains why [pain point] is a problem and how [solution] can help. Include data and examples." 
    },
    { 
      name: "Viral Hook", 
      template: "Write a Twitter thread that starts with a shocking statistic about [industry] and then provides 5 insights that most people don't know." 
    }
  ],
  instagram: [
    { 
      name: "Carousel Post", 
      template: "Create an Instagram caption for a carousel post about [topic]. Include a strong hook, 3-5 value points, and a clear call to action." 
    },
    { 
      name: "Behind-the-Scenes", 
      template: "Write an authentic behind-the-scenes Instagram caption about [process/product] that shows personality and connects with followers." 
    }
  ],
  linkedin: [
    { 
      name: "Thought Leadership", 
      template: "Write a LinkedIn post sharing my perspective on [industry trend]. Include a personal story, what I've observed, and advice for professionals." 
    },
    { 
      name: "Success Story", 
      template: "Create a LinkedIn post about how I helped a client/customer achieve [specific result] by using [approach/product]. Include specific metrics and learnings." 
    }
  ],
  tiktok: [
    { 
      name: "Hook-Based Script", 
      template: "Write a TikTok script that starts with an attention-grabbing hook about [surprising fact], then explains [concept] in simple terms, and ends with a call to follow for more tips." 
    },
    { 
      name: "Tutorial Format", 
      template: "Create a step-by-step TikTok script teaching viewers how to [process]. Start with why this matters, then outline 3 simple steps, and end with a valuable tip." 
    }
  ],
  youtube_shorts: [
    { 
      name: "Quick Insight", 
      template: "Create a YouTube Shorts script that reveals a little-known fact about [topic], explains why it matters, and offers a unique perspective that will make viewers think differently." 
    },
    { 
      name: "Problem-Solution", 
      template: "Write a YouTube Shorts script identifying a common problem with [topic], why traditional advice fails, and then revealing a better approach that viewers can implement immediately." 
    }
  ],
  facebook: [
    { 
      name: "Engaging Question", 
      template: "Write a Facebook post that starts with a thought-provoking question about [topic], shares my perspective, and invites followers to share their thoughts in the comments." 
    },
    { 
      name: "Value-Driven", 
      template: "Create a Facebook post offering 3 valuable tips about [topic] that my audience can implement today. End with a question that encourages comments." 
    }
  ]
};

export default function GenerateContent() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  const [contentType, setContentType] = useState(contentTypes[0].value);
  const [prompt, setPrompt] = useState("");
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [userPoints, setUserPoints] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [selectedHistoryItem, setSelectedHistoryItem] =
    useState<HistoryItem | null>(null);
  const [facebookImage, setFacebookImage] = useState<File | null>(null);

  useEffect(() => {
    if (!apiKey) {
      console.error("Gemini API key is not set");
    }
  }, []);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push("/");
    } else if (isSignedIn && user) {
      console.log("User loaded:", user);
      fetchUserPoints();
      fetchContentHistory();
    }
  }, [isLoaded, isSignedIn, user, router]);

  const fetchUserPoints = async () => {
    if (user?.id) {
      console.log("Fetching points for user:", user.id);
      const points = await getUserPoints(user.id);
      console.log("Fetched points:", points);
      setUserPoints(points);
      if (points === 0) {
        console.log("User has 0 points. Attempting to create/update user.");
        const updatedUser = await createOrUpdateUser(
          user.id,
          user.emailAddresses[0].emailAddress,
          user.fullName || ""
        );
        console.log("Updated user:", updatedUser);
        if (updatedUser) {
          setUserPoints(updatedUser.points);
        }
      }
    }
  };

  const fetchContentHistory = async () => {
    if (user?.id) {
      const contentHistory = await getGeneratedContentHistory(user.id);
      setHistory(contentHistory);
    }
  };

  const handleGenerate = async () => {
    if (
      !genAI ||
      !user?.id ||
      userPoints === null ||
      userPoints < POINTS_PER_GENERATION
    ) {
      alert("Not enough points or API key not set.");
      return;
    }

    setIsLoading(true);
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

      let promptText = getPromptTemplate(contentType, prompt);

      let imagePart: Part | null = null;
      if (contentType === "instagram" && image) {
        const reader = new FileReader();
        const imageData = await new Promise<string>((resolve) => {
          reader.onload = (e) => {
            if (e.target && typeof e.target.result === "string") {
              resolve(e.target.result);
            } else {
              resolve("");
            }
          };
          reader.readAsDataURL(image);
        });

        const base64Data = imageData.split(",")[1];
        if (base64Data) {
          imagePart = {
            inlineData: {
              data: base64Data,
              mimeType: image.type,
            },
          };
        }
        promptText +=
          " Describe the image and incorporate it into the caption.";
      }

      const parts: (string | Part)[] = [promptText];
      if (imagePart) parts.push(imagePart);

      const result = await model.generateContent(parts);
      const generatedText = result.response.text();

      let content: string[];
      if (contentType === "twitter") {
        content = generatedText
          .split("\n\n")
          .filter((tweet) => tweet.trim() !== "");
      } else {
        content = [generatedText];
      }

      setGeneratedContent(content);

      // Update points
      const updatedUser = await updateUserPoints(
        user.id,
        -POINTS_PER_GENERATION
      );
      if (updatedUser) {
        setUserPoints(updatedUser.points);
      }

      // Save generated content
      const savedContent = await saveGeneratedContent(
        user.id,
        content.join("\n\n"),
        prompt,
        contentType
      );

      if (savedContent) {
        setHistory((prevHistory) => [savedContent, ...prevHistory]);
      }
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent(["An error occurred while generating content."]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHistoryItemClick = (item: HistoryItem) => {
    setSelectedHistoryItem(item);
    setContentType(item.contentType);
    setPrompt(item.prompt);
    setGeneratedContent(
      item.contentType === "twitter"
        ? item.content.split("\n\n")
        : [item.content]
    );
  };

  const copyAllContent = () => {
    const textToCopy = Array.isArray(generatedContent) 
      ? generatedContent.join('\n\n') 
      : typeof generatedContent === 'string' ? generatedContent : '';
    navigator.clipboard.writeText(textToCopy);
    toast.success("All content copied to clipboard!");
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleFacebookImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFacebookImage(event.target.files[0]);
    }
  };

  const renderContentMock = () => {
    if (!generatedContent || generatedContent.length === 0) return null;

    const safeContent = Array.isArray(generatedContent) 
      ? generatedContent[0] 
      : String(generatedContent);
    
    switch (contentType) {
      case "twitter":
        return (
          <ErrorBoundary>
            <TwitterMock tweets={generatedContent} />
          </ErrorBoundary>
        );
      case "instagram":
        return (
          <ErrorBoundary>
            <InstagramMock content={safeContent} image={image} />
          </ErrorBoundary>
        );
      case "linkedin":
        return (
          <ErrorBoundary>
            <LinkedInMock content={safeContent} />
          </ErrorBoundary>
        );
      case "tiktok":
        return (
          <ErrorBoundary>
            <TikTokScriptEditorMock content={safeContent} />
          </ErrorBoundary>
        );
      case "youtube_shorts":
        return (
          <ErrorBoundary>
            <YouTubeScriptEditorMock content={safeContent} />
          </ErrorBoundary>
        );
      case "facebook":
        return (
          <ErrorBoundary>
            <FacebookMock content={safeContent} image={facebookImage} />
          </ErrorBoundary>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    console.log("Generated content updated:", generatedContent);
  }, [generatedContent]);

  const shareContent = async () => {
    if (navigator.share) {
      try {
        const textToShare = Array.isArray(generatedContent) 
          ? generatedContent.join('\n\n') 
          : typeof generatedContent === 'string' ? generatedContent : '';
          
        await navigator.share({
          title: `Content generated with ContentFlash`,
          text: textToShare,
          url: 'https://contentflash.ai'
        });
        
        toast.success("Content shared successfully!");
      } catch (error) {
        console.log('Error sharing:', error);
        // User likely canceled the share operation
        if (error instanceof Error && error.name !== 'AbortError') {
          toast.error("Could not share content");
        }
      }
    } else {
      // Fallback for browsers that don't support the Web Share API
      copyAllContent();
      toast("Content copied to clipboard - ready to share!", { 
        icon: '📋',
        duration: 3000
      });
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0a0a0a]">
        <div className="text-center bg-[#111111] p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white mb-4">
            Welcome to Content Flash AI
          </h1>
          <p className="text-gray-400 mb-6">
            To start generating amazing content, please sign in or create an
            account.
          </p>
          <SignInButton mode="modal">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              Sign In / Sign Up
            </Button>
          </SignInButton>
          <p className="text-gray-500 mt-4 text-sm">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white">
      <Navbar />
      <div className="container mx-auto px-4 mb-8 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 mt-14 lg:grid-cols-3 gap-8">
          {/* Left sidebar - History */}
          <div className="lg:col-span-1 bg-gray-800 rounded-2xl p-6 h-[calc(100vh-12rem)] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-blue-400">History</h2>
              <Clock className="h-6 w-6 text-blue-400" />
            </div>
            <div className="space-y-4">
              {history.map((item) => (
                <div
                  key={item.id}
                  className="p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors cursor-pointer"
                  onClick={() => handleHistoryItemClick(item)}
                >
                  <div className="flex items-center mb-2">
                    {item.contentType === "twitter" && (
                      <Twitter className="mr-2 h-5 w-5 text-blue-400" />
                    )}
                    {item.contentType === "instagram" && (
                      <Camera className="mr-2 h-5 w-5 text-pink-400" />
                    )}
                    {item.contentType === "linkedin" && (
                      <Linkedin className="mr-2 h-5 w-5 text-blue-600" />
                    )}
                    {item.contentType === "tiktok" && (
                      <MessageSquare className="mr-2 h-5 w-5 text-red-400" />
                    )}
                    {item.contentType === "youtube_shorts" && (
                      <Video className="mr-2 h-5 w-5 text-red-600" />
                    )}
                    {item.contentType === "facebook" && (
                      <Share2 className="mr-2 h-5 w-5 text-blue-500" />
                    )}
                    <span className="text-sm font-medium">
                      {item.contentType === "twitter" && "Twitter Thread"}
                      {item.contentType === "instagram" && "Instagram Caption"}
                      {item.contentType === "linkedin" && "LinkedIn Post"}
                      {item.contentType === "tiktok" && "TikTok Script"}
                      {item.contentType === "youtube_shorts" && "YouTube Shorts"}
                      {item.contentType === "facebook" && "Facebook Post"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-300 truncate">
                    {item.prompt}
                  </p>
                  <div className="flex items-center text-xs text-gray-400 mt-2">
                    <Clock className="mr-1 h-3 w-3" />
                    {new Date(item.createdAt).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main content area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Points display */}
            <div className="bg-gray-800 p-6 rounded-2xl flex items-center justify-between">
              <div className="flex items-center">
                <Zap className="h-8 w-8 text-yellow-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-400">Available Points</p>
                  <p className="text-2xl font-bold text-yellow-400">
                    {userPoints !== null ? userPoints : "Loading..."}
                  </p>
                </div>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded-full transition-colors">
                <Link href="/pricing">Get More Points</Link>
              </Button>
            </div>

            {/* Content generation form */}
            <div className="bg-gray-800 p-6 rounded-2xl space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Content Type
                </label>
                <Select
                  onValueChange={setContentType}
                  defaultValue={contentType}
                >
                  <SelectTrigger className="w-full bg-gray-700 border-none rounded-xl">
                    <SelectValue placeholder="Select content type" />
                  </SelectTrigger>
                  <SelectContent>
                    {contentTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center">
                          {type.value === "twitter" && (
                            <Twitter className="mr-2 h-4 w-4 text-blue-400" />
                          )}
                          {type.value === "instagram" && (
                            <Camera className="mr-2 h-4 w-4 text-pink-400" />
                          )}
                          {type.value === "linkedin" && (
                            <Linkedin className="mr-2 h-4 w-4 text-blue-600" />
                          )}
                          {type.value === "tiktok" && (
                            <MessageSquare className="mr-2 h-4 w-4 text-red-400" />
                          )}
                          {type.value === "youtube_shorts" && (
                            <Video className="mr-2 h-4 w-4 text-red-600" />
                          )}
                          {type.value === "facebook" && (
                            <Share2 className="mr-2 h-4 w-4 text-blue-500" />
                          )}
                          {type.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor="prompt"
                  className="block text-sm font-medium mb-2 text-gray-300"
                >
                  Prompt
                </label>
                <Textarea
                  id="prompt"
                  placeholder="Enter your prompt here..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  rows={4}
                  className="w-full bg-gray-700 border-none rounded-xl resize-none"
                />
                
                <div className="mt-2">
                  <p className="text-xs text-gray-400 mb-1">Quick Templates (click to use):</p>
                  <div className="flex flex-wrap gap-2">
                    {contentType && contentTemplates[contentType as keyof typeof contentTemplates]?.map((template, index) => (
                      <button
                        key={index}
                        type="button"
                        className="text-xs bg-gray-700 text-gray-200 hover:bg-gray-600 px-3 py-1 rounded-md border border-gray-600 transition-colors"
                        onClick={() => setPrompt(template.template)}
                      >
                        {template.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Upload for Instagram and Facebook */}
              <div className="mt-4 flex flex-wrap gap-4">
                {contentType === "instagram" && (
                  <div className="flex items-center">
                    <Button
                      type="button"
                      onClick={() => document.getElementById("instagram-image")?.click()}
                      variant="outline"
                      className="flex items-center space-x-2 text-gray-300 border-gray-600"
                    >
                      <Camera className="h-4 w-4" />
                      <span>Upload Image for Instagram</span>
                    </Button>
                    <Input
                      id="instagram-image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    {image && (
                      <span className="ml-2 text-xs text-gray-400">
                        {image.name}
                      </span>
                    )}
                  </div>
                )}
                
                {contentType === "facebook" && (
                  <div className="flex items-center">
                    <Button
                      type="button"
                      onClick={() => document.getElementById("facebook-image")?.click()}
                      variant="outline"
                      className="flex items-center space-x-2 text-gray-300 border-gray-600"
                    >
                      <Share2 className="h-4 w-4" />
                      <span>Upload Image for Facebook</span>
                    </Button>
                    <Input
                      id="facebook-image"
                      type="file"
                      accept="image/*"
                      onChange={handleFacebookImageUpload}
                      className="hidden"
                    />
                    {facebookImage && (
                      <span className="ml-2 text-xs text-gray-400">
                        {facebookImage.name}
                      </span>
                    )}
                  </div>
                )}
              </div>

              <Button
                onClick={handleGenerate}
                disabled={
                  isLoading ||
                  !prompt ||
                  userPoints === null ||
                  userPoints < POINTS_PER_GENERATION
                }
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  `Generate Content (${POINTS_PER_GENERATION} points)`
                )}
              </Button>
            </div>

            {/* Generated content display */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-blue-400">
                {selectedHistoryItem ? "History Item" : "Generated Content"}
              </h2>
              {(selectedHistoryItem || generatedContent.length > 0) && (
                <Button
                  onClick={copyAllContent}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm flex items-center"
                >
                  <Copy className="h-4 w-4 mr-2" /> Copy All
                </Button>
              )}
            </div>
            {(selectedHistoryItem || generatedContent.length > 0) && (
              <div className="bg-gray-800 p-6 rounded-2xl space-y-4">
                {contentType === "twitter" ? (
                  <div className="space-y-4">
                    {(selectedHistoryItem
                      ? selectedHistoryItem.content.split("\n\n")
                      : generatedContent
                    ).map((tweet, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 p-4 rounded-xl relative"
                      >
                        <ReactMarkdown className="prose prose-invert max-w-none mb-2 text-sm">
                          {tweet}
                        </ReactMarkdown>
                        <div className="flex justify-between items-center text-gray-400 text-xs mt-2">
                          <span>
                            {tweet.length}/{MAX_TWEET_LENGTH}
                          </span>
                          <Button
                            onClick={() => copyAllContent()}
                            className="bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2 transition-colors"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-gray-700 p-4 rounded-xl">
                    <ReactMarkdown className="prose prose-invert max-w-none text-sm">
                      {selectedHistoryItem
                        ? selectedHistoryItem.content
                        : generatedContent[0]}
                    </ReactMarkdown>
                    <div className="flex justify-end mt-2">
                      <Button
                        onClick={() => copyAllContent()}
                        className="bg-gray-600 hover:bg-gray-500 text-white rounded-full p-2 transition-colors"
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Content preview */}
            {generatedContent.length > 0 && (
              <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl overflow-hidden">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-blue-400">
                  Preview
                </h2>
                <div className="max-w-full overflow-x-auto">
                  {renderContentMock()}
                </div>
              </div>
            )}

            {isLoading && (
              <div className="space-y-6">
                <ContentSkeleton />
                <ContentSkeleton />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
