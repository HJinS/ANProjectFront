type LikeProductType = {
    
    price: priceType[],
    products: products,  
}

type priceType = {
    price: number,
    date: Date,
}

type products = {
    product_id: string,
    name: string,
    category: string,
    site: number,
    img_src: string,
    updated_dt: Date
}
export default LikeProductType