import Background from '@/components/sections/Background'
import Navigation from '@/components/sections/Navigation'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en' className='scroll-smooth'>
      <Head />
      <body>
        <Background />
        <div className='flex flex-col xl:flex-row justify-between m-auto xl:gap-x-24 xl:w-[1500px] mt-10 xl:mt-0'>
          <div className='w-full xl:w-80'>
            <Navigation />
          </div>

          <main className='flex-1 relative px-6 scroll-smooth'>
            <Main />
          </main>
        </div>

        <NextScript />
      </body>
    </Html>
  )
}
