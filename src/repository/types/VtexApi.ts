/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';
import ISearch from '@/models/types/vtex/search/Index';
import IFacets from '@/models/types/vtex/facets/Index';
import IOrderForm from '@/models/types/vtex/orderform/Index';
import IOrderFormProductList from '@/models/types/vtex/orderform/OrderFormProductList';
import IMDPostResponse from '@/models/types/vtex/masterdata/PostResponse';

export interface IVtexApiSearch {
  axios: AxiosInstance
  get: (complement: string) => Promise<ISearch[]>
}
export interface IVtexApiFacets {
  axios: AxiosInstance
  get: (complement: string) => Promise<IFacets>
}
export interface IVtexApiOrderForm {
  axios: AxiosInstance
  get: () => Promise<IOrderForm>
  add: (orderformId: string, items: IOrderFormProductList, SalesChannel: number) =>
    Promise<IOrderForm>
  update: (orderformId: string, items: IOrderFormProductList) => Promise<IOrderForm>
}
export interface IVtexApiMasterData {
  axios: AxiosInstance
  get: (entity: string, documentId:string, fields: Array<string>) => any
  post: (entity: string, body: any) => Promise<IMDPostResponse>
  update: (entity: string, documentId:string, body: any) => void
  // TODO delete: (entity: string) => void
}

export interface IVtexApi {
  search: IVtexApiSearch
  facets: IVtexApiFacets,
  orderform: IVtexApiOrderForm
  masterdata: IVtexApiMasterData
}
