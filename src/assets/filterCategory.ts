const filterCategory: Array<{
    category?: {
        name: string;
        banner: string;
        mobileBanner: string;
    };
    subCategories?: Array<{
        name: string;
        banner: string;
        mobileBanner: string;
    }>;
}> = [
        {
            category: {
                name: "cotton-bags",
                banner: "images/banners/onference-bags.png",
                mobileBanner: "images/banners/conference-bags-phone.png",
            },
            subCategories: [
                {
                    name: "cotton-shopping-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                },
                {
                    name: "cotton-laundry-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                },
                {
                    name: "cotton-tote-bags",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                },
                {
                    name: "calico-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                },
                {
                    name: "cloth-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                },
                {
                    name: "cotton-rice-bags",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                },
                {
                    name: "cotton-beach-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                },
                {
                    name: "cotton-drawstring-pouches",
                    banner: "images/banners/women-Trendy-Bags-Drawstring-pouches.png",
                    mobileBanner: "images/banners/women-Trendy-Bags-Drawstring-pouches-phone.jpg",
                },
                {
                    name: "cotton-bottle-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                },
                {
                    name: "cotton-grocery-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                },
                {
                    name: "cotton-pencil-cases",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                },
                {
                    name: "cotton-laptop-sleeves",
                    banner: "images/banners/Latop-bag.png",
                    mobileBanner: "images/banners/laptop-bag-phone.png",
                },
                {
                    name: "cotton-ipad-sleeves",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                },
            ],
        },
        {
            category: {
                name: "jute-bags",
                banner: "images/banners/jute-bags.png",
                mobileBanner: "images/banners/jute-bags-phone.png",
            },
            subCategories: [
                {
                    name: "jute-lunch-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                },
                {
                    name: "jute-pouches",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                },
                {
                    name: "jute-promotional-bags",
                    banner: "images/banners/Juco-promotional-bags.png",
                    mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
                },
                {
                    name: "jute-wine-bags",
                    banner: "images/banners/wine-bottle-bags.png",
                    mobileBanner: "images/banners/wine-bottle-bags-phone-size.jpg",
                },
                {
                    name: "jute-shopping-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                },
                {
                    name: "jute-tote-bags",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                },
                {
                    name: "jute-tray",
                    banner: "images/banners/Tote-bag.jpg",
                    mobileBanner: "images/banners/tote-bag-phone-size.jpg",
                },
                {
                    name: "jute-corporate-bags",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                },
                {
                    name: "jute-designer-bags",
                    banner: "images/banners/Juco-promotional-bags.png",
                    mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
                },
                {
                    name: "jute-cosmetic-bags",
                    banner: "images/banners/shopping-bag.jpg",
                    mobileBanner: "images/banners/phone-size-shopping-bag.jpg",
                },
                {
                    name: "jute-laptop-bags",
                    banner: "images/banners/Latop-bag.png",
                    mobileBanner: "images/banners/laptop-bag-phone.png",
                },
                {
                    name: "jute-ipad-sleeves",
                    banner: "images/banners/lpad-sleeve-bag.png",
                    mobileBanner: "images/banners/lpad-bag-phone.png",
                },
                {
                    name: "jute-laundry-bags",
                    banner: "images/banners/Lunch-bags-beach-bag.png",
                    mobileBanner: "images/banners/lunch-bags-phhone.png",
                },
                {
                    name: "jute-gift-bags",
                    banner: "images/banners/onference-bags.png",
                    mobileBanner: "images/banners/conference-bags-phone.png",
                },
                {
                    name: "ladies-jute-handbags",
                    banner: "images/banners/Canvas-bag.png",
                    mobileBanner: "images/banners/Canvas-bag-phone-size.png",
                },
            ],
        },
        {
            category: {
                name: "juco-bags",
                banner: "images/banners/Juco-promotional-bags.png",
                mobileBanner: "images/banners/Juco-promotional-bags-PHONE.jpg",
            },
        },
        {
            category: {
                name: "canvas-bags",
                banner: "images/banners/Canvas-bag.png",
                mobileBanner: "images/banners/Canvas-bag-phone-size.png",
            },
        },
    ];

export default filterCategory;
