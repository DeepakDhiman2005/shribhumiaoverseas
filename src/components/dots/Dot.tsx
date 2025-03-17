const Dot = ({ index, activeSlide, onClick }: { index: number, activeSlide: number, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-gray-400 w-2 h-2 transition-all duration-300 cursor-pointer rounded-full ${activeSlide === index ? " bg-green-700 w-4" : ""
                }`}
        />
    );
};

export default Dot;