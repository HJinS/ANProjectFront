export type ButtonType = {
    category: string
    addFilterItem(filterItem: string): void
    deleteFilterItem(filteritem: string): void
}