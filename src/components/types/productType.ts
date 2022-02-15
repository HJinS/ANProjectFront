type ProductType = {
    id: string,
    name: string,
    price: [priceType],
    img_src: string,
    category: string,
    site: number,
    like?: boolean  
}
  
type priceType = {
    price: number,
    data: Date
}

export default ProductType