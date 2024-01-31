import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Benifits',
    href: '#',
  },
  {
    name: 'Templates',
    href: '#',
  },
  {
    name: 'About us',
    href: '#',
  },
  {
    name: 'Pricing',
    href: '#',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div style={{
      height: '5%'
    }} className="relative w-full bg-white  font-['Poppins'] pt-4 pr-2 pl-2">
      <div className="mx-auto flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center">
        <img className='h-[20px] w-[20px]' src="Images/arrows/arrow3.png" alt="arrow" />
          <span className="font-bold text-green-700">Switch.blabla</span>
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-regular text-[#4f776e] hover:text-teal-800 hover:border-b-2 hover:border-teal-800 transition duration-300 ease-in-out px-2"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
          <button
            type="button"
            className="px-3 py-2 text-white shadow-sm hover:bg-[#21524F]/90 text-[15px] bg-teal-800 rounded-full h-[50px] w-[180px] transition duration-300 ease-in-out"
          >
            Create CV now
          </button>
        </div>

        <div className="lg:hidden"> 
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                  <span className="font-bold text-green-700">Switch.blabla</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-[#4f776e] hover:text-teal-800 hover:border-b-2 hover:border-teal-800 transition duration-300 ease-in-out">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full px-3 py-2 text-white shadow-sm hover:bg-[#21524F]/90  bg-teal-800 rounded-md transition duration-300 ease-in-out"
                >
                  Create CV now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
