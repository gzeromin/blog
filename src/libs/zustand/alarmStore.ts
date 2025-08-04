import { create } from 'zustand'
import type { AlertStyle, AlertType } from '@/types/daisyui.type'

interface AlarmState {
  isOpen: boolean
  type: AlertType
  style: AlertStyle
  title: string
  message: string | undefined
  open: (type: AlertType, title: string, message?: string) => void
  openSoft: (type: AlertType, title: string, message?: string) => void
  openOutline: (type: AlertType, title: string, message?: string) => void
  openDash: (type: AlertType, title: string, message?: string) => void
  close: () => void
}

export const useAlarmStore = create<AlarmState>(set => ({
  isOpen: false,
  type: 'info',
  style: 'color',
  title: '',
  message: undefined,

  open: (type: AlertType, title: string, message?: string) =>
    set({ type, style: 'color', title, message, isOpen: true }),

  openSoft: (type: AlertType, title: string, message?: string) =>
    set({ type, style: 'soft', title, message, isOpen: true }),

  openOutline: (type: AlertType, title: string, message?: string) =>
    set({ type, style: 'outline', title, message, isOpen: true }),

  openDash: (type: AlertType, title: string, message?: string) =>
    set({ type, style: 'dash', title, message, isOpen: true }),

  close: () => set({ isOpen: false }),
})) 