import { ProductCardInterface } from "../components/cards/ProductCard";

const getAllProducts = (num: number): ProductCardInterface[] => {
    return Array(num).fill(0).map((_, index) => {
        let item = index + 1;
        if (item < 10) {
            return {
                name: `Product ${index + 1}`,
                width: Math.floor(Math.random() * (50 - 10 + 1)) + 10,  // Random width between 10-50
                height: Math.floor(Math.random() * (100 - 30 + 1)) + 30, // Random height between 30-100
                gusset: Math.floor(Math.random() * (20 - 5 + 1)) + 5,  // Random gusset between 5-20
                image: `/product-images/IMG-20250224-WA000${item}.jpg`,
                _id: item
            }
        }
        return {
            name: `Product ${index + 1}`,
            width: Math.floor(Math.random() * (50 - 10 + 1)) + 10,  // Random width between 10-50
            height: Math.floor(Math.random() * (100 - 30 + 1)) + 30, // Random height between 30-100
            gusset: Math.floor(Math.random() * (20 - 5 + 1)) + 5,  // Random gusset between 5-20
            image: `/product-images/IMG-20250224-WA00${item}.jpg`,
            _id: item
        }
    })
}

export default getAllProducts;