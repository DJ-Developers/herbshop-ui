import { Montserrat, Sacramento, Kaushan_Script } from 'next/font/google'

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const sacramento = Sacramento({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sacramento',
})
export const kaushan_script = Kaushan_Script({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-kaushan-script',
})
