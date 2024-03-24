import { Skeleton } from "@/components/ui/skeleton";

function Loading() {
  return (
    <>
      <div className="relative w-full mx-auto min-h-[30rem] max-w-[70rem] h-[80vh] max-h-[60rem] flex flex-col justify-center pl-2">
        <Skeleton className="w-[4rem]" />
        <Skeleton className="w-[17rem] md:w-[19rem]" />
        <div className="w-[15rem] sm:w-[19rem] h-fit flex items-center">
          <Skeleton className="w-full md:w-[80%] mt-4 mb-2" />
          <Skeleton className="h-10 w-10 mt-2 border-y-2 border-r-2 hover:border-zinc-600 border-zinc-400 grid place-items-center" />
        </div>
        <div className="flex gap-x-2">
          <Skeleton className="w-[5rem]" />
          <Skeleton className="w-[5rem]" />
        </div>
      </div>
    </>
  );
}

export default Loading;
