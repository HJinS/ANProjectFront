import ProductType from "./productType"
import LikeProductType from "./likeProductType"

export type ProductListType = {
    results: ProductType[]
}

export type LikeListType = {
    results: LikeProductType[]
}

export type ProductListComponentType = {
    productResults? : ProductType[]
    likeResults? : LikeProductType[]
    isLike: boolean
}