import { socials } from '@/constants'

import { Section } from './Section'

export function Footer() {
  return (
    <Section crosses className="!px-0 !py-10">
      <div
        className="container flex items-center justify-center gap-10 max-sm:flex-col
          sm:justify-between"
      >
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()} All right reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {socials.map((item) => (
            <a
              href={item.url}
              target="__blank"
              key={item.id}
              className="flex size-10 items-center justify-center rounded-full bg-n-7 transition-colors
                hover:bg-n-6"
            >
              <img src={item.iconUrl} alt={item.title} width={16} height={16} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  )
}
