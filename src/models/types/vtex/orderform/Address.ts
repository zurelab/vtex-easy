interface OrderFormResponseAddress {
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

export default OrderFormResponseAddress;
