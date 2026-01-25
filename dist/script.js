import localFont from 'next/font/local'

const varsity = localFont({
  src: './font/varsity_regular.ttf',
  variable: '--font-varsity',
  display: 'swap',
})

const pressStart = localFont({
  src: './font/PressStart2P-Regular.ttf',
  variable: '--font-heading',
  display: 'swap',
})

const vt323 = localFont({
  src: './font/VT323-Regular.ttf',
  variable: '--font-body',
  display: 'swap',
})

export { varsity, pressStart, vt323 }