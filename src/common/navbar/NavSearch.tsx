import { IoSearch } from "react-icons/io5";
import { Dropdown, MenuProps } from "antd";
import { useState, useRef, useEffect } from "react";
import { Button } from '@material-tailwind/react'

const NavSearch = () => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setIsShow(false);
            }
        };

        if (isShow) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isShow]);

    const ItemCard = ({
        title,
        image,
    }: { title?: string, image?: string }) => {
        return <div className="w-full flex my-2 justify-start items-center gap-x-4">
            <div className="w-[15%]">
                <img
                    src={image}
                    alt="image"
                    className="w-full h-auto"
                />
            </div>
            <div className="w-[85%] px-2 text-start"
            >
                <h2 className="font-medium text-[16px]">{title}</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis...</p>
            </div>
        </div>
    }

    // Dropdown items
    const menuItems: MenuProps["items"] = [
        {
            key: '1',
            label: <ItemCard title="Shopping Bags" image="/product-images/IMG-20250224-WA0001.jpg" />,
        },
        {
            key: '2',
            label: <ItemCard title="Tote Bags" image="/product-images/IMG-20250224-WA0002.jpg" />,
        },
        {
            key: '3',
            label: <ItemCard title="Wine Bags" image="/product-images/IMG-20250224-WA0003.jpg" />,
        },
        {
            key: '4',
            label: <ItemCard title="File Folder" image="/product-images/IMG-20250224-WA0004.jpg" />,
        },
        {
            key: '5',
            label: <ItemCard title="Canvas Bags" image="/product-images/IMG-20250224-WA0005.jpg" />,
        },
    ];

    return (
        <div className="relative">
            <Dropdown
                menu={{ items: menuItems, className: "w-[40vw] h-[50vh] overflow-y-scroll" }}
                open={isShow}
                onOpenChange={setIsShow}
                trigger={[]}
                placement="bottomRight" // Change position if needed
            >
                <div className="flex justify-center bg-white p-[1px] overflow-hidden rounded-full border border-gray-400">
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search Here..."
                        className="outline-none px-2.5 transition-all placeholder:text-sm placeholder:text-gray-400 duration-300 focus:border-green-800 text-black w-[250px]"
                        // onFocus={() => setIsShow(true)} // Open menu on focus
                    />
                    <div>
                        <Button className="shadow-none hover:shadow-none rounded-full h-full p-2.5 text-white bg-green-800">
                            <IoSearch size={14} />
                        </Button>
                    </div>
                </div>
            </Dropdown>
        </div>
    );
};

export default NavSearch;
