import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MyButton from "../../components/buttons/MyButton";
import BlogCard, { BlogCardInterface } from "../../components/cards/BlogCard";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";

export const blogs: BlogCardInterface[] = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1deRO3SUuUi1cwiQYyQk7GgXw8jy3Nx6KMg&s',
        title: 'The Rise of Eco-Friendly Bags: A Sustainable Future',
        description: 'Eco-friendly bags have gained immense popularity in recent years due to growing environmental concerns. Made from jute, cotton, and recycled materials, these bags serve as a sustainable alternative to plastic bags. Consumers are now choosing reusable options to reduce waste and contribute to a greener planet. Many companies have embraced this trend by offering stylish and durable bags that cater to both fashion and functionality. The shift towards sustainable shopping habits has led to increased demand for biodegradable and ethically sourced bags. As more brands join the eco-conscious movement, the future of bag manufacturing looks promising.',
        date: 'Monday, March 4',
        id: '1'
    },
    {
        image: 'https://blog.feedspot.com/wp-content/uploads/2017/03/bag_1000px.jpg',
        title: 'Top 5 Leather Bags for Everyday Use',
        description: 'Leather bags are timeless accessories that combine durability with elegance. Whether for work, travel, or casual outings, a high-quality leather bag enhances your style while offering ample storage. Brands worldwide produce handcrafted leather bags with exceptional attention to detail, ensuring longevity and sophistication. With a variety of designs such as tote bags, messenger bags, and crossbody options, leather bags cater to different needs. Investing in a genuine leather bag is a smart decision, as it not only adds class to your wardrobe but also stands the test of time with proper care and maintenance.',
        date: 'Tuesday, March 5',
        id: '2'
    },
    {
        image: 'https://i.guim.co.uk/img/media/a1e2dd24740e901cba60f9bb2171cb7b195398e2/0_121_3500_2101/master/3500.jpg?width=465&dpr=1&s=none&crop=none',
        title: 'Why Canvas Bags Are the Best for Everyday Carry',
        description: 'Canvas bags have become a staple for individuals who seek versatility and durability. Known for their lightweight yet sturdy nature, these bags are perfect for daily use, whether for shopping, work, or travel. Many brands offer stylish designs, making them a fashion-forward choice for eco-conscious consumers. With large compartments and reinforced stitching, canvas bags can hold heavy loads without wear and tear. Additionally, their machine-washable fabric makes them easy to maintain. The increasing demand for sustainable products has propelled the popularity of canvas bags as a reliable and environmentally friendly option.',
        date: 'Wednesday, March 6',
        id: '3'
    },
    {
        image: 'https://thesto.in/cdn/shop/articles/Blog_1_02.jpg?v=1704777501',
        title: 'Tote Bags: A Fashion Statement and Utility Essential',
        description: 'Tote bags have transcended beyond mere accessories to become a statement of personal style and practicality. Available in a variety of materials, from cotton to leather, these bags offer a blend of fashion and function. The spacious interiors make them ideal for carrying groceries, laptops, books, and other essentials. Their minimalist yet chic appeal has made them a favorite among students, professionals, and travelers alike. With customizable designs and prints, tote bags allow individuals to express their creativity while promoting sustainable living. This makes them an indispensable part of modern fashion culture.',
        date: 'Thursday, March 7',
        id: '4'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQTxg55J7mhbtVWZUyQa6mxIJApx7ibnkZA&s',
        title: 'Choosing the Right Backpack for Your Travel Needs',
        description: 'A well-designed backpack is crucial for comfortable and organized travel. Whether hiking, commuting, or exploring a new city, having the right backpack can enhance your experience. Features like padded straps, multiple compartments, and waterproof materials ensure both comfort and durability. Travelers often prefer backpacks with anti-theft locks and RFID-blocking technology for added security. With ergonomic designs and lightweight materials, modern backpacks reduce strain on the shoulders and back. From casual daypacks to rugged hiking bags, the market offers a wide range of options to suit different needs and preferences.',
        date: 'Friday, March 8',
        id: '5'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rImJX_PMtIuRQslf3ccCpwpABHjglvB9sA&s',
        title: 'Designer Handbags: Are They Worth the Investment?',
        description: 'Luxury handbags have long been a symbol of status and elegance. High-end brands craft these bags with premium materials, ensuring both quality and exclusivity. While the price tags can be steep, many fashion enthusiasts consider them a worthwhile investment due to their timeless appeal. Designer handbags often retain or even increase in value over time, making them a collectible asset. The craftsmanship, intricate detailing, and superior durability set them apart from mass-produced alternatives. For those who appreciate fashion and functionality, a well-chosen designer handbag is more than just an accessory—it’s a statement piece.',
        date: 'Saturday, March 9',
        id: '6'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZK9_3Ht5saAtT5VuCxqMM7z4vfHs4pjqiAA3yID2xeyv8oguYKkDbzKMc7oZTJuXfO4&usqp=CAU',
        title: 'Jute Bags: The Perfect Blend of Sustainability and Style',
        description: 'Jute bags have become a popular choice for eco-conscious shoppers. Their biodegradable nature and sturdy build make them a reliable alternative to plastic bags. Jute is a natural fiber known for its durability and resilience, making these bags ideal for carrying groceries and daily essentials. Many manufacturers offer jute bags with trendy designs and prints, allowing customers to stay fashionable while being environmentally responsible. As sustainability takes center stage in consumer choices, jute bags continue to gain prominence in the retail sector.',
        date: 'Sunday, March 10',
        id: '7'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT964f0MJG6Y3luwfqVO7KIPO91T09ltosiew&s',
        title: 'Messenger Bags: A Modern Take on Classic Utility',
        description: 'Messenger bags have evolved from simple courier bags to stylish accessories for professionals and students. Their crossbody design offers convenience and comfort, allowing users to carry essentials effortlessly. Made from materials like leather, canvas, and nylon, messenger bags come in various sizes and styles. They feature organized compartments, making them perfect for carrying laptops, documents, and personal items. With their urban appeal and functional design, messenger bags remain a popular choice for those seeking a practical yet stylish bag for everyday use.',
        date: 'Monday, March 11',
        id: '8'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiGk9Zg_xBR0HZODbl7WdqV3iq-dvaDpg8g&s',
        title: 'Wine Bottle Bags: A Classy Way to Gift and Carry',
        description: 'Wine bottle bags add an elegant touch to gifting and transporting wine. Whether made from fabric, paper, or jute, these bags provide a secure and stylish way to carry bottles. Many brands offer customized wine bags for corporate gifting and special occasions. With padded interiors and sturdy handles, these bags ensure safety while adding a touch of sophistication. Their reusable nature also makes them an eco-friendly option, reducing the need for single-use packaging. Whether for personal use or professional gifting, wine bottle bags make a lasting impression.',
        date: 'Tuesday, March 12',
        id: '9'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLaU2PZOKtGhiSZG_9j3lhE3T-yyV1NfVqA&s',
        title: 'Stylish Purses for Every Occasion',
        description: 'Purses are essential accessories that complement an individual’s outfit and personality. Available in a wide range of materials and designs, they cater to both casual and formal occasions. Whether a small clutch for an evening event or a spacious satchel for daily use, there’s a purse for every need. Designers continue to innovate with bold colors, patterns, and textures, keeping up with evolving fashion trends. Beyond aesthetics, purses offer practical storage for essentials like wallets, keys, and cosmetics. A well-chosen purse is both a style statement and a functional necessity.',
        date: 'Wednesday, March 13',
        id: '10'
    }
];


