// AccountContext.tsx
import React, { createContext, useState } from 'react'

export interface AccountType {
  email: string
  uid: string
  accessToken: string
}

export interface AccountContextType {
  account: AccountType
  setAccount: React.Dispatch<React.SetStateAction<AccountType>>
}

export const defaultAccount: AccountType = {
  email: '',
  uid: '',
  accessToken: '',
}

export const AccountContext = createContext<AccountContextType>({
  account: defaultAccount,
  setAccount: () => {},
})
