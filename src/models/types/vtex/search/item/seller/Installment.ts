/* eslint-disable @typescript-eslint/no-explicit-any */
interface Installment {
  InterestRate: number
  Name: string
  NumberOfInstallments: number
  PaymentSystemGroupName: string
  PaymentSystemName: string
  TotalValuePlusInterestRate: number
  Value: number
}

export default Installment;
