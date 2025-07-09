import React from 'react'

export interface PictureData {
  sources: Record<string, string>
  img: {
    src: string
    w: number
    h: number
  }
}

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  data: PictureData
}

export const Picture: React.FC<Props> = ({ data, alt = '', ...imgProps }) => (
  <picture>
    {Object.entries(data.sources).map(([format, srcset]) => (
      <source key={format} srcSet={srcset} type={`image/${format}`} />
    ))}
    <img src={data.img.src} width={data.img.w} height={data.img.h} alt={alt} {...imgProps} />
  </picture>
)
