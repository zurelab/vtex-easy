import { IOrderformRepository } from '@/repository/types/Repository';
import IOrderFormService from './types/index';
import Items from './ItemsService';

export default class OrderFormService implements IOrderFormService {
    // private repository:IOrderformRepository
    items: Items

    constructor(OrderformRepository: IOrderformRepository) {
        // this.repository = OrderformRepository;
        this.items = new Items(OrderformRepository);
    }
}
