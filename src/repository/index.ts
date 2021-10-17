/* eslint-disable @typescript-eslint/no-explicit-any */
import { IRepository, IVtexApiSearch, IVtexApiFacets, IVtexApiMasterData, IVtexApiOrderForm } from './types/VtexApi';
import { AxiosInstance } from 'axios';

import VtexAPISearch from './modules/VtexAPISearch';
import VtexAPIFacets from './modules/VtexAPIFacets';
import VtexAPIOrderform from './modules/VtexAPIOrderform';
import VtexAPIMasterData from './modules/VtexAPIMasterData';
class Repository implements IRepository {
  search:IVtexApiSearch
  facets:IVtexApiFacets
  orderform:IVtexApiOrderForm
  masterdata:IVtexApiMasterData

  constructor(axios: AxiosInstance, orderFormId:string, salesChannel: number = 1) {
    this.search = new VtexAPISearch(axios);
    this.facets = new VtexAPIFacets(axios);
    this.orderform = new VtexAPIOrderform(axios, orderFormId, salesChannel);
    this.masterdata = new VtexAPIMasterData(axios);
  }
}

export default Repository;