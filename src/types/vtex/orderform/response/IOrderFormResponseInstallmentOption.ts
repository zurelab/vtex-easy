/* eslint-disable @typescript-eslint/no-explicit-any */

import Installment from './IOrderFormResponseInstallment';

interface IOrderFormResponseInstallmentOption {
  bin: any
  installments: Array<Installment>
  paymentGroupName: any
  paymentName: any
  paymentSystem: string
  value: number
}

export default IOrderFormResponseInstallmentOption;
