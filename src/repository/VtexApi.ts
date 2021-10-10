/* eslint-disable @typescript-eslint/no-explicit-any */
import { IVtexApi, IVtexApiSearch, IVtexApiFacets, IVtexApiMasterData, IVtexApiOrderForm } from './types/VtexApi';
import { AxiosInstance } from 'axios';

import VtexAPISearch from './modules/VtexAPISearch';
import VtexAPIFacets from './modules/VtexAPIFacets';
import VtexAPIOrderform from './modules/VtexAPIOrderform';
import VtexAPIMasterData from './modules/VtexAPIMasterData';

export class VtexAPI implements IVtexApi {
  search:IVtexApiSearch
  facets:IVtexApiFacets
  orderform:IVtexApiOrderForm
  masterdata:IVtexApiMasterData

  constructor(axios: AxiosInstance) {
    this.search = new VtexAPISearch(axios);
    this.facets = new VtexAPIFacets(axios);
    this.orderform = new VtexAPIOrderform(axios);
    this.masterdata = new VtexAPIMasterData(axios);
  }
}
