import AxiosApiAdapter from '../dist/repository/adapter/AxiosApiAdapter';
import OrderFormRepository from '../dist/repository/OrderFormRepository';
import axios from 'axios';


const baseURL = 'https://www.ascona.com.br';
const axiosInstance = axios.create({ baseURL });

(async () => {

    const adapter = new AxiosApiAdapter(axiosInstance);

    const orderformRepository = new OrderFormRepository(adapter, '66aadb6ef1374e22b38cb589f1fd05c8');

    const result = await orderformRepository.get();

    
    
    
    
})()


// TODO | Modificar o prototype do array para o push em orderform.items vir com a possibilidade de realmente
// TODO | adicionar um item ao orderform
