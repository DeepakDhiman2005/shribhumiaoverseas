import { ProductCardInterface } from "../components/cards/ProductCard";

let dimensions: { height: number, width: number, gusset: number } = {
    height: 4,
    width: 6,
    gusset: 3,
}

const juteProducts: Array<ProductCardInterface> = [
    {
        image: '/product-images/jute-bags/1.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/jute-bags/2.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/jute-bags/3.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0003.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0004.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0005.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0006.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0014.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0015.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0017.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0018.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0023.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0025.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0026.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0027.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0028.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0029.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0030.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0031.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0032.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0033.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0034.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0035.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0039.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0040.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0041.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0045.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0046.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0047.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0056.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0057.jpg',
        ...dimensions,
    },
].map((item, index) => ({ ...item, name: `Product ${index + 1}`}));

export default juteProducts;