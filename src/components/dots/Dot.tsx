const Dot = ({ index, activeSlide, onClick }: { index: number, activeSlide: number, onClick: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-gray-300 w-2 h-2 transition-all duration-300 cursor-pointer rounded-full ${activeSlide === index ? "scale-125 bg-green-700" : ""
                }`}
        />
    );
};

export default Dot;