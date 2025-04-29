export interface Product{
   // [x: string]: any;
    product_id: number,
    name: string,
    description: string,
    summary: string,
    cover: string,
    sku: string,
    category: string,
    price: number,
    orderedqty: number,
    instock: number,
    created_at: string,
    deleted_at: string
}