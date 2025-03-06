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
import getAllProducts from "../../functions/getAllProducts";

const ProductsMain = () => {
    const isMobile = useMediaQuery({ minWidth: 720 });
    const [search, setSearch] = useSearchParams();
    const dispatch: AppDispatch = useDispatch();
    const products: ProductsInterface = useSelector((state: RootState) => state.products.products);

    const myProducts = useMemo(() => {
        return getAllProducts(57);
    }, []);

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

            {category?.banner && (
                <img
                    src={isMobile ? `/images/banners/${category?.banner}` : `/images/banners/${category?.mobileBanner}`}
                    className="w-full"
                />
            )}

            <p className="text-start w-full my-6">
                {category?.description}
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
                {/* {products?.products?.length > 0
                    ? products.products.map((product, index) => (
                          <ProductCard key={index} {...product} />
                      ))
                    : Array(6)
                          .fill(0)
                          .map((_, index) => <ProductCardSkeleton key={index} />)} */}
                <Suspense fallback={<h2>Loading...</h2>}>
                    {myProducts?.length > 0
                        ? myProducts.map((product, index) => (
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

export default ProductsMain;
