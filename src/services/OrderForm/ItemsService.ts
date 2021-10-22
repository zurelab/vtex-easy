import { IOrderformRepository } from '@/repository/types/Repository';
import IItem from '@model/types/vtex/orderform/Item';
import IItemService from './types/Items';
import IOrderFormProduct from '@model/types/vtex/orderform/Product';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';

type IItems = Array<IItem>

export default class Items implements IItemService {
    private repository:IOrderformRepository

    constructor(OrderformRepository: IOrderformRepository) {
        this.repository = OrderformRepository;
    }

    async get(): Promise<IItems> {
        const orderform = await this.repository.get();
        return orderform.items;
    }
    async all(): Promise<IItems> {
        const orderform = await this.repository.get();
        return orderform.items;
    }
    async eq(index: number): Promise<IItem | null> {
        const orderform = await this.repository.get();

        if (!orderform.items.length || orderform.items.length < (index + 1)) {
            return null;
        }

        return orderform.items[index];
    }
    async sku(skuId:number|string): Promise<IItem | null> {
        const orderform = await this.repository.get();

        if (!orderform.items.length) return null;

        const selectedItem = orderform.items.find((item: { id: any; }) => Number(item.id) === Number(skuId));
        const selectedItemIndex = orderform.items.findIndex((item: { id: any; }) => Number(item.id) === Number(skuId));

        if (!selectedItem) return null;

        return {
            ...selectedItem,
            index: selectedItemIndex,
        }
    }
    async add(items: IOrderFormProduct | IOrderFormProductList): Promise<IItems | []> {
        let addItems: IOrderFormProductList;

        if (Array.isArray(items)) addItems = items
        else addItems = [items];
        
        const orderform = await this.repository.add(addItems);

        const skuList = Array.isArray(items) ? items.map((item) => item.id) : [items.id];
        // const notAdded = skuList.filter((item) => !orderform.items.some((orderformItem) => Number(orderformItem.id) === Number(item))) 

        // if (notAdded.length) {
        //     console.warn(`[WARN] There was a problem adding an item to the cart. SKUS => ${notAdded.join()}`);
        // }

        return orderform.items;
    }
}