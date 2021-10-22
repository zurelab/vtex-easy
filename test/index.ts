import AxiosRestAdapter from '../dist/repository/adapter/AxiosRestAdapter';
import OrderFormRepository from '../dist/repository/OrderFormRepository';
import axios from 'axios';


const baseURL = 'https://www.ascona.com.br';
const axiosInstance = axios.create({ baseURL });

(async () => {

    const adapter = new AxiosRestAdapter(axiosInstance);
    const orderformRepository = new OrderFormRepository(adapter);

    interface IFoo {
        foo: String
    }

    const result = await orderformRepository.get('66aadb6ef1374e22b38cb589f1fd05c8');
    
})()
