import './globals.css'
import { IBM_Plex_Sans_KR } from 'next/font/google'
import { Providers } from './providers'

const defaultFontLight = IBM_Plex_Sans_KR({weight: "300", subsets:["latin"]})

export const metadata = {
  title: '의정부고등학교 학생도우미',
  description: '해당 웹앱은 Next.js로 만들어졌습니다.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={defaultFontLight.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
