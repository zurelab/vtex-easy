import IOrderForm from '@/models/types/vtex/orderform/Index';
import Item from '@/models/types/vtex/orderform/Item';
import IOrderFormProduct from '@/models/types/vtex/orderform/OrderFormProduct';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';

type Items = Array<Item>

export default interface IOrderFormItemsService {
    get: () => Promise<Items | []>
    all: () => Promise<Items | []>
    eq: (index:number) => Promise<Item | null>
    sku: (skuId:number|string) => Promise<Item | null>
    add: (items: IOrderFormProduct | IOrderFormProductList) => Promise<Items | []>
    // clear: () => Promise<Items | []>
    // remove: () => Promise<Items | []>
    // reorder: () => Promise<Items | []>
    // populate: () => Promise<Items | []>
}

// orderform.items.eq(0).get()
// orderform.items.eq(0).update()
// orderform.items.eq(0).qtda.set()
// orderform.items.eq(0).qtda.plus()
// orderform.items.eq(0).qtda.minus()
// orderform.items.eq(0).remove()
// orderform.items.eq(0).order()

