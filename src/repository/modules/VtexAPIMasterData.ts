import { AxiosInstance } from 'axios';
import defaultHeader from '../defaultHeader';
import { IVtexApiMasterData } from '../types/VtexApi';
import IMDPostResponse from '@model/types/vtex/masterdata/PostResponse';

export default class VtexAPIMasterData implements IVtexApiMasterData {
    axios:AxiosInstance
  
    constructor(axios: AxiosInstance) {
        this.axios = axios;
    }
  
    async get(entity: string, documentId:string, fields: Array<string>) {
        const url = `/api/dataentities/${entity}/documents/${documentId}?_fields=${fields.join()}`;
        const { data }: { data: Promise<IMDPostResponse> } = await this.axios({
            method: 'get',
            url,
            headers: defaultHeader,
        });
    
        return data;
    }
    async post(entity: string, body: any): Promise<IMDPostResponse> {
        const url = `/api/dataentities/${entity}/documents`;
        const { data }: { data: Promise<IMDPostResponse> } = await this.axios({
            method: 'post',
            url,
            headers: defaultHeader,
            data: body,
        });
    
        return data;
    }
    async update(entity: string, documentId:string, body: any) {
        const url = `/api/dataentities/${entity}/documents/${documentId}`;
        await this.axios({
            method: 'patch',
            url,
            headers: defaultHeader,
            data: body,
        });
    }
}