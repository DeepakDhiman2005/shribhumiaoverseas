export interface categoriesInterface {
    category: string,
    subCategories?: Array<string>,
}

const categories: Array<categoriesInterface> = [
    {
        category: 'Cotton Bags',
        subCategories: [
            "Cotton Shopping Bags",
            "Cotton Laundry Bags",
            "Cotton Tote Bags",
            "Calico Bags",
            "Cloth Bags",
            "Cotton Rice Bags",
            "Cotton Beach Bags",
            "Cotton Drawstring Pouches",
            // "Women Trendy Bags Drawstring Pouches",
            "Cotton Bottle Bags",
            "Cotton Grocery Bags",
            "Cotton Pencil Cases",
            "Cotton Laptop Sleeves",
            "Cotton Ipad Sleeves",
        ]
    },
    {
        category: 'Jute Bags',
        subCategories: [
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
            "Jute Ipad Sleeves",
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
        ]
    },
    {
        category: "Juco Bags",
        subCategories: [
            "Juco Promotional Bag"
        ]
    },
    {
        category: "Canvas Bags",
    },
    {
        category: "Handicrafts",
        subCategories: [
            "Cotton Webbing",
            "Jute Rugs",
            "Jute Slipper",
            "Jute Twine",
            "Jute Webbing",
            "Terracotta",
            "Dokra",
            "Wooden Handicrafts",
        ]
    }
]

export default categories;