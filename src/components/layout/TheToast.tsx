'use client'

import React, { useEffect, useState } from 'react'
import { useToastStore } from '@/libs/zustand/toastStore'
import BaseAlert from '../atoms/BaseAlert'

const TheToast: React.FC = () => {
  const { isOpen, type, style, title, message, close } = useToastStore()
  const [position, setPosition] = useState('toast-middle opacity-100')
  const [upTimer, setUpTimer] = useState<NodeJS.Timeout | null>(null)
  const [byeTimer, setByeTimer] = useState<NodeJS.Timeout | null>(null)

  /* 등장→이동→닫힘 애니메이션 */
  const resetPosition = () => {
    setPosition('toast-middle opacity-100')
    if (upTimer) clearTimeout(upTimer)
    if (byeTimer) clearTimeout(byeTimer)
    setUpTimer(null)
    setByeTimer(null)
  }

  useEffect(() => {
    if (!isOpen) return

    resetPosition()

    const upTimerId = setTimeout(() => {
      setPosition('toast-top opacity-50')
    }, 2000)

    const byeTimerId = setTimeout(() => {
      close()
      resetPosition()
    }, 2500)

    setUpTimer(upTimerId)
    setByeTimer(byeTimerId)

    return () => {
      if (upTimerId) clearTimeout(upTimerId)
      if (byeTimerId) clearTimeout(byeTimerId)
    }
  }, [isOpen, close])

  if (!isOpen) return null

  return (
    <div
      className={`toast toast-end transition-all duration-500 ease-in-out ${position}`}
    >
      <BaseAlert
        type={type}
        title={title}
        alertStyle={style}
        message={message}
        onClose={close}
      />
    </div>
  )
}

export default TheToast
