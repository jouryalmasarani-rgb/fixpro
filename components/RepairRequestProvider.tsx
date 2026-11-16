'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type RepairDevice = 'Waschmaschine' | 'Kaffeemaschine' | 'Lautsprecher' | 'Anderes Gerät'

const RepairRequestContext = createContext<{
  device: RepairDevice
  setDevice: (device: RepairDevice) => void
} | null>(null)

export function RepairRequestProvider({ children, initialDevice = 'Waschmaschine' }: { children: ReactNode; initialDevice?: RepairDevice }) {
  const [device, setDevice] = useState<RepairDevice>(initialDevice)
  return <RepairRequestContext.Provider value={{ device, setDevice }}>{children}</RepairRequestContext.Provider>
}

export function useRepairRequest() {
  const context = useContext(RepairRequestContext)
  if (!context) throw new Error('RepairRequestProvider is required')
  return context
}
