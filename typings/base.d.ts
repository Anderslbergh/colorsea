type ColorBaseProp = 'h' | 's' | 'l' | 'r' | 'g' | 'b'

type RgbType = [number, number, number]
type RgbaType = [number, number, number, number]

interface RgbDict {
  r: number
  g: number
  b: number
}

interface RgbaDict extends RgbDict {
  a: number
}

interface HslaDict {
  h: number
  s: number
  l: number
  a: number
}
