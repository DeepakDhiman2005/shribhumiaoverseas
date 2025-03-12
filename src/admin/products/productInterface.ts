export interface AddProductInterface {
    name: string | null,
    category: string | null,
    subCategory?: string | null,
    image: File | string | null,
    width: number | null,
    height: number | null,
    gusset: number | null,
}