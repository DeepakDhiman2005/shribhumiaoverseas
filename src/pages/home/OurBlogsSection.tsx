import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import MyButton from "../../components/buttons/MyButton";
import BlogCard, { BlogCardInterface } from "../../components/cards/BlogCard";
import Slider, { Settings } from "react-slick";
import { useRef } from "react";

export const blogs: BlogCardInterface[] = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1deRO3SUuUi1cwiQYyQk7GgXw8jy3Nx6KMg&s',
        title: 'The Rise of Eco-Friendly Bags: A Sustainable Future',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Monday, March 4',
        _id: '1'
    },
    {
        image: 'https://blog.feedspot.com/wp-content/uploads/2017/03/bag_1000px.jpg',
        title: 'Top 5 Leather Bags for Everyday Use',
        description: `<p data-pm-slice=\"0 0 []\"><strong>Canvas Bags: The Perfect Blend of Style and Sustainability</strong></p>\r\n<p>Canvas bags have become a go-to choice for eco-conscious shoppers and fashion enthusiasts alike. Their durable material, stylish appeal, and reusability make them an excellent alternative to plastic bags.</p>\r\n<h3><strong>Why Choose Canvas Bags?</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Eco-Friendly:</strong> Made from natural fibers, canvas bags reduce plastic waste and environmental pollution.</p>\r\n</li>\r\n<li>\r\n<p><strong>Durable &amp; Reusable:</strong> Unlike plastic bags, canvas bags last longer and withstand heavy loads.</p>\r\n</li>\r\n<li>\r\n<p><strong>Stylish &amp; Customizable:</strong> Available in various designs, colors, and patterns, canvas bags suit any personality and occasion.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Best Uses for Canvas Bags</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Grocery Shopping:</strong> Strong and spacious enough to carry fresh produce and essentials.</p>\r\n</li>\r\n<li>\r\n<p><strong>Everyday Tote:</strong> Perfect for books, laptops, or daily errands.</p>\r\n</li>\r\n<li>\r\n<p><strong>Beach or Travel Bag:</strong> Lightweight yet sturdy for carrying travel essentials.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Caring for Your Canvas Bag</strong></h3>\r\n<p>To maintain longevity, wash your canvas bag gently in cold water and let it air dry. Avoid harsh detergents to preserve its fabric quality.</p>\r\n<p>Switching to canvas bags is a simple yet impactful step toward a sustainable lifestyle. Make the change today and contribute to a greener planet!</p>\r\n<p>&nbsp;</p>`,
        date: 'Monday, March 4',
        _id: '2'
    },
    {
        image: 'https://i.guim.co.uk/img/media/a1e2dd24740e901cba60f9bb2171cb7b195398e2/0_121_3500_2101/master/3500.jpg?width=465&dpr=1&s=none&crop=none',
        title: 'Why Canvas Bags Are the Best for Everyday Carry',
        description: `<p data-pm-slice=\"0 0 []\"><strong>Lunch Bags &amp; Beach Bags: Practical and Stylish Essentials</strong></p>\r\n<p>Whether you're heading to work with a packed meal or spending a sunny day at the beach, having the right bag makes all the difference. Lunch bags and beach bags are designed to keep your food fresh and your essentials organized.</p>\r\n<h3><strong>Lunch Bags: Freshness on the Go</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Insulated &amp; Leakproof:</strong> Keeps your meals fresh and drinks at the right temperature.</p>\r\n</li>\r\n<li>\r\n<p><strong>Compact &amp; Stylish:</strong> Available in various designs to match your style.</p>\r\n</li>\r\n<li>\r\n<p><strong>Eco-Friendly Choice:</strong> Reduces reliance on disposable packaging and plastic bags.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Beach Bags: Your Perfect Summer Companion</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Spacious &amp; Lightweight:</strong> Holds towels, sunscreen, snacks, and more.</p>\r\n</li>\r\n<li>\r\n<p><strong>Sand &amp; Water-Resistant:</strong> Designed to handle beach conditions effortlessly.</p>\r\n</li>\r\n<li>\r\n<p><strong>Trendy &amp; Functional:</strong> Stylish designs with multiple compartments for easy access.</p>\r\n</li>\r\n</ul>\r\n<p>Choosing the right lunch or beach bag ensures convenience, style, and sustainability. Upgrade your everyday essentials today!</p>\r\n<p>&nbsp;</p>`,
        date: 'Wednesday, March 6',
        _id: '3'
    },
    {
        image: 'https://thesto.in/cdn/shop/articles/Blog_1_02.jpg?v=1704777501',
        title: 'Tote Bags: A Fashion Statement and Utility Essential',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Thursday, March 7',
        _id: '4'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlQTxg55J7mhbtVWZUyQa6mxIJApx7ibnkZA&s',
        title: 'Choosing the Right Backpack for Your Travel Needs',
        description: `<p data-pm-slice=\"0 0 []\"><strong>Canvas Bags: The Perfect Blend of Style and Sustainability</strong></p>\r\n<p>Canvas bags have become a go-to choice for eco-conscious shoppers and fashion enthusiasts alike. Their durable material, stylish appeal, and reusability make them an excellent alternative to plastic bags.</p>\r\n<h3><strong>Why Choose Canvas Bags?</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Eco-Friendly:</strong> Made from natural fibers, canvas bags reduce plastic waste and environmental pollution.</p>\r\n</li>\r\n<li>\r\n<p><strong>Durable &amp; Reusable:</strong> Unlike plastic bags, canvas bags last longer and withstand heavy loads.</p>\r\n</li>\r\n<li>\r\n<p><strong>Stylish &amp; Customizable:</strong> Available in various designs, colors, and patterns, canvas bags suit any personality and occasion.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Best Uses for Canvas Bags</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Grocery Shopping:</strong> Strong and spacious enough to carry fresh produce and essentials.</p>\r\n</li>\r\n<li>\r\n<p><strong>Everyday Tote:</strong> Perfect for books, laptops, or daily errands.</p>\r\n</li>\r\n<li>\r\n<p><strong>Beach or Travel Bag:</strong> Lightweight yet sturdy for carrying travel essentials.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Caring for Your Canvas Bag</strong></h3>\r\n<p>To maintain longevity, wash your canvas bag gently in cold water and let it air dry. Avoid harsh detergents to preserve its fabric quality.</p>\r\n<p>Switching to canvas bags is a simple yet impactful step toward a sustainable lifestyle. Make the change today and contribute to a greener planet!</p>\r\n<p>&nbsp;</p>`,
        date: 'Friday, March 8',
        _id: '5'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7rImJX_PMtIuRQslf3ccCpwpABHjglvB9sA&s',
        title: 'Designer Handbags: Are They Worth the Investment?',
        description: `<p data-pm-slice=\"0 0 []\"><strong>Lunch Bags &amp; Beach Bags: Practical and Stylish Essentials</strong></p>\r\n<p>Whether you're heading to work with a packed meal or spending a sunny day at the beach, having the right bag makes all the difference. Lunch bags and beach bags are designed to keep your food fresh and your essentials organized.</p>\r\n<h3><strong>Lunch Bags: Freshness on the Go</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Insulated &amp; Leakproof:</strong> Keeps your meals fresh and drinks at the right temperature.</p>\r\n</li>\r\n<li>\r\n<p><strong>Compact &amp; Stylish:</strong> Available in various designs to match your style.</p>\r\n</li>\r\n<li>\r\n<p><strong>Eco-Friendly Choice:</strong> Reduces reliance on disposable packaging and plastic bags.</p>\r\n</li>\r\n</ul>\r\n<h3><strong>Beach Bags: Your Perfect Summer Companion</strong></h3>\r\n<ul data-spread=\"false\">\r\n<li>\r\n<p><strong>Spacious &amp; Lightweight:</strong> Holds towels, sunscreen, snacks, and more.</p>\r\n</li>\r\n<li>\r\n<p><strong>Sand &amp; Water-Resistant:</strong> Designed to handle beach conditions effortlessly.</p>\r\n</li>\r\n<li>\r\n<p><strong>Trendy &amp; Functional:</strong> Stylish designs with multiple compartments for easy access.</p>\r\n</li>\r\n</ul>\r\n<p>Choosing the right lunch or beach bag ensures convenience, style, and sustainability. Upgrade your everyday essentials today!</p>\r\n<p>&nbsp;</p>`,
        date: 'Saturday, March 9',
        _id: '6'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ZK9_3Ht5saAtT5VuCxqMM7z4vfHs4pjqiAA3yID2xeyv8oguYKkDbzKMc7oZTJuXfO4&usqp=CAU',
        title: 'Jute Bags: The Perfect Blend of Sustainability and Style',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Sunday, March 10',
        _id: '7'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT964f0MJG6Y3luwfqVO7KIPO91T09ltosiew&s',
        title: 'Messenger Bags: A Modern Take on Classic Utility',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Monday, March 11',
        _id: '8'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGiGk9Zg_xBR0HZODbl7WdqV3iq-dvaDpg8g&s',
        title: 'Wine Bottle Bags: A Classy Way to Gift and Carry',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Tuesday, March 12',
        _id: '9'
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLaU2PZOKtGhiSZG_9j3lhE3T-yyV1NfVqA&s',
        title: 'Stylish Purses for Every Occasion',
        description: `<p><span style=\"font-size: 14pt;\"><strong>Best Laptop Bags for Work &amp; Travel &ndash; Stay Stylish &amp; Secure!</strong></span></p>\r\n<p>A laptop bag is more than just an accessory&mdash;it&rsquo;s a necessity for professionals, students, and travelers. Whether you're commuting to work or heading on a trip, a well-designed laptop bag keeps your device safe while offering comfort and style.</p>\r\n<p><strong>Key Features to Look For:</strong></p>\r\n<ul>\r\n<li><strong data-start=\"355\" data-end=\"376\">Padded Protection</strong> &ndash; Shields your laptop from bumps and drops.</li>\r\n<li><strong data-start=\"425\" data-end=\"453\">Water-Resistant Material</strong> &ndash; Keeps your device safe from spills and rain.</li>\r\n<li><strong data-start=\"505\" data-end=\"530\">Multiple Compartments</strong> &ndash; Organizes accessories like chargers, notebooks, and pens.</li>\r\n<li><strong data-start=\"595\" data-end=\"615\">Ergonomic Design</strong> &ndash; Ensures comfort with adjustable straps.</li>\r\n</ul>\r\n<p>From sleek leather briefcases to modern anti-theft backpacks, there's a perfect laptop bag for everyone. Choose wisely and carry your essentials with confidence!</p>`,
        date: 'Wednesday, March 13',
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
