export type GraphPriceType = {
    x: Date,
    y: number
}
export type GraphDataType = {
    id: string,
    color: string,
    data: GraphPriceType[]
}