import { ICategory } from "./category";


interface IProduct {
    _id: string
    name: string;
    shortname: string;
    brand: string;
    color: string;
    price: number;
    discount: number;
    stock: number;
    cover: string;
    categoryId: ICategory;
    isProductBoxForProductsList?: boolean
    isProductBoxForRelatedProduct?: boolean
    description?:string
}


export type {
    IProduct
}