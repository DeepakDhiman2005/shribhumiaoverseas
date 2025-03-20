// const myFetch = useFetch();

// import { ProductCardInterface } from "../../components/cards/ProductCard";
import { useMemo } from "react";
import ProductSidebar from "./ProductSidebar";
import ShowProducts from "./ShowProducts";
import { useSearchParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import ProductsMain from "./ProductsMain";

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

    const [search, _] = useSearchParams();
    const isMobile = useMediaQuery({ minWidth: 720 });

    const categoryName = useMemo(() => {
        return search.get('category') || null;
    }, [search]);


    const banner = useMemo<{ isDesktop: string, isMobile: string } | null>(() => {
        if (categoryName === "cotton-bags") {
            return {
                isDesktop: "/images/banners/cotton-bags.jpg",
                isMobile: '/images/banners/cotton-bags.jpg',
            }
        } else if (categoryName === "juco-bags") {
            return {
                isDesktop: '/images/banners/juco-bags-banner.jpg',
                isMobile: '/images/banners/juco-bags-banner.jpg',
            }
        } else if (categoryName === "jute-bags") {
            return {
                isDesktop: '/images/banners/jute-bags-banner.jpg',
                isMobile: "/images/banners/jute-bags-banner.jpg"
            }
        } else if (categoryName === "canvas-bags") {
            return {
                isDesktop: '/images/banners/canvas-page-banner.png',
                isMobile: '/images/banners/Canvas-bag-phone-size.png',
            }
        } else {
            return null;
        }
    }, [categoryName]);

    return <>
        <img
            src={!isMobile ? banner?.isMobile : banner?.isDesktop}
            className="w-full"
        />

        <div className="w-full flex justify-start items-start gap-x-8 px-5 sm:px-5 md:px-7 py-4">
            <ProductSidebar />
            {/* <ProductsMain /> */}
            <ShowProducts />
        </div>
    </>
}

export default Products;