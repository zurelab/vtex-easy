import Image from './Image';
import ReferenceId from './ReferenceId';
import Seller from './seller/Index';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface VtexSearchItemBase {
  complementName: string
  ean: string
  estimatedDateArrival: any
  images: Array<Image>
  isKit: boolean
  itemId: string
  measurementUnit: string
  modalType: any
  name: string
  nameComplete: string
  referenceId: Array<ReferenceId>
  sellers: Array<Seller>
  unitMultiplier: number
  variations: Array<string>
}

export default VtexSearchItemBase;
