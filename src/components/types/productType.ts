type ProductType = {
    id: string,
    name: string,
    price: [priceInterface],
    img_src: string,
    category: string,
    site: number,
    like?: boolean  
}
  
type priceInterface = {
    price: number,
    data: Date
}

export default ProductType