/* eslint-disable @typescript-eslint/no-explicit-any */

import Installment from './Installment';

interface InstallmentOption {
  bin: any
  installments: Array<Installment>
  paymentGroupName: any
  paymentName: any
  paymentSystem: string
  value: number
}

export default InstallmentOption;
