/* eslint-disable @typescript-eslint/no-explicit-any */

interface Installment {
  count: number
  hasInterestRate: boolean
  interestRate: number
  sellerMerchantInstallments: Array<{
    count: number
    hasInterestRate: boolean
    id: string
    interestRate: number
    total: number
    value: number
  }>
  total: number
  value: number
}

export default Installment;
