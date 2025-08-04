'use client'

import React from 'react'
import { useAlarmStore } from '@/libs/zustand/alarmStore'
import BaseAlert from '@/components/atoms/BaseAlert'

const TheAlarm: React.FC = () => {
  const { isOpen, type, style, title, message, close } = useAlarmStore()

  if (!isOpen) return null

  return (
    <div className="translate-y-0 transform transition-all duration-300 ease-in-out">
      <BaseAlert
        className="rounded-none"
        type={type}
        alertStyle={style}
        title={title}
        message={message}
        onClose={close}
      >
        <label className="label">
          <input type="checkbox" className="checkbox" />
          오늘 하루 보지 않기
        </label>
      </BaseAlert>
    </div>
  )
}

export default TheAlarm
