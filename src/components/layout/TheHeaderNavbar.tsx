'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter, useParams } from 'next/navigation'
import { BellIcon } from '@heroicons/react/24/outline'
import BaseIcon from '../atoms/BaseIcon'
import { useLayoutStore } from '@/libs/zustand/layoutStore'

const TheHeaderNavbar: React.FC = () => {
  const router = useRouter()
  const params = useParams()
  const locale = Array.isArray(params.locale) ? params.locale[0] : params.locale
  const { isShowNotification, toggleNotification } = useLayoutStore()

  return (
    <header className="bg-base-100 border-base-300 flex h-[var(--header-height)] items-center justify-between gap-3 border-b px-10 py-3">
      {/* Logo */}
      <Link
        href={`/`}
        className="w-36 pr-5 text-center text-2xl whitespace-nowrap"
        style={{ fontFamily: 'var(--font-moirai-one)' }}
      >
        지뱅이 월드
      </Link>

      {/* Change View */}
      <ul className="flex gap-5 text-gray-500">
        <li>
          <Link href={`/blog`} className="transition-colors hover:text-black">
            <span>Blog</span>
          </Link>
        </li>
        <li>
          <Link href={`/about`} className="transition-colors hover:text-black">
            <span>About</span>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default TheHeaderNavbar
