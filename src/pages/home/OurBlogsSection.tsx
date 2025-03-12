import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MyButton from "../../components/buttons/MyButton";
import BlogCard, { BlogCardInterface } from "../../components/cards/BlogCard";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";

export const blogs: BlogCardInterface[] = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1deRO3SUuUi1cwiQYyQk7GgXw8jy3Nx6KMg&s',
        title: 'The Rise of Eco-Friendly Bags: A Sustainable Future',
        description: `<p><span style="font-size: 14pt;"><strong>The Rise of Eco-Friendly Bags: A Sustainable Future</strong></span></p>
<p>In a world striving for sustainability, eco-friendly bags have emerged as a game-changer. These reusable and biodegradable bags offer a practical solution to reduce plastic waste while promoting an environmentally conscious lifestyle.</p>
<p><strong>Why Choose Eco-Friendly Bags?</strong></p>
<ul>
<li><strong>Environmental Benefits</strong> – Reduces plastic pollution and carbon footprint.</li>
<li><strong>Durability & Reusability</strong> – Made from strong materials like cotton, jute, and canvas for long-term use.</li>
<li><strong>Stylish & Versatile</strong> – Available in various designs for shopping, work, and travel.</li>
<li><strong>Cost-Effective</strong> – Saves money by eliminating the need for single-use plastic bags.</li>
</ul>
<p>Switching to eco-friendly bags is a simple yet impactful step toward a greener planet. Choose sustainability and make a difference—one bag at a time!</p>
`,
        date: '08-March-2025',
        _id: '1'
    },
    {
        image: 'https://blog.feedspot.com/wp-content/uploads/2017/03/bag_1000px.jpg',
        title: 'Top 5 Leather Bags for Everyday Use',
        description: `<p><span style="font-size: 14pt;"><strong>Top 5 Leather Bags for Everyday Use</strong></span></p>
<p>Leather bags are a timeless accessory that combines durability, elegance, and functionality. Whether you're heading to work, running errands, or traveling, a high-quality leather bag can enhance your style while offering practicality.</p>
<p><strong>Best Leather Bags for Daily Use:</strong></p>
<ul>
<li><strong>Classic Leather Tote</strong> – Spacious and stylish, perfect for work or casual outings.</li>
<li><strong>Messenger Bag</strong> – A sleek and professional choice for carrying essentials on the go.</li>
<li><strong>Leather Backpack</strong> – Ideal for commuters and travelers, offering comfort and storage.</li>
<li><strong>Crossbody Leather Bag</strong> – A compact and hands-free option for everyday essentials.</li>
<li><strong>Leather Duffle Bag</strong> – Great for short trips or gym sessions with a sophisticated touch.</li>
</ul>
<p>Investing in a premium leather bag ensures longevity, style, and practicality. Choose the one that best fits your lifestyle and elevate your everyday carry with elegance!</p>
`,
        date: '08-March-2025',
        _id: '2'
    },
    {
        image: 'https://i.guim.co.uk/img/media/a1e2dd24740e901cba60f9bb2171cb7b195398e2/0_121_3500_2101/master/3500.jpg?width=465&dpr=1&s=none&crop=none',
        title: 'Why Canvas Bags Are the Best for Everyday Carry',
        description: `<p><span style="font-size: 14pt;"><strong>Why Canvas Bags Are the Best for Everyday Carry</strong></span></p>
<p>When it comes to durability, style, and sustainability, canvas bags are a top choice for everyday carry. Whether you're heading to work, shopping, or traveling, these bags offer the perfect blend of functionality and eco-friendliness.</p>
<p><strong>Reasons to Choose Canvas Bags:</strong></p>
<ul>
<li><strong>Eco-Friendly</strong> – Made from natural fibers, canvas bags reduce plastic waste and are biodegradable.</li>
<li><strong>Durable & Long-Lasting</strong> – The sturdy fabric ensures the bag withstands daily wear and tear.</li>
<li><strong>Spacious & Versatile</strong> – Available in various sizes and styles to suit different needs.</li>
<li><strong>Easy to Maintain</strong> – Most canvas bags are washable, making them ideal for regular use.</li>
<li><strong>Fashionable & Customizable</strong> – Comes in trendy designs and can be personalized with prints or embroidery.</li>
</ul>
<p>With their practicality and sustainability, canvas bags are a must-have for those who value both style and environmental responsibility. Make the switch today and enjoy a reliable, eco-friendly companion for all your daily activities!</p>
`,
        date: '07-March-2025',
        _id: '3'
    },
    {
        image: 'https://thesto.in/cdn/shop/articles/Blog_1_02.jpg?v=1704777501',
        title: 'Tote Bags: A Fashion Statement and Utility Essential',
        description: `<p><span style="font-size: 14pt;"><strong>Tote Bags: A Fashion Statement and Utility Essential</strong></span></p>
<p>Tote bags have become a must-have accessory, blending style with practicality. Whether you need a bag for work, shopping, or travel, a tote bag offers the perfect balance of fashion and function.</p>
<p><strong>Why Tote Bags Are a Must-Have:</strong></p>
<ul>
<li><strong>Stylish & Trendy</strong> – Available in a variety of designs, colors, and materials to match any outfit.</li>
<li><strong>Spacious & Functional</strong> – Large compartments make it easy to carry daily essentials, from laptops to groceries.</li>
<li><strong>Eco-Friendly Choice</strong> – Reusable and sustainable, reducing the need for plastic bags.</li>
<li><strong>Versatile for Any Occasion</strong> – Ideal for work, shopping, gym, beach trips, and more.</li>
<li><strong>Durable & Long-Lasting</strong> – Made from strong materials like cotton, canvas, and leather for extended use.</li>
</ul>
<p>Whether you prefer a minimalist tote or a bold statement piece, these bags offer the perfect combination of fashion and utility. Elevate your everyday carry with a stylish and functional tote bag today!</p>
`,
        date: '06-March-2025',
        _id: '4'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQTxg55J7mhbtVWZUyQa6mxIJApx7ibnkZA&s',
        title: 'Choosing the Right Backpack for Your Travel Needs',
        description: `<p><span style="font-size: 14pt;"><strong>Choosing the Right Backpack for Your Travel Needs</strong></span></p>
<p>When it comes to travel, having the right backpack can make all the difference. A well-designed backpack ensures comfort, organization, and convenience, allowing you to explore without hassle.</p>
<p><strong>Key Factors to Consider:</strong></p>
<ul>
<li><strong>Size & Capacity</strong> – Choose a backpack that fits your travel style, whether it's a carry-on for short trips or a larger pack for extended adventures.</li>
<li><strong>Comfort & Ergonomics</strong> – Look for padded shoulder straps, back support, and adjustable features to reduce strain during long journeys.</li>
<li><strong>Material & Durability</strong> – Opt for water-resistant and high-quality materials to withstand different weather conditions.</li>
<li><strong>Compartments & Organization</strong> – Multiple pockets and sections help keep your belongings organized and easily accessible.</li>
<li><strong>Security Features</strong> – Anti-theft designs, lockable zippers, and RFID-blocking pockets add extra protection for your valuables.</li>
</ul>
<p>Finding the right backpack enhances your travel experience by keeping essentials secure and comfortable to carry. Choose wisely and embark on your adventures with ease!</p>
`,
        date: '04-March-2025',
        _id: '5'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rImJX_PMtIuRQslf3ccCpwpABHjglvB9sA&s',
        title: 'Designer Handbags: Are They Worth the Investment?',
        description: `<p><span style="font-size: 14pt;"><strong>Designer Handbags: Are They Worth the Investment?</strong></span></p>
<p>Designer handbags have long been a symbol of luxury, status, and craftsmanship. While they often come with a hefty price tag, many fashion enthusiasts consider them a worthwhile investment. But are they truly worth it?</p>
<p><strong>Reasons to Invest in a Designer Handbag:</strong></p>
<ul>
<li><strong>Premium Quality</strong> – Made from high-end materials with expert craftsmanship, ensuring durability.</li>
<li><strong>Timeless Style</strong> – Classic designs never go out of fashion and can be used for years.</li>
<li><strong>High Resale Value</strong> – Many designer bags appreciate in value, making them a smart investment.</li>
<li><strong>Exclusivity & Status</strong> – Owning a luxury handbag adds a touch of elegance and prestige.</li>
<li><strong>Sustainable Choice</strong> – Well-made bags last longer, reducing the need for frequent replacements.</li>
</ul>
<p>While designer handbags require a significant upfront cost, their quality, durability, and potential resale value make them a worthwhile addition to any wardrobe. If chosen wisely, a designer handbag can be both a fashion statement and a long-term asset.</p>
`,
        date: '04-March-2025',
        _id: '6'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZK9_3Ht5saAtT5VuCxqMM7z4vfHs4pjqiAA3yID2xeyv8oguYKkDbzKMc7oZTJuXfO4&usqp=CAU',
        title: 'Jute Bags: The Perfect Blend of Sustainability and Style',
        description: `<p><span style="font-size: 14pt;"><strong>Jute Bags: The Perfect Blend of Sustainability and Style</strong></span></p>
<p>In a world shifting towards eco-friendly alternatives, jute bags have emerged as a stylish and sustainable choice. Made from natural jute fibers, these bags offer durability, versatility, and an environmentally responsible alternative to plastic.</p>
<p><strong>Why Choose Jute Bags?</strong></p>
<ul>
<li><strong>Eco-Friendly & Biodegradable</strong> – Jute is a natural fiber that decomposes easily, reducing environmental waste.</li>
<li><strong>Durable & Long-Lasting</strong> – Unlike plastic bags, jute bags are strong and can carry heavy loads without tearing.</li>
<li><strong>Stylish & Versatile</strong> – Available in various designs, jute bags can complement casual and formal outfits alike.</li>
<li><strong>Reusable & Cost-Effective</strong> – Designed for multiple uses, they help cut down on single-use plastic consumption.</li>
<li><strong>Perfect for Various Uses</strong> – Ideal for shopping, work, travel, and gifting.</li>
</ul>
<p>Jute bags are more than just a trend; they represent a commitment to sustainability while keeping your fashion game strong. Make the switch today and enjoy the perfect blend of style and responsibility!</p>
`,
        date: '03-March-2025',
        _id: '7'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT964f0MJG6Y3luwfqVO7KIPO91T09ltosiew&s',
        title: 'Messenger Bags: A Modern Take on Classic Utility',
        description: `<p><span style="font-size: 14pt;"><strong>Messenger Bags: A Modern Take on Classic Utility</strong></span></p>
<p>Messenger bags have evolved from their traditional roots to become a stylish and functional accessory for professionals, students, and travelers. Designed for convenience and efficiency, these bags blend classic utility with modern aesthetics.</p>
<p><strong>Why Choose a Messenger Bag?</strong></p>
<ul>
<li><strong>Sleek & Professional</strong> – Perfect for work, meetings, and business travel with a polished look.</li>
<li><strong>Spacious & Organized</strong> – Multiple compartments help store laptops, documents, and daily essentials.</li>
<li><strong>Comfortable & Convenient</strong> – Adjustable shoulder straps ensure a comfortable carrying experience.</li>
<li><strong>Durable & Stylish</strong> – Available in leather, canvas, and synthetic materials for both durability and fashion.</li>
<li><strong>Perfect for Daily Use</strong> – Great for office commutes, casual outings, and travel.</li>
</ul>
<p>Whether you're looking for a sleek leather messenger bag or a casual canvas style, these bags offer a perfect blend of utility and fashion. Upgrade your everyday carry with a messenger bag that suits your lifestyle!</p>
`,
        date: '03-March-2025',
        _id: '8'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiGk9Zg_xBR0HZODbl7WdqV3iq-dvaDpg8g&s',
        title: 'Wine Bottle Bags: A Classy Way to Gift and Carry',
        description: `<p><span style="font-size: 14pt;"><strong>Wine Bottle Bags: A Classy Way to Gift and Carry</strong></span></p>
<p>When it comes to presenting a bottle of wine, the right packaging can make all the difference. Wine bottle bags add a touch of elegance and sophistication, making them the perfect choice for gifting and carrying bottles securely.</p>
<p><strong>Why Use Wine Bottle Bags?</strong></p>
<ul>
<li><strong>Elegant Presentation</strong> – Enhance the look of your gift with stylish and well-designed wine bags.</li>
<li><strong>Secure & Protective</strong> – Prevents bottles from breaking or clinking during transport.</li>
<li><strong>Eco-Friendly Options</strong> – Choose reusable fabric or jute wine bags for a sustainable touch.</li>
<li><strong>Perfect for Any Occasion</strong> – Ideal for weddings, dinner parties, corporate gifts, and celebrations.</li>
<li><strong>Customizable & Personalizable</strong> – Available in various designs, materials, and branding options.</li>
</ul>
<p>Whether you're gifting a fine wine or carrying a bottle to a special occasion, a wine bottle bag adds a classy and practical touch. Elevate your wine presentation with a beautifully designed wine bag today!</p>
`,
        date: '02-March-2025',
        _id: '9'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLaU2PZOKtGhiSZG_9j3lhE3T-yyV1NfVqA&s',
        title: 'Stylish Purses for Every Occasion',
        description: `<p><span style="font-size: 14pt;"><strong>Stylish Purses for Every Occasion</strong></span></p>
<p>A stylish purse is more than just an accessory—it’s a reflection of personal style and a functional essential for carrying daily necessities. Whether you're heading to a formal event, a casual outing, or a business meeting, the right purse can elevate your look effortlessly.</p>
<p><strong>Types of Purses for Different Occasions:</strong></p>
<ul>
<li><strong>Clutch Bags</strong> – Perfect for formal events, weddings, and evening parties, offering a chic and minimalistic look.</li>
<li><strong>Tote Bags</strong> – Ideal for work or shopping, providing ample space and a stylish appeal.</li>
<li><strong>Crossbody Bags</strong> – Great for casual outings and travel, ensuring comfort and convenience.</li>
<li><strong>Shoulder Bags</strong> – A versatile choice for both professional and everyday use, combining fashion and function.</li>
<li><strong>Mini Bags</strong> – Trendy and compact, perfect for carrying just the essentials on a night out.</li>
</ul>
<p>From sleek leather designs to trendy fabric styles, there’s a purse for every occasion. Choose one that complements your personality and keeps your essentials organized while adding a touch of elegance to your outfit.</p>
`,
        date: '02-March-2025',
        _id: '10'
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
        <div className="flex justify-start items-start flex-col gap-y-10 sm:flex-row gap-x-8 px-4 sm:px-6 py-8">
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
            <div className="w-full sm:w-1/2 md:w-[60%] p-3 rounded-lg bg-gray-100 lg:w-[30%] flex flex-col justify-start items-start gap-y-4">
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
                        _id={blogs[0]?._id as string}
                    />
                </div>
            </div>
        </div>
    );
};

export default OurBlogsSection;
