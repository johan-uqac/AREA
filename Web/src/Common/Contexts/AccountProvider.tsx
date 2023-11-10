import { useState, useMemo } from 'react'
import { AccountType, defaultAccount, AccountContext } from './AccountContext'

/**
 * @interface AccountProviderProps
 * @description AccountProvider component props
 * @extends {React.PropsWithChildren<React.ReactNode>} React children
 * @property {React.ReactNode} children AccountProvider children
 */
interface AccountProviderProps {
  children: React.ReactNode
}

/**
 * @function AccountProvider
 * @description Component that provides the account data.
 * @param {AccountProviderProps} props AccountProvider props
 * @param {React.ReactNode} props.children AccountProvider children
 * @returns {React.JSX.Element} AccountContext provider
 */
export function AccountProvider({ children }: AccountProviderProps): React.JSX.Element {
  const [account, setAccount] = useState<AccountType>(defaultAccount)

  const memoizedContextValue = useMemo(() => ({ account, setAccount }), [account])

  return <AccountContext.Provider value={memoizedContextValue}>{children}</AccountContext.Provider>
}
