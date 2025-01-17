import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { disablePageScroll, enablePageScroll } from 'scroll-lock'

import { brainwave } from '@/assets'
import { MenuSvg } from '@/assets/svg/MenuSvg'
import { navigation } from '@/constants'

import { Button } from './Button'
import { HamburgerMenu } from './design/Header'

export function Header() {
  const pathname = useLocation()

  const [openNavigation, setOpenNavigation] = useState(false)

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false)
      enablePageScroll()
    } else {
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick = () => {
    if (!openNavigation) return

    enablePageScroll()
    setOpenNavigation(false)
  }

  return (
    <div
      className={`fixed left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90
      lg:backdrop-blur-sm ${
        openNavigation ? 'bg-n-8' : 'bg-n-8/90 backdrop-blur-sm'
      }`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <a href="#hero" className="block w-[12rem] xl:mr-8">
          <img src={brainwave} alt="brainwave" width={190} height={40} />
        </a>
        <nav
          className={`fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex
          lg:bg-transparent ${openNavigation ? 'flex' : 'hidden'}`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`relative block px-6 py-6 font-code text-2xl uppercase leading-5 text-n-1
                transition-colors hover:text-color-1 md:py-8 lg:-mr-0.25 lg:text-xs
                lg:font-semibold lg:hover:text-n-1 xl:px-12 ${
                  item.url === pathname.hash
                    ? 'z-2 lg:text-n-1'
                    : 'lg:text-n-1/50'
                } ${item.onlyMobile ? 'lg:hidden' : ''}`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#sign-up"
          className="button mr-8 hidden text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>

        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  )
}
