import React from 'react'

interface BaseIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  size?: number
  className?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
}

const BaseIcon: React.FC<BaseIconProps> = ({
  icon: Icon,
  size = 32,
  className = '',
  onClick,
}) => {
  const baseClasses = [
    'text-gray-500',
    'hover:text-gray-800 hover:cursor-pointer',
    'p-1 hover:bg-gray-50 rounded-full',
    'transition-colors duration-400 ease-in-out',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Icon
      className={baseClasses}
      onClick={onClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  )
}

export default BaseIcon
