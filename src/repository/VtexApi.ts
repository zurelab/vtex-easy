/* eslint-disable @typescript-eslint/no-explicit-any */
import IVtexApi from './types/VtexApi';
import vtex from '@/repository/vtexAxios';
import ISearch from '@model/types/vtex/search/Index';
import IFacets from '@model/types/vtex/facets/Index';
import IOrderForm from '@model/types/vtex/orderform/Index';
import IOrderFormProductList from '@model/types/vtex/orderform/OrderFormProductList';
import IMDPostResponse from '@model/types/vtex/masterdata/PostResponse';

const expectedOrderFormSections = ['items', 'totalizers', 'clientProfileData', 'shippingData', 'paymentData', 'sellers', 'messages', 'marketingData', 'clientPreferencesData', 'storePreferencesData', 'giftRegistryData', 'ratesAndBenefitsData', 'openTextField', 'commercialConditionData', 'customData'];

const defaultHeader = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const VtexApi: IVtexApi = {
  search: {
    get: async (complement: string): Promise<ISearch[]> => {
      const url = `/api/catalog_system/pub/products/search${complement}`;
      const { data } = await vtex.get<ISearch[]>(url);
      return data;
    },
  },

  facets: {
    get: async (complement: string): Promise<IFacets> => {
      const url = `/api/catalog_system/pub/facets/search${complement}`;
      const { data } = await vtex.get<IFacets>(url);
      return data;
    },
  },

  orderform: {
    get: async (): Promise<IOrderForm> => {
      const url = '/api/checkout/pub/orderForm/';
      const { data } = await vtex.get<IOrderForm>(url);
      return data;
    },
    add: async (orderformId: string, items: IOrderFormProductList, SalesChannel = 1):
      Promise<IOrderForm> => {
      const url = `/api/checkout/pub/orderForm/${orderformId}/items?sc=${SalesChannel}`;

      const { data }: { data: Promise<IOrderForm> } = await vtex({
        method: 'post',
        url,
        headers: defaultHeader,
        data: {
          expectedOrderFormSections,
          orderItems: items,
        },
      });

      return data;
    },
    update: async (orderformId: string, items: IOrderFormProductList): Promise<IOrderForm> => {
      const url = `/api/checkout/pub/orderForm/${orderformId}/items/update/`;

      const { data }: { data: Promise<IOrderForm> } = await vtex({
        method: 'patch',
        url,
        headers: defaultHeader,
        data: {
          orderItems: items,
        },
      });

      return data;
    },
  },

  masterdata: {
    async get(entity: string, documentId:string, fields: Array<string>) {
      const url = `/api/dataentities/${entity}/documents/${documentId}?_fields=${fields.join()}`;
      const { data }: { data: Promise<IMDPostResponse> } = await vtex({
        method: 'get',
        url,
        headers: defaultHeader,
      });

      return data;
    },
    async post(entity: string, body: any): Promise<IMDPostResponse> {
      const url = `/api/dataentities/${entity}/documents`;
      const { data }: { data: Promise<IMDPostResponse> } = await vtex({
        method: 'post',
        url,
        headers: defaultHeader,
        data: body,
      });

      return data;
    },
    async update(entity: string, documentId:string, body: any) {
      const url = `/api/dataentities/${entity}/documents/${documentId}`;
      await vtex({
        method: 'patch',
        url,
        headers: defaultHeader,
        data: body,
      });
    },
  },

};

export default VtexApi;
