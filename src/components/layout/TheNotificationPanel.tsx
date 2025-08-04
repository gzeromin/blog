'use client'

import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useAlarmStore } from '@/libs/zustand/alarmStore'
import { useLayoutStore } from '@/libs/zustand/layoutStore'
import { useToastStore } from '@/libs/zustand/toastStore'

const TheNotificationPanel: React.FC = () => {
  const notiStore = useAlarmStore()
  const toastStore = useToastStore()
  const { isShowNotification, closeNotification } = useLayoutStore()

  return (
    <div
      className={`bg-base-100 border-base-300 flex h-full flex-col gap-4 overflow-y-auto border-l transition-all duration-300 ${
        isShowNotification ? 'w-[396px] p-5 opacity-100' : 'w-0 p-0 opacity-0'
      }`}
    >
      <XMarkIcon
        className="h-6 w-6 cursor-pointer"
        onClick={() => closeNotification()}
      />
      --- Alarm ---
      <button
        className="btn btn-neutral"
        onClick={() => notiStore.open('info', 'New message!')}
      >
        Alarm
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          notiStore.openDash('success', '성공!', '변경 사항이 저장되었습니다.')
        }
      >
        Primary
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          notiStore.open('default', '디폴트', '필수 값을 입력해 주세요.')
        }
      >
        Secondary
      </button>
      <button className="btn btn-accent">Accent</button>
      --- Toast ---
      <button
        className="btn btn-info"
        onClick={() => toastStore.open('info', '알림', 'New mail arrived.')}
      >
        Info
      </button>
      <button
        className="btn btn-success"
        onClick={() =>
          toastStore.open('success', '변경 사항이 저장되었습니다.')
        }
      >
        Success
      </button>
      <button
        className="btn btn-warning"
        onClick={() => toastStore.openDash('warning', '경고', 'hoge')}
      >
        Warning
      </button>
      <button
        className="btn btn-error"
        onClick={() => toastStore.open('error', '에러', 'hoho')}
      >
        Error
      </button>
    </div>
  )
}

export default TheNotificationPanel
