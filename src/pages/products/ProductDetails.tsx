import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDetailCard from "../../components/cards/ProductDetailCard";
import allProducts from "../../configs/products";

const ProductDetails = () => {
    const [query] = useSearchParams();

    const category = useMemo(() => (query.get('category')), [query]);
    const subCategory = useMemo(() => (query.get('subcategory')), [query]);
    // const productCode = useMemo(() => (query.get('product')), [query]);
    console.log(category, subCategory);

    const details = useMemo(() => {
        // let category = query.get('category');
        // let subCategory = query.get('subcategory');
        let productCode = query.get('product');

        return allProducts.filter((item) => item._id === productCode)[0];
    }, [query]);
    console.log(details);

    const Heading = ({
        children,
    }: {
        children: React.ReactNode,
    }) => {
        return <h2 className="font-medium text-[18px] text-gray-800">{children}</h2>
    }

    return <>
        <main className="p-4">
            <Heading><span className="text-black">{category}</span> {subCategory ? ` > ${subCategory}` : ''}</Heading>
            <ProductDetailCard
                {...(details ? details: {})}
            // image={details.image}
            />
        </main>
    </>
}

export default ProductDetails;