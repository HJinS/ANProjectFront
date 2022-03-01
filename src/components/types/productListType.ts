import ProductType from "./productType"

export type ProductListType  = {
    results: ProductType[]
}

export type ProductListComponentType = {
    results: ProductType[]
    isLoading: boolean
}