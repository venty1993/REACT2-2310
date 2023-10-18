import React, { createContext } from 'react'
import CafeInner from './CafeInner'

const CafeContext = createContext();

export default function Cafe() {
    const menu = '붕슈라'
  return (
    <CafeContext.Provider value={menu}>
        <CafeInner/>
    </CafeContext.Provider>
  )
}
