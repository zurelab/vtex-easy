/* eslint-disable @typescript-eslint/no-explicit-any */
import ISearch from '@/models/types/vtex/search/Index';
import IFacets from '@/models/types/vtex/facets/Index';
import IOrderForm from '@/models/types/vtex/orderform/Index';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';
import IMDPostResponse from '@/models/types/vtex/masterdata/PostResponse';

interface IVtexApi {
  search: {
    get: (complement: string) => Promise<ISearch[]>
  },
  facets: {
    get: (complement: string) => Promise<IFacets>
  },
  orderform: {
    get: () => Promise<IOrderForm>
    add: (orderformId: string, items: IOrderFormProductList, SalesChannel: number) =>
      Promise<IOrderForm>
    update: (orderformId: string, items: IOrderFormProductList) => Promise<IOrderForm>
  }
  masterdata: {
    get: (entity: string, documentId:string, fields: Array<string>) => any
    post: (entity: string, body: any) => Promise<IMDPostResponse>
    update: (entity: string, documentId:string, body: any) => void
    // TODO delete: (entity: string) => void
  },
}

export default IVtexApi;
