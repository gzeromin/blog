import type { Metadata } from 'next'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import TheApplyNonceToStyle from '@/components/atoms/TheApplyNonceToStyle'
import DaisyUiThemeProvider from '@/components/providers/DaisyUiThemeProvider'
import ReactQueryProvider from '@/components/providers/ReactQueryProvider'
import TheToast from '@/components/layout/TheToast'

export const metadata: Metadata = {
  title: 'Jibang2blog',
  description: 'Jibang2blog',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {/* CSP nonce를 스타일에 적용하는 컴포넌트 */}
        <TheApplyNonceToStyle />
        {/* DaisyUI 테마 프로바이더 */}
        <DaisyUiThemeProvider>
          {/* React Query 프로바이더 */}
          <ReactQueryProvider>
            {/* 다국어 지원 프로바이더 */}
            <NextIntlClientProvider>
              {/* 메인 콘텐츠 */}
              {children}
              {/* 토스트 알림 컨테이너 - 화면 우측 상단에 고정 */}
              <div
                className="pointer-events-none fixed top-0 left-0 z-50 flex w-full justify-end"
                style={{ transition: 'all 0.3s ease-in-out' }}
              >
                <div className="flex w-full justify-end">
                  <TheToast />
                </div>
              </div>
            </NextIntlClientProvider>
          </ReactQueryProvider>
        </DaisyUiThemeProvider>
      </body>
    </html>
  )
}
