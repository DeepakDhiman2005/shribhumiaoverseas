import React from "react"
import { RxDoubleArrowRight } from "react-icons/rx"
import { Link } from "react-router-dom"

const ProductMenu = () => {
    const section1: Array<string> = [
        "Cotton Bags",
        "Cotton Shopping Bags",
        "Cotton Laundry Bags",
        "Cotton Tote Bags",
        "Calico Bags",
        "Cloth Bags",
        "Cotton Rice Bags",
        "Cotton Beach Bags",
        "Cotton Drawstring Pouches",
        "Cotton Bottle Bags",
        "Cotton Grocery Bags",
        "Cotton Pencil Cases",
        "Cotton Laptop Sleeves",
    ]

    const section2: Array<string> = [
        "Jute Bags",
        "Jute Lunch Bags",
        "Jute Pouches",
        "Jute Promotional Bags",
        "Jute Wine Bags",
        "Jute Shopping Bags",
        "Jute Tote Bags",
        "Jute Tray",
        "Jute Printed Bags",
        "Jute Corporate Bags",
        "Jute Designer Bags",
        "Jute Cosmetic Bags",
        "Jute Laptop Bags",
    ]

    const section3: Array<string> = [
        "Jute Laundry Bags",
        "Jute Gift Bags",
        "Jute Garbage Bags",
        "Wedding Jute Gift Bags",
        "Jute File Folders",
        "Jute Beach Bags",
        "Jute Bottle Bags",
        "Jute Christmas Bags",
        "Jute Conference Bags",
        "Ladies Jute Handbags",
        "Juco Bags",
        "Canvas Bags",
    ]

    const section4: Array<string> = [
        "Handicrafts",
        "Cotton Webbing",
        "Jute Rugs",
        "Jute Slipper",
        "Jute Twine",
        "Jute Webbing",
        "Terracotta",
        "Dokra",
        "Wooden Handicrafts",
    ]

    const Div = ({ children }: { children: React.ReactNode }) => {
        return <div className="list-none text-gray-900 font-medium gap-y-1 flex flex-col justify-start items-start">
            {children}
        </div>
    }

    const CategoryLink = ({ text }: { text: string }) => {
        return <Link to={`/products?category=${text.toLowerCase().split(' ').join('-')}`}><div className="cursor-pointer group flex justify-start items-center gap-x-2">
            <RxDoubleArrowRight size={10} className="text-black" strokeWidth={0.8} />
            <p className="group-hover:text-green-600 hover:translate-x-2 transition-all duration-500">{text}</p>
        </div></Link>
    }

    return <>
        <div className="grid grid-cols-4 py-4 px-6 w-full justify-start items-start">
            <Div>
                {
                    section1.map((item, index) => (
                        <CategoryLink key={index} text={item} />
                    ))
                }
            </Div>

            <Div>
                {
                    section2.map((item, index) => (
                        <CategoryLink key={index} text={item} />
                    ))
                }
            </Div>

            <Div>
                {
                    section3.map((item, index) => (
                        <CategoryLink key={index} text={item} />
                    ))
                }
            </Div>

            <Div>
                {
                    section4.map((item, index) => (
                        <CategoryLink key={index} text={item} />
                    ))
                }
            </Div>
        </div>
    </>
}

export default ProductMenu;