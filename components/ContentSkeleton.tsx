export function ContentSkeleton() {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl animate-pulse">
      <div className="h-7 bg-gray-700 rounded-md w-1/3 mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
        <div className="h-4 bg-gray-700 rounded w-4/6"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
    </div>
  )
} 