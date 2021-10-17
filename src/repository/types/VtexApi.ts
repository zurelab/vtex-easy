/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';
import ISearch from '@/models/types/vtex/search/Index';
import IFacets from '@/models/types/vtex/facets/Index';
import IOrderForm from '@/models/types/vtex/orderform/Index';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';
import IMDPostResponse from '@/models/types/vtex/masterdata/PostResponse';

export interface IVtexApiSearch {
  get: (complement: string) => Promise<ISearch[]>
}
export interface IVtexApiFacets {
  get: (complement: string) => Promise<IFacets>
}
export interface IVtexApiOrderForm {
  orderFormId:string
  salesChannel:number

  get: () => Promise<IOrderForm>
  add: (items: IOrderFormProductList, SalesChannel: number) =>
    Promise<IOrderForm>
  update: (items: IOrderFormProductList) => Promise<IOrderForm>
  clear: () => Promise<IOrderForm>
}
export interface IVtexApiMasterData {
  get: (entity: string, documentId:string, fields: Array<string>) => any
  post: (entity: string, body: any) => Promise<IMDPostResponse>
  update: (entity: string, documentId:string, body: any) => void
  // TODO delete: (entity: string) => void
}

export interface IRepository {
  search: IVtexApiSearch
  facets: IVtexApiFacets,
  orderform: IVtexApiOrderForm
  masterdata: IVtexApiMasterData
}
