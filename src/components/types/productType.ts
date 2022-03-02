type ProductType = {
    id: string,
    name: string,
    price: priceType[],
    img_src: string,
    category: string,
    site: number,
    like?: boolean,
    updated_dt: Date,
}
  
type priceType = {
    price: number,
    date: Date
}

export default ProductType