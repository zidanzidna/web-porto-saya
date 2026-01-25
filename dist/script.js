// Di component
import localFont from './font/varsity_regular.ttf'
import localFont from './font/PressStart2P-Regular.ttf'
import localFont from './font/VT323-Regular.ttf'

const varsity = localFont({
  src: './font/varsity_regular.ttf',
  variable: '--font-varsity',
})

const start = localFont({
  src: './font/PressStart2P-Regular.ttf',
  variable: '--font-heading',
})

const vt323 = localFont({
  src: './font/VT323-Regular.ttf',
  variable: '--font-body',
})