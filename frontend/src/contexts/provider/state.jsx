import { useState } from 'react'
import { State } from '../context'

export const StateProvider = ({ children }) => {
  const [state, setState] = useState(false)

  return <State.Provider value={{ state, setState }}>{children}</State.Provider>
}
