// const myFetch = useFetch();

// import { ProductCardInterface } from "../../components/cards/ProductCard";
import ProductSidebar from "./ProductSidebar"; 
import ProductsMain from "./ProductsMain";

const Products = () => {
    // const response = await fetch(`http://localhost:3000/api/products?category=${params.category}`);
    // const data = await response.json();
    // const data = await myFetch.get(`/products?category=${params?.category || ''}`);
    // console.log(data);

    // const products: Array<ProductCardInterface> = Array(8).fill(0).map((_,index) => ({
    //     image: `IMG-20250224-WA000${index+1}.jpg`,
    //     id: `${index+1}`,
    //     height: '14 inches',
    //     width: '15 inches',
    //     gusset: '17 inches',
    //     title: 'Color Full Bags',
    // }))

    return <>
        <div className="w-full flex justify-start items-start gap-x-8 px-5 sm:px-5 md:px-7 py-4">
            <ProductSidebar />
            <ProductsMain />
        </div>
    </>
}

export default Products;