# Zwilling

Replacement for [twin.macro](https://github.com/ben-rogerson/twin.macro)'s `tw` function.

- Source-Code: [zwilling.tsx](/src/lib/zwilling.tsx)
- Example-Page: [pages/index.tsx](/src/pages/index.tsx)

Internally uses [clsx](https://www.npmjs.com/package/clsx) for better DX (can be removed)

## Why?

- No need for Styled Components or Emotion
- No need for a babel plugin

## Examples

```tsx
const justAString = tw`text-red-500` // => 'text-red-500'
```

```tsx
const StyledLink = tw.a`text-red-500`
return <StyledLink href="#typed">Whoop</StyledLink>
```

```tsx
const darkMode = true
const StyledLink = tw.a`text-red-500 ${darkMode ? 'text-white' : 'text-black'}`
```

```tsx
const darkMode = true
const StyledLink = tw.a`text-red-500 ${[
  // clsx style
  darkMode && 'text-white',
  { 'text-white': darkMode },
  [[[[['text-2xl']]]]],
]}`
```

```tsx
const StyledLink = tw.a<{ $active: boolean }>`text-red-500 ${(props) =>
  props.$active && 'text-white'}`
```

```tsx
const SuperButton = (props) => (
  <button className={props.className}>Super</button>
)
const StyledSuperButton = tw(SuperButton)`text-red-500`
```

```tsx
const StyledLink = tw.a(['bg-purple-500', { 'rotate-45': true }])
```

```tsx
const StyledLink = tw.a<{ $active: boolean }>(
  (p) => p.$active && 'bg-purple-500'
)
```

```tsx
const NotSoStyledLink = tw.a()
return <NotSoStyledLink className={{ 'bg-purple-500': true }} />
```
