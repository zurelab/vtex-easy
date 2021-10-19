import AxiosRestAdapter from '../src/repository/adapter/AxiosRestAdapter';
import axios from 'axios';


const baseURL = 'https://www.ascona.com.br';
const axiosInstance = axios.create({ baseURL });

(async () => {

    const adapter = new AxiosRestAdapter(axiosInstance);

    interface IFoo {
        foo: String
    }

    // TODO adapter.get deve retornar uma promise mapeada o then e catch

    const result = await adapter.get<IFoo>('/api/checkout/pub/orderForm/66aadb6ef1374e22b38cb589f1fd05c8');
    
})()
