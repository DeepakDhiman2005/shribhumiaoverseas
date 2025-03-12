import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import ProductDetailCard from "../../components/cards/ProductDetailCard";

const ProductDetails = () => {
    const [query] = useSearchParams();

    const category = useMemo(() => (query.get('category')), [query]);
    const subCategory = useMemo(() => (query.get('subcategory')), [query]);
    const productCode = useMemo(() => (query.get('product')), [query]);

    console.log(category, subCategory, productCode);

    const Heading = ({
        children,
    }: {
        children: React.ReactNode,
    }) => {
        return <h2 className="font-semibold text-[22px]">{children}</h2>
    }

    return <>
        <main className="p-4">
            <Heading>Color Full Jute Bag</Heading>
            <ProductDetailCard

            />
        </main>
    </>
}

export default ProductDetails;