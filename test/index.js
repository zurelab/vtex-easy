const axios = require('axios');
const AxiosRestAdapter = require('../dist/repository/adapter/AxiosRestAdapter.js').default;
const OrderFormRepository = require('../dist/repository/OrderFormRepository.js').default;


const baseURL = 'https://www.ascona.com.br';
const axiosInstance = axios.create({ baseURL });

(async () => {

    const adapter = new AxiosRestAdapter(axiosInstance);
    const orderformRepository = new OrderFormRepository(adapter);

    // const result = await orderformRepository.get('66aadb6ef1374e22b38cb589f1fd05c8');
    const result = await orderformRepository.get('66aadb6ef1374e22b38cb589f1fd05c8');

    console.log(result);

})()
