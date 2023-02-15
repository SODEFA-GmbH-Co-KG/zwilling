# Zwilling

Replacement for [twin.macro](https://github.com/ben-rogerson/twin.macro)'s `tw` function.
Just use `zw` instead of `tw` everywhere.

- Source-Code: [zwilling.tsx](/src/lib/zwilling.tsx)
- Example-Page: [pages/index.tsx](/src/pages/index.tsx)

Internally uses [clsx](https://www.npmjs.com/package/clsx) for better DX (can be removed)

## Installation

```bash
npm i zwilling
# or
yarn add zwilling
# or
pnpm add zwilling
```

vanilla:

```tsx
// lib/zw.ts
import { Zwilling } from '../packages/zwilling'

export const zw = Zwilling()

// pages/demo.tsx
const StyledLink = zw.a`underline`
```

with clsx:

```tsx
// lib/zw.ts
import clsx, { ClassValue } from 'clsx'
import { Zwilling } from '../packages/zwilling'

export const zw = Zwilling<ClassValue>({
  classNameJoiner: clsx,
})

// pages/demo.tsx
const StyledLink = zw.a((href) => ({ underline: !!href }))
```

## Why?

- No need for Styled Components or Emotion
- No need for a babel plugin

## Limitations

- Only implements `tw` from `twin.macro`
- No support for `css` from `twin.macro`
- No support for `styled` from `twin.macro`
- No support for `theme` from `twin.macro`
- In general: No support for CSS!
- No support for custom twin.macro syntax like `md:(h-4 w-4)`

## Examples

```tsx
const justAString = zw`text-red-500` // => 'text-red-500'
```

```tsx
const StyledLink = zw.a`text-red-500`
return <StyledLink href="#typed">Whoop</StyledLink>
```

```tsx
const darkMode = true
const StyledLink = zw.a`text-red-500 ${darkMode ? 'text-white' : 'text-black'}`
```

```tsx
const darkMode = true
const StyledLink = zw.a`text-red-500 ${[
  // clsx style
  darkMode && 'text-white',
  { 'text-white': darkMode },
  [[[[['text-2xl']]]]],
]}`
```

```tsx
const StyledLink = zw.a<{ $active: boolean }>`text-red-500 ${(props) =>
  props.$active && 'text-white'}`
```

```tsx
const SuperButton = (props) => (
  <button className={props.className}>Super</button>
)
const StyledSuperButton = zw(SuperButton)`text-red-500`
```

```tsx
const StyledLink = zw.a(['bg-purple-500', { 'rotate-45': true }])
```

```tsx
const StyledLink = zw.a<{ $active: boolean }>(
  (p) => p.$active && 'bg-purple-500'
)
```

```tsx
const NotSoStyledLink = zw.a()
return <NotSoStyledLink className={{ 'bg-purple-500': true }} />
```

```tsx
// Combine with styled-components if you are a madman (or have legacy code):
const DoubleStyled = styled(
  zw.a`bg-purple-500` // tailwind here
)`
  text-decoration: underline; /* CSS here */
`
```

```tsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva('', {
  variants: {
    color: {
      red: 'bg-red-500',
      green: 'bg-green-500',
    },
  },
})
const VariantButton = zw.a(buttonVariants)
```
