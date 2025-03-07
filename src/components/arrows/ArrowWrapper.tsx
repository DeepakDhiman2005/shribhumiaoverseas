import MyButton from "../buttons/MyButton";

const ArrowsWrapper = ({
    onClick,
    direction,
    children,
}: {
    onClick: () => void;
    direction: "left" | "right";
    children: React.ReactNode;
}) => {
    return (
        <div
            className={`absolute top-1/2 transform -translate-y-3/4 ${direction === "left" ? "left-0 translate-x-2" : "right-0 -translate-x-2"
                } z-10`}
        >
            <MyButton
                className="bg-green-600 cursor-pointer rounded-full p-2 text-white group hover:bg-green-700 transition-all"
                onClick={onClick}
            >
                {children}
            </MyButton>
        </div>
    );
};

export default ArrowsWrapper;