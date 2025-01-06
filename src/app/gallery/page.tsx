import { Skeleton } from "@/components/ui/skeleton"

export default function Gallery() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center pt-10 gap-2">
        <span className="text-4xl lg:text-6xl font-bold text-pretty w-max">Gallery</span>
        <span className="text-xs lg:text-lg font-medium text-neutral-400 text-pretty w-max">This is the gallery after every hour a new painting gets added</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-4">
        <Skeleton className="w-full h-[300px]" />
        <Skeleton className="w-full h-[300px]" />
        <Skeleton className="w-full h-[300px]" />
        <Skeleton className="w-full h-[300px]" />
        <Skeleton className="w-full h-[300px]" />
        <Skeleton className="w-full h-[300px]" />
      </div>
    </div>
  )
}