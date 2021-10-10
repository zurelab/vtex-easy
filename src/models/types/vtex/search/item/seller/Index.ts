import Installment from './Installment';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Seller {
  addToCartLink: string
  commertialOffer: {
    AvailableQuantity: number
    BuyTogether: Array<any>
    CacheVersionUsedToCallCheckout: string
    DeliverySlaSamples: Array<any>
    DeliverySlaSamplesPerRegion: any
    DiscountHighLight: Array<any>
    GetInfoErrorMessage: any
    GiftSkuIds: Array<any>
    Installments: Array<Installment>
    IsAvailable: boolean
    ItemMetadataAttachment: Array<any>
    ListPrice: number
    PaymentOptions: any
    Price: number
    PriceValidUntil: string
    PriceWithoutDiscount: number
    RewardValue: number
    SaleChannel: number
    Tax: number
    Teasers: Array<any>
  }
  sellerDefault: boolean
  sellerId: string
  sellerName: string
}

export default Seller;
