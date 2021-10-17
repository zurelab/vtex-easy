/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRepository, IVtexApiSearch, IVtexApiFacets, IVtexApiMasterData, IOrderformRepository } from './types/Repository';
import { AxiosInstance } from 'axios';

import VtexAPISearch from './modules/VtexAPISearch';
import VtexAPIFacets from './modules/VtexAPIFacets';
import OrderformRepository from './modules/OrderformRepository';
import VtexAPIMasterData from './modules/VtexAPIMasterData';
class Repository implements IRepository {
  search:IVtexApiSearch
  facets:IVtexApiFacets
  orderform:IOrderformRepository
  masterdata:IVtexApiMasterData

  constructor(axios: AxiosInstance, orderFormId:string, salesChannel: number = 1) {
    this.search = new VtexAPISearch(axios);
    this.facets = new VtexAPIFacets(axios);
    this.orderform = new OrderformRepository(axios, orderFormId, salesChannel);
    this.masterdata = new VtexAPIMasterData(axios);
  }
}

export default Repository;