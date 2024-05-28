import { ReactNode } from 'react'

import { SectionSvg } from '@/assets/svg/SectionSvg'

interface SectionProps {
  id?: string
  className?: string
  crosses?: boolean
  crossesOffset?: string
  customPaddings?: boolean
  children: ReactNode
}

export function Section({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: SectionProps) {
  return (
    <div
      id={id}
      className={`relative ${
        customPaddings ??
        `py-10 lg:py-16 xl:py-20 ${crosses ? 'lg:py-32 xl:py-40' : ''}`
      } ${className ?? ''}`}
    >
      {children}

      <div
        className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1
          md:block lg:left-7.5 xl:left-10"
      />
      <div
        className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1
          md:block lg:right-7.5 xl:right-10"
      />

      {crosses && (
        <>
          <div
            className={`pointer-events-none absolute left-7.5 right-10 top-0 hidden h-0.25 bg-stroke-1
            lg:block xl:left-10 ${crossesOffset ?? ''}`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  )
}
