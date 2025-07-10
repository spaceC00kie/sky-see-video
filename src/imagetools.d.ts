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

declare module '*?width=600&format=webp' {
  const src: string
  export default src
}

declare module '*?width=300;600&format=webp&as=srcset' {
  const src: string
  export default src
}

declare module '*?width=1600&format=webp' {
  const src: string
  export default src
}

declare module '*?width=640;1024;1600&format=webp&as=srcset' {
  const src: string
  export default src
}

declare module '*?width=400&format=webp' {
  const src: string
  export default src
}
