import IOrderForm from '@/models/types/vtex/orderform/Index';
import Item from '@/models/types/vtex/orderform/Item';

type Items = Array<Item>

export default interface IOrderFormItemsService {
    get: () => Promise<Items | []>
    all: () => Promise<Items | []>
    eq: (index:number) => Promise<Item | null>
    // find: () => Promise<Item | null>
    // findAll: () => Promise<Item | []>
    // add: () => Promise<Items | []>
    // clear: () => Promise<Items | []>
    // remove: () => Promise<Items | []>
    // reorder: () => Promise<Items | []>
    // populate: () => Promise<Items | []>
}