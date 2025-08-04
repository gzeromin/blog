import React from 'react'
import type { AlertStyle, AlertType } from '@/types/daisyui.type'
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

interface BaseAlertProps {
  className?: string
  type: AlertType
  title: string
  alertStyle: AlertStyle
  message?: string
  onClose?: () => void
  children?: React.ReactNode
}

const BaseAlert: React.FC<BaseAlertProps> = ({
  className,
  type,
  title,
  alertStyle,
  message,
  onClose,
  children,
}) => {
  /* 아이콘 매핑 */
  const iconMap = {
    info: InformationCircleIcon,
    success: CheckCircleIcon,
    warning: ExclamationTriangleIcon,
    error: XCircleIcon,
    default: InformationCircleIcon,
  }
  const IconComp = iconMap[type] || iconMap.default

  /* 색상·배경 매핑 */
  const alertTypeClass = {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error: 'alert-error',
    default: '',
  }[type]

  const alertStyleClass = {
    color: 'alert-color',
    soft: 'alert-soft',
    outline: 'alert-outline',
    dash: 'alert-dash',
  }[alertStyle]

  return (
    <div
      role="alert"
      className={`alert alert-vertical sm:alert-horizontal ${alertTypeClass} ${alertStyleClass} ${className}`}
    >
      <IconComp
        className={`h-6 w-6 shrink-0 ${
          type === 'default' ? 'stroke-info' : 'stroke-current'
        }`}
      />
      {message ? (
        <div>
          <h3 className="font-bold">{title}</h3>
          <div className="text-xs">{message}</div>
        </div>
      ) : (
        <span>{title}</span>
      )}
      {children}
      {onClose && (
        <XMarkIcon
          className="h-6 w-6 cursor-pointer"
          onClick={onClose}
          aria-label="Close alert"
        />
      )}
    </div>
  )
}

export default BaseAlert
