import React from 'react'
import TheAlarm from '@/components/layout/TheAlarm'
import TheHeaderNavbar from '@/components/layout/TheHeaderNavbar'
import TheNotificationPanel from '@/components/layout/TheNotificationPanel'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-[100vh] flex-col">
      {/* ───── Alarm (상단 슬라이드) ───── */}
      <TheAlarm />

      {/* ───── Header ───── */}
      <TheHeaderNavbar />

      {/* ───── Main 영역 ───── */}
      <main className="flex flex-1 overflow-hidden">
        {/* 메인 콘텐츠 */}
        <div className="h-full flex-1">{children}</div>
        {/* ───── Notification Panel ───── */}
        <TheNotificationPanel />
      </main>
    </div>
  )
}
