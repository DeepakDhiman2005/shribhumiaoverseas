import { ProductCardInterface } from "../components/cards/ProductCard";

let dimensions: { height: number, width: number, gusset: number } = {
    height: 4,
    width: 6,
    gusset: 3,
}

const cottonProducts: Array<ProductCardInterface> = [
    {
        image: '/product-images/IMG-20250224-WA0007.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0008.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0009.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0010.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0011.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0012.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0012.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0013.jpg',
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
        image: '/product-images/IMG-20250224-WA0016.jpg',
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
        image: '/product-images/IMG-20250224-WA0019.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0020.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0021.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0022.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0023.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0024.jpg',
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
        image: '/product-images/IMG-20250224-WA0031.jpg',
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
        image: '/product-images/IMG-20250224-WA0036.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0037.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0038.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0042.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0043.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0044.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0048.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0049.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0050.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0052.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0053.jpg',
        ...dimensions,
    },
    {
        image: '/product-images/IMG-20250224-WA0055.jpg',
        ...dimensions,
    },
].map((item, index) => ({ ...item, name: `Product ${index + 1}`}));

export default cottonProducts;