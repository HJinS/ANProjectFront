interface ProductInterface{
    id: string,
    name: string,
    price: [priceInterface],
    img_src: string,
    category: string,
    site: number,
    like?: boolean  
}
  
interface priceInterface{
    price: number,
    data: Date
}

export default ProductInterface