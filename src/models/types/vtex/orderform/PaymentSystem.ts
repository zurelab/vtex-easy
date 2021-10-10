/* eslint-disable @typescript-eslint/no-explicit-any */

interface PaymentSystem {
  availablePayments: any
  description: any
  dueDate: string
  groupName: string
  id: number
  isCustom: boolean
  name: string
  requiresAuthentication: boolean
  requiresDocument: boolean
  stringId: string
  template: string
  validator: {
    cardCodeMask: string
    cardCodeRegex: string
    mask: string
    regex: string
    useBillingAddress: boolean
    useCardHolderName: boolean
    useCvv: boolean
    useExpirationDate: boolean
    weights: Array<number>
  }
}

export default PaymentSystem;
