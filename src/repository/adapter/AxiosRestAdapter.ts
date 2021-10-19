import { rejects } from 'assert';
import { AxiosInstance as IAxiosInstance } from 'axios';
import { resolve } from 'path/posix';
import IRestAdapter from '../types/IRestAdapter';
import IRestAdapterResponse from '../types/IRestAdapterResponse';

class AxiosRestAdapter implements IRestAdapter {
    private axios: IAxiosInstance
    
    constructor(axiosInstance: IAxiosInstance) {
        this.axios = axiosInstance;
    }

    private mountResponse<TypeResponse>(response: TypeResponse, status: number, error: boolean, message: any) {
        return { response, status, error, message };
    }

    async get<TypeResponse>(url: string, body?: any): Promise<IRestAdapterResponse<TypeResponse>> {
        const response = new Promise<IRestAdapterResponse<TypeResponse>>(async (resolve, reject) => {
            await this.axios.get<TypeResponse>(url, body)
                .then(result => {
                    const responseMounted = this.mountResponse<TypeResponse>(result.data, 200, false, null);
                    resolve(responseMounted);
                })
                .catch(error => {
                    if (error.response) {
                        const { data, status } = error.response;
                        const responseMounted = this.mountResponse<null>(null, status, true, data);
                        reject(responseMounted);
                    } else if (error.request) {
                        const responseMounted = this.mountResponse<null>(null, 400, true, error.request);
                        reject(responseMounted);
                    } else {
                        const responseMounted = this.mountResponse<null>(null, 400, true, error.message);
                        reject(responseMounted);
                    }
                });
        });
            
        return response;
    }
    post(url: string, body?: any): any {

    }
    put(url: string, body?: any): any {

    }
    patch(url: string, body?: any): any {

    }
    delete(url: string, body?: any): any {

    }
}

export default AxiosRestAdapter;