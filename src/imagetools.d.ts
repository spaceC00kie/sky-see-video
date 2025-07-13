// Generic fallback for images processed via vite-imagetools
declare module '*.png?format=webp' {
  const src: string
  export default src
}

declare module '*.jpg?format=webp' {
  const src: string
  export default src
}

declare module '*.jpeg?format=webp' {
  const src: string
  export default src
}

declare module '*?w=600&format=webp' {
  const src: string
  export default src
}

declare module '*?w=300;600&format=webp&as=srcset' {
  const src: string
  export default src
}

declare module '*?w=1600&format=webp' {
  const src: string
  export default src
}

declare module '*?w=640;1024;1600&format=webp&as=srcset' {
  const src: string
  export default src
}

declare module '*?w=400&format=webp' {
  const src: string
  export default src
}
