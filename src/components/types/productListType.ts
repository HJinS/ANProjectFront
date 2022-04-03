import ProductType from "./productType"
import LikeProductType from "./likeProductType"

export type ProductListComponentType = {
    productResults? : ProductType[]
    likeResults? : LikeProductType[]
    isLike: boolean
}