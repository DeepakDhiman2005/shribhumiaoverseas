const ProductCardSkeleton = () => {
    return (
        <div className="w-full h-auto border border-solid border-gray-200 animate-pulse">
            <div className="w-full h-[250px] bg-gray-300"></div>
            <div className="bg-gray-200 py-3 px-2 flex flex-col justify-center items-center gap-y-3">
                <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
                <div className="h-[1px] w-full bg-gray-400"></div>
                <div className="flex justify-around text-[15px] w-full items-center">
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="h-[1px] w-full bg-gray-400"></div>
                <div className="flex justify-around text-[15px] w-full items-center">
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                    <div className="w-12 h-3 bg-gray-300 rounded"></div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;
