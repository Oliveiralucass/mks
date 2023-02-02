export interface IProduct {
    id: number,
    name: string,
    description: string,
    photo: string,
    price: string,
    quantity: number
}

export interface IProducts {
    count: number,
    products: IProduct[]
}