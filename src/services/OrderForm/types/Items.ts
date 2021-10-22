import IOrderForm from '@model/types/vtex/orderform/Index';
import Item from '@model/types/vtex/orderform/Item';
import IOrderFormProduct from '@model/types/vtex/orderform/Product';
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

// const item = orderform.items.eq(0)
// const item = orderform.items.sku(123)

// item.get()
// item.update()

// item.qtda.set()
// item.qtda.plus()
// item.qtda.minus()
// item.remove()

// item.order()
// item.toFistIndex()
// item.toLastIndex()

// orderform.items.getIndexbySku()
// orderform.items.getSkuByIndex()



