import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export default function Skeleton({
  className,
  ...props
}: ComponentProps<'div'>) {
  const classes = twMerge('bg-zinc-50/10 animate-pulse rounded-md', className)

  return <div className={classes} {...props} />
}
