import React, { useState, useRef, useEffect } from 'react'

interface DropdownItem {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  action?: () => void
  indicator?: boolean
}

interface BaseIconDropdownProps {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  list: DropdownItem[]
  width?: number
  horizontal?: 'start' | 'end'
  titleType?: 'text' | 'avatar'
}

const BaseIconDropdown: React.FC<BaseIconDropdownProps> = ({
  icon: Icon,
  title,
  list,
  width = 200,
  horizontal = 'start',
  titleType = 'text',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (item: DropdownItem) => {
    if (item.action) {
      item.action()
    }
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-2 p-2 rounded-lg hover:bg-base-200 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {Icon && <Icon className="w-5 h-5" />}
        {titleType === 'avatar' ? (
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span className="text-xs">{title.charAt(0).toUpperCase()}</span>
            </div>
          </div>
        ) : (
          <span>{title}</span>
        )}
      </button>

      {isOpen && (
        <div
          className={`absolute top-full mt-1 bg-base-100 border border-base-300 rounded-lg shadow-lg z-50 ${
            horizontal === 'end' ? 'right-0' : 'left-0'
          }`}
          style={{ width: `${width}px` }}
        >
          {list.map((item, index) => (
            <div key={index}>
              {item.indicator ? (
                <div className="border-t border-base-300 my-1" />
              ) : (
                <button
                  className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-base-200 transition-colors"
                  onClick={() => handleItemClick(item)}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.label}</span>
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default BaseIconDropdown 