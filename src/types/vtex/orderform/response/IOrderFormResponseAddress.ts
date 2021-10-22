/* eslint-disable @typescript-eslint/no-explicit-any */
import MetaItem from './IOrderFormResponseMetaItem';
import Item from './IOrderFormResponseItem';
import InstallmentOption from './IOrderFormResponseInstallmentOption';
import PaymentSystem from './IOrderFormResponsePaymentSystem';

interface Address {
  addressId: string
  addressType: string
  city: string
  complement: any
  country: string
  geoCoordinates: [number, number]
  isDisposable: boolean
  neighborhood: string
  number: string
  postalCode: string
  receiverName: string
  reference: any
  state: string
  street: string
}

export default Address;
