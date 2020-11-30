import React from "react"
import { ImageProps } from "./shared"

export interface WebImageProps extends ImageProps {
  onLoad?: (event: any) => void
  alt?: string
  imgRef?: any
  src: string
}

export const Image: React.FC<WebImageProps> = ({ src, alt, imgRef, onLoad, ...props }) => {
  const href = window?.location?.href
  const isStaging = href?.includes("https://staging.") || href?.includes("http://localhost:3000")

  let prefix
  if (src.includes("seasons-s3.imgix.net") || src.includes("seasons-s3-staging.imgix.net")) {
    prefix = ""
  } else if (isStaging) {
    prefix = "https://flare-web-staging.imgix.net"
  } else {
    prefix = "https://flare-web.imgix.net"
  }

  return (
    <picture {...props}>
      <source type="image/webp" srcSet={prefix + src + "&fm=webp"} />
      <source type="image/jpeg" srcSet={prefix + src + "&fm=jpg"} />
      <img src={prefix + src + "&fm=jpg"} ref={imgRef} alt={alt} onLoad={onLoad} />
    </picture>
  )
}
