import { AxiosInstance as IAxiosInstance } from 'axios';
import IRestAdapter from '../types/IApiAdapter';
import IApiAdapterResponse from '../types/IApiAdapterResponse';

type IHeaderArray = [string, string];
class AxiosRestAdapter implements IRestAdapter {
    private axios: IAxiosInstance
    
    constructor(axiosInstance: IAxiosInstance) {
        this.axios = axiosInstance;
    }

    private setHeaders(headers: Array<IHeaderArray>) {
        this.axios.interceptors.request.use(
            (config) => {
                const DEFAULT_HEADERS:IHeaderArray[] = [
                    ['Content-Type', 'application/json'],
                    ['Accept', 'application/json'],
                ];
                
                DEFAULT_HEADERS.concat(headers);

                DEFAULT_HEADERS.forEach(header => {
                    if (!config.headers) config.headers = {};
                    const [KEY, VALUE] = header;
                    config.headers[KEY] = VALUE;
                });
                return config;
            },
            (error) => {
                return Promise.reject(error);
            },
        );
    }

    private mountResponse<TypeResponse>(response: TypeResponse, status: number, error: boolean, message: any) {
        return { response, status, error, message };
    }

    async get<TypeResponse>(url: string, body?: any, headers: Array<IHeaderArray> = []): Promise<IApiAdapterResponse<TypeResponse>> {
        const response = new Promise<IApiAdapterResponse<TypeResponse>>(async (resolve, reject) => {
            
            // Headers are being set by "interceptors" because of a problem creating typing rules ...
            // in the "header" field in the Axios library.
            this.setHeaders(headers);

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