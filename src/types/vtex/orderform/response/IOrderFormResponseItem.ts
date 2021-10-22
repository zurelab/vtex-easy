/* eslint-disable @typescript-eslint/no-explicit-any */

interface IOrderFormResponseItem {
  additionalInfo: {
    brandId: string
    brandName: string
    dimension: any
    offeringInfo: any
    offeringType: any
    offeringTypeId: any
  }
  assemblies: Array<any>
  attachmentOfferings: Array<any>
  attachments: Array<any>
  availability: string
  bundleItems: Array<any>
  components: Array<any>
  detailUrl: string
  ean: string
  id: string
  imageUrl: string
  isGift: boolean
  listPrice: number
  manualPrice: any
  manualPriceAppliedBy: any
  manufacturerCode: any
  measurementUnit: string
  modalType: any
  name: string
  offerings: Array<any>
  parentAssemblyBinding: any
  parentItemIndex: any
  preSaleDate: any
  price: number
  priceDefinition: {
    calculatedSellingPrice: number
    total: number
    sellingPrices: Array<{
      value: number,
      quantity: number
    }>
  }
  priceTags: Array<any>
  priceValidUntil: string
  productCategories: any
  productCategoryIds: string
  productId: string
  productRefId: string
  quantity: number
  refId: string
  rewardValue: number
  seller: string
  sellerChain: Array<string>
  sellingPrice: number
  skuName: string
  tax: number
  uniqueId: string
  unitMultiplier: number
  index?: number
}

export default IOrderFormResponseItem;
