/* eslint-disable @typescript-eslint/no-explicit-any */
import MetaItem from './IOrderFormResponseMetaItem';
import Item from './IOrderFormResponseItem';
import InstallmentOption from './IOrderFormResponseInstallmentOption';
import PaymentSystem from './IOrderFormResponsePaymentSystem';
import Address from './IOrderFormResponseAddress';

interface IOrderFormResponse {
  allowManualPrice: boolean
  canEditData: boolean
  checkedInPickupPointId: any
  clientPreferencesData: {
    locale: string,
    optinNewsLetter: boolean
  }
  clientProfileData: {
    corporateDocument: any
    corporateName: any
    corporatePhone: any
    customerClass: any
    document: string
    documentType: string
    email: string
    firstName: string
    isCorporate: boolean
    lastName: string
    phone: string
    profileCompleteOnLoading: boolean
    profileErrorOnLoading: boolean
    stateInscription: any
    tradeName: any
  }
  commercialConditionData: any
  customData: any
  giftRegistryData: any
  hooksData: any
  ignoreProfileData: boolean
  invoiceData: any
  isCheckedIn: boolean
  itemMetadata: {
    items: Array<MetaItem>
  }
  items: Array<Item>
  itemsOrdination: any
  loggedIn: boolean
  marketingData: any
  messages: Array<any>
  openTextField: any
  orderFormId: string
  paymentData: {
    availableAccounts: Array<any>
    availableTokens: Array<any>
    giftCardMessages: Array<any>
    giftCards: Array<any>
    installmentOptions: Array<InstallmentOption>
    paymentSystems: Array<PaymentSystem>
    payments: Array<any>
    updateStatus: string
  }
  ratesAndBenefitsData: {
    rateAndBenefitsIdentifiers: Array<any>
    teaser: Array<any>
  }
  salesChannel: string
  selectableGifts: Array<any>
  sellers: Array<{
    id: string
    logo: string
    name: string
  }>
  shippingData: {
    address: Address
    availableAddresses: Array<Address>
    logisticsInfo: Array<{
      addressId: string
      deliveryChannels: Array<{
        id: string
      }>
      itemId: string
      itemIndex: number
      selectedDeliveryChannel: string
      selectedSla: string
      shipsTo: Array<string>
      slas: Array<{
        availableDeliveryWindows: Array<any>
        deliveryChannel: string
        deliveryIds: Array<{
          courierId: string
          courierName: string
          dockId: string
          kitItemDetails: Array<any>
          quantity: number
          warehouseId: string
        }>
        deliveryWindow: any
        id: string
        listPrice: number
        lockTTL: any
        name: string
        pickupDistance: number
        pickupPointId: any
        pickupStoreInfo: {
          isPickupStore: boolean,
          friendlyName: any,
          address: any,
          additionalInfo: any,
          dockId: any
        }
        polygonName: string
        price: number
        shippingEstimate: string
        shippingEstimateDate: any
        tax: number
        transitTime: string
      }>
    }>
    pickupPoints: Array<any>
    selectedAddresses: Array<Address>
  }
  storeId: any
  storePreferencesData: {
    countryCode: string
    currencyCode: string
    currencyFormatInfo: {
      currencyDecimalDigits: number
      currencyDecimalSeparator: string
      currencyGroupSeparator: string
      currencyGroupSize: number
      startsWithCurrencySymbol: boolean
    }
    currencyLocale: number
    currencySymbol: string
    saveUserData: boolean
    timeZone: string
  }
  subscriptionData: any
  totalizers: Array<{
    id: string
    name: string
    value: number
  }>
  userProfileId: string
  userType: any
  value: number
}

export default IOrderFormResponse;
