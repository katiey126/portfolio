import { Inter } from 'next/font/google'
import { Cabin_Sketch } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const cabinSketch = Cabin_Sketch({
  weight:"400",
  subsets: ['latin'], 
  variable: '--font-cabin-sketch',
  display: 'swap',
});