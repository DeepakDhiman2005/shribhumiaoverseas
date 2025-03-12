const filterCategory: Array<{
    category?: {
        name: string;
        banner: string;
        mobileBanner: string;
        description: string;
    };
    subCategories?: Array<{
        name: string;
        banner: string;
        mobileBanner: string;
        description: string;
    }>;
}> = [
        {
            category: {
                name: "cotton-bags",
                banner: "images/banners/onference-bags.png",
                mobileBanner: "images/banners/conference-bags-phone.png",
                description: 'Premium quality, eco-friendly cotton bags designed for durability and style. Ideal for everyday use, shopping, and conferences, these reusable bags offer a sustainable alternative to plastic.',
            },
            subCategories: [
                {
                    name: "cotton-shopping-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                    description: 'Premium quality, eco-friendly cotton shopping bags designed for durability and convenience. Perfect for daily shopping, errands, and sustainable living, offering a stylish and reusable alternative to plastic bags.',
                },
                {
                    name: "cotton-laundry-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                    description: 'Durable and eco-friendly cotton laundry bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
                {
                    name: "cotton-tote-bags",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',
                },
                {
                    name: "calico-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                    description: 'Lightweight and eco-friendly calico bags, perfect for shopping, gifting, and daily use. Made from durable, reusable fabric, these bags offer a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cloth-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-rice-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-beach-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-drawstring-pouches",
                    banner: "images/banners/women-Trendy-Bags-Drawstring-pouches.png",
                    mobileBanner: "images/banners/women-Trendy-Bags-Drawstring-pouches-phone.jpg",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-bottle-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-grocery-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-pencil-cases",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-laptop-sleeves",
                    banner: "images/banners/Latop-bag.png",
                    mobileBanner: "images/banners/laptop-bag-phone.png",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "cotton-ipad-sleeves",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                    description: 'Durable and eco-friendly cloth bags, perfect for shopping, storage, and everyday use. Made from high-quality fabric, these reusable bags provide a sustainable and stylish alternative to plastic.',
                },
            ],
        },
        {
            category: {
                name: "jute-bags",
                banner: "images/banners/jute-bags.png",
                mobileBanner: "images/banners/jute-bags-phone.png",
                description: 'Stylish and eco-friendly jute bags, perfect for shopping, gifting, and daily use. Made from durable, biodegradable material, these reusable bags offer a sustainable and elegant alternative to plastic.',
            },
            subCategories: [
                {
                    name: "jute-lunch-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                    description: 'Durable and eco-friendly cotton laundry bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
                {
                    name: "jute-pouches",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                    description: 'Durable and eco-friendly cotton laundry bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
                {
                    name: "jute-promotional-bags",
                    banner: "images/banners/Juco-promotional-bags.png",
                    mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
                    description: 'Eco-friendly and durable jute promotional bags, perfect for branding, events, and everyday use. Made from high-quality biodegradable material, these reusable bags offer a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "jute-wine-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                    description: 'Eco-friendly and durable jute promotional bags, perfect for branding, events, and everyday use. Made from high-quality biodegradable material, these reusable bags offer a sustainable and stylish alternative to plastic.',
                },
                {
                    name: "jute-shopping-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                    description: 'Premium quality, eco-friendly cotton shopping bags designed for durability and convenience. Perfect for daily shopping, errands, and sustainable living, offering a stylish and reusable alternative to plastic bags.',
                },
                {
                    name: "jute-tote-bags",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',                    
                },
                {
                    name: "jute-tray",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',
                },
                {
                    name: "jute-corporate-bags",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',
                },
                {
                    name: "jute-designer-bags",
                    banner: "images/banners/Juco-promotional-bags.png",
                    mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',
                },
                {
                    name: "jute-cosmetic-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',
                },
                {
                    name: "jute-laptop-bags",
                    banner: "images/banners/Latop-bag.png",
                    mobileBanner: "images/banners/laptop-bag-phone.png",
                    description: 'Stylish and eco-friendly jute laptop bags, designed for durability and functionality. Perfect for work, travel, and daily use, these sustainable bags offer a sturdy and biodegradable alternative to synthetic options.',
                },
                {
                    name: "jute-ipad-sleeves",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                    description: 'Stylish and eco-friendly cotton tote bags, perfect for everyday use, shopping, and travel. Designed for durability and sustainability, these reusable bags offer a chic and practical alternative to plastic.',  
                },
                {
                    name: "jute-laundry-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                    description: 'Durable and eco-friendly cotton laundry bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
                {
                    name: "jute-gift-bags",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                    description: 'Durable and eco-friendly cotton gift bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
                {
                    name: "ladies-jute-handbags",
                    banner: "images/banners/Canvas-bag.png",
                    mobileBanner: "images/banners/Canvas-bag-phone-size.png",
                    description: 'Durable and eco-friendly cotton jute handbags bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
                },
            ],
        },
        {
            category: {
                name: "juco-bags",
                banner: "images/banners/Juco-promotional-bags.png",
                mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
                description: 'Durable and eco-friendly juco bags, perfect for organizing and carrying clothes. Ideal for home, travel, and dorm use, offering a sustainable and reusable alternative to plastic bags.',
            },
        },
        {
            category: {
                name: "canvas-bags",
                banner: "images/banners/Canvas-bag.png",
                mobileBanner: "images/banners/Canvas-bag-phone-size.png",
                description: 'Durable and eco-friendly canvas bags, perfect for shopping, travel, and daily use. Made from high-quality fabric, these reusable bags offer a stylish and sustainable alternative to plastic.',
            },
        },
    ];

export default filterCategory;
