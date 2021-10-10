import Item from './item/Index';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface VtexSearchBase {
  allSpecifications: Array<string>
  allSpecificationsGroups: Array<string>
  brand: string
  brandId: number
  brandImageUrl: string
  categories: Array<string>
  categoriesIds: Array<string>
  categoryId: string
  clusterHighlights: any
  description: string
  items: Array<Item>
  link: string
  linkText: string
  metaTagDescription: string
  productClusters: any
  productId: string
  productName: string
  productReference: string
  productReferenceCode: string
  productTitle: string
  releaseDate: string
  searchableClusters: any
  skuSpecifications: Array<any>
}

export default VtexSearchBase;
