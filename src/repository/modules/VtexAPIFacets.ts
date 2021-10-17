import { AxiosInstance } from "axios";
import { IVtexApiFacets } from "../types/Repository";
import IFacets from '@model/types/vtex/facets/Index';

export default class VtexAPIFacets implements IVtexApiFacets {
    axios:AxiosInstance
  
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    
    async get(complement: string): Promise<IFacets> {
        const url = `/api/catalog_system/pub/facets/search${complement}`;
        const { data } = await this.axios.get<IFacets>(url);
        return data;
    }
}