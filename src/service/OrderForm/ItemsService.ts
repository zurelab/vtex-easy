import { IOrderformRepository } from '@/repository/types/Repository';
import IOrderForm from '@/models/types/vtex/orderform/Index';
import IItem from '@/models/types/vtex/orderform/Item';
import IItemService from './types/Items';

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
}