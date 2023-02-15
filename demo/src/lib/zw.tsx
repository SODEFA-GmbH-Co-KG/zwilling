import clsx, { ClassValue } from 'clsx'
import { Zwilling } from '../packages/zwilling'

export const zw = Zwilling<ClassValue>({
  classNameJoiner: clsx,
})
