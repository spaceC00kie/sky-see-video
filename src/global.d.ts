import "react"
declare module "react" {
  interface IframeHTMLAttributes<T> {
    fetchpriority?: "high" | "low" | "auto"
  }
}
