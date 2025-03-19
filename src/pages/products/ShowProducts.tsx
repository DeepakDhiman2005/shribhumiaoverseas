import { useLocation, useSearchParams } from "react-router-dom";
import ProductCard from "../../components/cards/ProductCard";
import ProductCardSkeleton from "../../components/skeletons/ProductCardSkeleton";
import { Suspense, useEffect, useMemo } from "react";
import Categories, { CategoryInterface } from "../../configs/categories";
import Pagination from "../../components/paginations/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { getProductRedux, ProductsInterface } from "../../redux/features/products";
import { useMediaQuery } from "react-responsive";
import cottonProducts from "../../configs/cottonProducts";
import juteProducts from "../../configs/juteProducts";
import canvasProducts from "../../configs/canvasProducts";

const ShowProducts = () => {
    const isMobile = useMediaQuery({ minWidth: 720 });
    const [search, setSearch] = useSearchParams();
    const dispatch: AppDispatch = useDispatch();
    const products: ProductsInterface = useSelector((state: RootState) => state.products.products);

    const categoryName = useMemo(() => {
        return search.get('category') || null;
    }, [search]);

    const allProducts = useMemo(() => {
        if (categoryName === "cotton-bags") {
            return cottonProducts;
        } else if (categoryName === "jute-bags") {
            return juteProducts;
        } else if (categoryName === "juco-bags") {
            return cottonProducts.concat(juteProducts).map((item, index) => ({ ...item, name: `Products ${index + 1}` }));
        } else if (categoryName === "canvas-bags") {
            return canvasProducts;
        } else {
            return [];
        }
    }, [categoryName]);

    const banner = useMemo<{ isDesktop: string, isMobile: string } | null>(() => {
        if (categoryName === "cotton-bags") {
            return {
                isDesktop: "/images/banners/shopping-bag.jpg",
                isMobile: '/images/banners/phone-size-shopping-bag.jpg',
            }
        } else if (categoryName === "juco-bags") {
            return {
                isDesktop: '/images/banners/Juco-promotional-bags.png',
                isMobile: '/images/banners/Juco-promotional-bags-PHONE.jpg',
            }
        } else if (categoryName === "jute-bags") {
            return {
                isDesktop: '/images/banners/Tote-bag.jpg',
                isMobile: "/images/banners/phone-size-tote-bags.jpg"
            }
        } else if (categoryName === "canvas-bags") {
            return {
                isDesktop: '/images/banners/conference-bags.png',
                isMobile: '/images/banners/Canvas-bag-phone-size.png',
            }
        } else {
            return null;
        }
    }, [categoryName]);

    const description = useMemo(() => {
        if(categoryName === "cotton-bags"){
            return "Cotton bags are an eco-friendly, reusable, and biodegradable alternative to plastic bags. Made from natural cotton fibers, they are lightweight yet durable, making them perfect for everyday use. Whether for shopping, laundry, groceries, travel, or gifting, cotton bags offer a stylish and practical solution. Available in various forms like tote bags, drawstring pouches, laptop sleeves, and bottle bags, they cater to diverse needs. Their breathable fabric ensures freshness, while their reusability promotes sustainability. Choose cotton bags for a greener, more responsible lifestyle!";
        } else if(categoryName === "jute-bags"){
            return "Jute bags are a sustainable, biodegradable, and reusable alternative to plastic bags, offering both durability and elegance. Made from natural jute fibers, they are strong, breathable, and versatile, making them ideal for shopping, corporate events, gifting, and daily use. Available in various forms such as tote bags, lunch bags, promotional bags, wine bags, and cosmetic pouches, jute bags cater to diverse needs. Their rustic charm, combined with eco-conscious benefits, makes them a perfect choice for both personal and business use. Choose jute bags for a stylish, sustainable, and responsible lifestyle!";
        } else if (categoryName === "juco-bags"){
            return "Juco bags, made from a unique blend of jute and cotton, offer the perfect balance of durability, softness, and eco-friendliness. They are stronger than cotton bags and more refined than pure jute, making them ideal for shopping, corporate gifting, promotional events, and daily use. With a smoother texture and enhanced printability, juco bags are available in various styles, including tote bags, drawstring pouches, wine bags, and shopping bags. Their long-lasting nature and stylish appeal make them a premium choice for those seeking sustainability without compromising on aesthetics.";
        } else if (categoryName === "canvas-bags"){
            return "Canvas bags are known for their exceptional durability, versatility, and timeless appeal. Made from heavy-duty cotton fabric, these bags are designed to withstand daily wear and tear while offering a stylish and eco-friendly alternative to plastic bags. Available in various styles such as tote bags, messenger bags, drawstring backpacks, and shoulder bags, canvas bags are perfect for shopping, travel, work, and casual outings. Their sturdy structure allows for customization and branding, making them ideal for promotional use. With a blend of fashion and functionality, canvas bags are a must-have for those who value sustainability and style.";
        } else {
            return '';
        }
    }, [categoryName]);

    // Get the page number from URL
    const page = useMemo<number>(() => {
        let getPage = search.get("page");
        return getPage ? parseInt(getPage) : 1;
    }, [search]);

    const location = useLocation();
    const category = useMemo<CategoryInterface | null>(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get("category") as string;

        return Categories.find((item) => item.category === query) || null;
    }, [location]);

    useEffect(() => {
        if (category?.category) {
            dispatch(getProductRedux({ category: category?.category as string, page: page as number })); // Pass page to API
        }
    }, [category, page]);

    return (
        <main className="w-full md:w-[80%]">
            <h2 className="font-semibold text-[24px] pb-3">{category?.name}</h2>
            <img
                src={!isMobile ? banner?.isMobile : banner?.isDesktop}
                className="w-full"
            />

            <p className="text-start w-full my-6">
                {description}
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                <Suspense fallback={<h2>Loading...</h2>}>
                    {allProducts?.length > 0
                        ? allProducts.map((product, index) => (
                            <ProductCard key={index} {...product} />
                        ))
                        : Array(6)
                            .fill(0)
                            .map((_, index) => <ProductCardSkeleton key={index} />)}
                </Suspense>
            </div>

            {products.totalPages > 1 && (
                <div className="w-full flex justify-end items-center">
                    <Pagination
                        totalPages={products.totalPages}
                        defaultValue={page}
                        onChange={(index) => {
                            setSearch((prev) => {
                                const newParams = new URLSearchParams(prev);
                                newParams.set("page", index.toString());
                                return newParams;
                            });
                        }}
                    />
                </div>
            )}
        </main>
    );
};

export default ShowProducts;
