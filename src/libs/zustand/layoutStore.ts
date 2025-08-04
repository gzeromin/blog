import { create } from 'zustand'

interface LayoutState {
  // Notification
  isShowNotification: boolean
  openNotification: () => void
  closeNotification: () => void
  toggleNotification: () => void

  // Sidebar
  isSidebarCollapsed: boolean
  isTextVisible: boolean
  isShowSidebarControlIcon: boolean
  collapseSidebar: () => void
  expandSidebar: () => void
  toggleSidebar: () => void
  hideSidebarControlIcon: () => void

  // Alarm
  isShowAlarm: boolean
  openAlarm: () => void
  closeAlarm: () => void
}

export const useLayoutStore = create<LayoutState>((set, get) => ({
  // Notification
  isShowNotification: false,
  openNotification: () => {
    set({ isShowNotification: true })
    get().collapseSidebar()
  },
  closeNotification: () => {
    set({ isShowNotification: false })
    get().expandSidebar()
  },
  toggleNotification: () => {
    const { isShowNotification, closeNotification, openNotification } = get()
    if (isShowNotification) {
      closeNotification()
      return
    }
    openNotification()
  },

  // Sidebar
  isSidebarCollapsed: false,
  isTextVisible: true,
  isShowSidebarControlIcon: false,
  collapseSidebar: () => {
    set({ isTextVisible: false })
    setTimeout(() => set({ isSidebarCollapsed: true }), 20)
  },
  expandSidebar: () => {
    set({ isSidebarCollapsed: false })
    setTimeout(() => set({ isTextVisible: true }), 200)
  },
  toggleSidebar: () => {
    const { isSidebarCollapsed, expandSidebar, collapseSidebar } = get()
    set({ isShowSidebarControlIcon: true })
    if (isSidebarCollapsed) {
      expandSidebar()
      return
    }
    collapseSidebar()
  },
  hideSidebarControlIcon: () => set({ isShowSidebarControlIcon: false }),

  // Alarm
  isShowAlarm: false,
  openAlarm: () => set({ isShowAlarm: true }),
  closeAlarm: () => set({ isShowAlarm: false }),
}))
