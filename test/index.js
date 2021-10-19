const axios = require('axios');
const AxiosRestAdapter = require('../dist/repository/adapter/AxiosRestAdapter.js').default;


const baseURL = 'https://www.ascona.com.br';
const axiosInstance = axios.create({ baseURL });

(async () => {

    const adapter = new AxiosRestAdapter(axiosInstance);

    const result = await adapter.get('/api/checkout/pub/orderForm/66aadb6ef1374e22b38cb589f1fd05c8/installments')
        .then(response => response)
        .catch(response => response)

})()
