import { ProductCardInterface } from "../components/cards/ProductCard";

let dimensions: { height: number, width: number, gusset: number } = {
    height: 4,
    width: 6,
    gusset: 3,
}

const canvasProducts: Array<ProductCardInterface> = [
    {
        image: '/product-images/canvas-bags/1.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/2.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/3.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/4.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/5.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/6.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/7.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/8.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/9.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/canvas-bags/10.jpg',
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
        image: '/product-images/IMG-20250224-WA0048.jpg',
        ...dimensions,
    },
].map((item, index) => ({ ...item, name: `Product ${index + 1}`}));

export default canvasProducts;