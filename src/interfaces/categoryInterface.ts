export interface CategoryInterface{
    name: string,
    image: File | string | null,
    description?: string,
    _id?: string,
}

export interface SubCategoryInterface{
    name: string,
    image: File | string | null,
    description?: string,
    category: CategoryInterface | string,
    _id?: string,
}