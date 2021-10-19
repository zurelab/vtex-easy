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


/*

orderform.get()
orderform.listen(); // orderFormUpdated.vtex && orderFormListen.vtexeasy
orderform.fetch()

orderform.logout()

orderform.order.get()

orderform.coupon.set('COUPON');
orderform.coupon.clear();

orderform.client({ verbose: true })

orderform.total.all
orderform.total.items
orderform.total.shipping

orderform.shipping.calculate()
orderform.shipping.simulate()
orderform.shipping.getAddressByPostalCode('22250-040', 'BRA')

orderform.items.all({ verbose: true })
orderform.items.getIndexbySku()
orderform.items.getSkuByIndex()
orderform.items.firstItem({ verbose: true })
orderform.items.lastItem({ verbose: true })
orderform.items.populate()
orderform.items.reorder()
orderform.items.clear()

const item = orderform.items.eq(0)
const item = orderform.items.sku(123)

item.get({ verbose: true })
item.update()
item.qtda.set()
item.qtda.plus()
item.qtda.minus()
item.remove()

item.ordination.set()
item.ordination.get()
item.ordination.toFist()
item.ordination.toLast()

item.attachment.add()
item.attachment.remove()

*/