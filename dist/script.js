import localFont from 'next/font/local'

const varsity = localFont({
  src: './font/varsity_regular.ttf',
  variable: '--font-varsity',
  display: 'swap',
})

const PressStart2P = localFont({
  src: './font/PressStart2P-Regular.ttf',
  variable: '--font-heading',
  display: 'swap',
})

const vt323 = localFont({
  src: './font/VT323-Regular.ttf',
  variable: '--font-body',
  display: 'swap',
})

const inter = localFont({
  src: './fonts/Inter-VariableFont.ttf',
  variable: '--font-inter',
  display: 'swap',
})

export { varsity, PressStart2P, vt323, inter }