'use client';

import React, { useState, useEffect } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, parseISO } from 'date-fns';
import { ChevronLeft, ChevronRight, Sparkles, Upload, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { TwitterMock, LinkedInMock, InstagramMock } from "@/components/social-mocks";
import { getUserPoints, updateUserPoints } from "@/utils/db/actions";

const events = [
  { id: 1, date: '2023-05-15', title: 'Team Meeting', description: 'Discuss project progress' },
  { id: 2, date: '2023-05-20', title: 'Product Launch', description: 'Launch new feature' },
  { id: 3, date: '2023-05-25', title: 'Client Presentation', description: 'Present Q2 results' },
];

export default function AIEnhancedFullPageCalendarWithAnalytics() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAIEnabled, setIsAIEnabled] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [aiOutput, setAiOutput] = useState('');
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState('post');
  const [userPoints, setUserPoints] = useState(0);
  const [contentType, setContentType] = useState('Twitter');

  useEffect(() => {
    async function fetchPoints() {
      const points = await getUserPoints('user-id'); // Replace with actual user ID
      setUserPoints(points);
    }
    fetchPoints();
  }, []);

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const monthDays = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => new Date(prevMonth.getFullYear(), prevMonth.getMonth() + 1, 1));
  };

  const getEventsForDate = (date: Date) => {
    return events.filter(event => isSameDay(parseISO(event.date), date));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setIsDrawerOpen(true);
    setActiveTab('post');
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(file);
      console.log('File uploaded:', file.name);
    }
  };

  const generateAIPost = async () => {
    if (!selectedDate || !isAIEnabled || userPoints <= 0) return;

    await updateUserPoints('user-id', -5); // Replace with actual user ID and point deduction logic
    setUserPoints(prev => prev - 5);

    setAiOutput(`AI-generated post for ${format(selectedDate, 'MMMM d, yyyy')}: ${userInput}`);
  };

  const renderAnalyticsDashboard = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">157</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="pt-16 flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold">{format(currentMonth, 'MMMM yyyy')}</h1>
          <div>
            <Button onClick={goToPreviousMonth} variant="outline" size="icon" className="mr-2">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button onClick={goToNextMonth} variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map(day => (
            <div key={day} className="text-center font-bold py-2 bg-primary text-primary-foreground">
              {day}
            </div>
          ))}
          {monthDays.map(day => {
            const dayEvents = getEventsForDate(day);
            return (
              <div
                key={day.toString()}
                className={`border p-4 h-24 flex flex-col justify-between transition-colors duration-200 ${
                  isSameMonth(day, currentMonth) ? 'bg-card' : 'bg-muted text-muted-foreground'
                } ${isSameDay(day, new Date()) ? 'bg-accent text-accent-foreground' : ''} 
                hover:bg-accent hover:text-accent-foreground cursor-pointer`}
                onClick={() => handleDateClick(day)}
              >
                <div className="text-right">{format(day, 'd')}</div>
                {dayEvents.length > 0 && (
                  <div className="mt-1 flex flex-wrap gap-1">
                    {dayEvents.map(event => (
                      <div key={event.id} className="w-2 h-2 bg-primary rounded-full" />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>{selectedDate ? format(selectedDate, 'MMMM d, yyyy') : 'Events'}</SheetTitle>
            <SheetDescription>
              {selectedDate ? `Manage content for ${format(selectedDate, 'MMMM d, yyyy')}` : 'Select a date to manage content'}
            </SheetDescription>
          </SheetHeader>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="post">Create Post</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="post" className="mt-4">
              <div className="flex items-center space-x-2 mb-4">
                <Switch
                  id="ai-mode"
                  checked={isAIEnabled}
                  onCheckedChange={setIsAIEnabled}
                />
                <Label htmlFor="ai-mode" className="flex items-center cursor-pointer">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Ask AI
                </Label>
                <Button variant="outline" size="sm" className="ml-auto">
                  <Upload className="w-4 h-4 mr-2" />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    Upload Image
                  </label>
                  <input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </Button>
              </div>
              <div className="mb-4">
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="bg-gray-800 text-white p-2 rounded"
                >
                  <option value="Twitter">Twitter</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                </select>
              </div>
              <ScrollArea className="h-[50vh]">
                <Textarea
                  placeholder="Enter your post content here..."
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="mb-4"
                />
                {isAIEnabled && (
                  <Button onClick={generateAIPost} className="mb-4">
                    Generate AI Post
                  </Button>
                )}
                {aiOutput && (
                  <div className="mb-4 p-4 bg-primary/10 rounded-lg">
                    <h3 className="font-semibold mb-2">AI-Generated Post:</h3>
                    <p className="whitespace-pre-wrap">{aiOutput}</p>
                  </div>
                )}
                {uploadedImage && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Uploaded Image:</h3>
                    <img
                      src={URL.createObjectURL(uploadedImage)}
                      alt="Uploaded content"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                )}
                {selectedDate && getEventsForDate(selectedDate).length > 0 && (
                  <div>
                    <h3 className="font-semibold mb-2">Scheduled Events:</h3>
                    {getEventsForDate(selectedDate).map(event => (
                      <div key={event.id} className="mb-4 p-4 bg-muted rounded-lg">
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
            <TabsContent value="analytics" className="mt-4">
              <ScrollArea className="h-[50vh]">
                {renderAnalyticsDashboard()}
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </SheetContent>
      </Sheet>
    </div>
  );
}