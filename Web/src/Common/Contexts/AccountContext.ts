// AccountContext.tsx
import React, { createContext } from 'react'
import { AREA } from '../types/Area'

export interface AccountType {
  email: string
  uid: string
  accessToken: string
  areas: AREA[]
}

export interface AccountContextType {
  account: AccountType
  setAccount: React.Dispatch<React.SetStateAction<AccountType>>
}

export const defaultAccount: AccountType = {
  email: '',
  uid: '',
  accessToken: '',
  areas: [],
}

export const AccountContext = createContext<AccountContextType>({
  account: defaultAccount,
  setAccount: () => {},
})
