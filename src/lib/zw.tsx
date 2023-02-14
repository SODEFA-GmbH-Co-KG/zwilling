import clsx, { ClassValue } from 'clsx'
import { Zwilling } from './zwilling'

export const zw = Zwilling<ClassValue>({
  classNameJoiner: clsx,
})
