import { AxiosInstance } from "axios";
import { IVtexApiSearch } from "../types/VtexApi";
import ISearch from '@model/types/vtex/search/Index';

export default class VtexAPISearch implements IVtexApiSearch {
    axios:AxiosInstance
  
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
    
    async get(complement: string): Promise<ISearch[]> {
        const url = `/api/catalog_system/pub/products/search${complement}`;
        const { data } = await this.axios.get<ISearch[]>(url);
        return data;
    }
}