const OurBlogsSection = () => {
    const sliderRef = useRef<Slider | null>(null);

    const settings: Settings = {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        speed: 400,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className="flex justify-start items-start flex-col gap-y-10 sm:flex-row gap-x-8 px-4 sm:px-6 py-12">
            <div className="w-full sm:w-1/2 md:w-[60%] lg:w-[70%] flex flex-col justify-start items-start gap-y-4">
                <div className="flex justify-between items-end w-full">
                    <div className="flex flex-col justify-start items-start gap-y-1">
                        <h2 className="text-green-500">Recent Activities</h2>
                        <h2 className="font-semibold text-[24px]">Our Blogs</h2>
                    </div>

                    {/* Custom Arrows */}
                    <div className="flex justify-center items-center gap-x-2">
                        <MyButton
                            className="rounded-full bg-green-600 text-white p-1"
                            onClick={() => sliderRef.current?.slickPrev()} // Move slide to previous
                        >
                            <IoIosArrowBack size={16} />
                        </MyButton>
                        <MyButton
                            className="rounded-full bg-green-600 text-white p-1"
                            onClick={() => sliderRef.current?.slickNext()} // Move slide to next
                        >
                            <IoIosArrowForward size={16} />
                        </MyButton>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="w-full">
                    <Slider ref={sliderRef} {...settings}>
                        {blogs.map((item, index) => (
                            <div key={index} className="px-2 pb-4 w-full">
                                <BlogCard
                                    {...item}
                                    limit={50}
                                    titleLimit={16}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            {/* Latest Updates Section */}
            <div className="w-full sm:w-1/2 md:w-[60%] bg-gray-100 lg:w-[30%] flex flex-col justify-start items-start gap-y-4">
                <div className="flex flex-col justify-start items-start gap-y-1">
                    <h2 className="text-green-500">Shri Bhumia Overseas</h2>
                    <h2 className="font-semibold text-[24px]">Latest Updates</h2>
                </div>
                <div className="w-full">
                    <BlogCard 
                        title={blogs[0].title}
                        description={blogs[0].description}
                        date={blogs[0].date}
                        image={blogs[0].image}
                        limit={50}
                        id={blogs[0].id}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurBlogsSection;
