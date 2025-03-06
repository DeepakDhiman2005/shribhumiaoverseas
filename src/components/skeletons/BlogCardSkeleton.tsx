const BlogCardSkeleton = () => {
    return (
        <div className="w-full flex flex-col justify-start items-start rounded-md overflow-hidden border border-solid border-gray-300 shadow-[0px_0px_3px_1px_#dbdbdb] animate-pulse">
            <div className="w-full h-[200px] bg-gray-300"></div>
            <div className="flex flex-col px-3 py-4 justify-start items-start gap-y-2 w-full">
                <div className="flex flex-col justify-start items-start w-full">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="flex justify-start items-center gap-x-2 w-full mt-2">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                    </div>
                </div>
                <div className="w-[10%] h-[2px] bg-gray-300"></div>
                <div className="h-16 bg-gray-300 rounded w-full"></div>
                <div className="h-10 bg-gray-300 rounded w-1/3"></div>
            </div>
        </div>
    );
};

export default BlogCardSkeleton;