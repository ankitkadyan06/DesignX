import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import  Logo from './assets/images/DesignXlogo.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Pricing', to: '#' },
  { name: 'Events', to: '#' },
  { name: 'About', to: '/Aboutus' },
  { name: 'Blog', to: '/Blog' },
]

 export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 border-[1px] border-solid h-[70px] border-[#C6C6C6] bg-white">
        <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="#" className="-m-1.5 p-1.5 focus:outline-none ml-[2%]">
              <img src={Logo}
                className="h-8 w-auto"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="font-inter no-underline text-base leading-6 text-[#000]">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 gap-x-12 lg:justify-end mr-[0%] xl:mr-[8%]">
            <Link to="#" className="leading-6 text-[#000] no-underline text-base mt-[3%] xl:mt-[1.7%]">
              Support
            </Link>
            <Link to="#" className="text-base leading-6 text-[#000] no-underline mt-[3%] xl:mt-[1.7%]">
              Login
            </Link>
            <button to="#" className="text-sm leading-6 text-white no-underlines font-inter bg-[#0027D6] rounded-[64px] py-[10px] px-[10px]">
              Demo
            </button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt=""
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 no-underline block rounded-lg px-3 py-2 text-base font-inter leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg font-inter px-3 py-2.5 text-base no-underline leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Support
                  </Link>
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg font-inter px-3 py-2.5 text-base no-underline leading-7 text-[#000] hover:bg-gray-50"
                  >
                    Login
                  </Link>
                  <button
                    to="#"
                    className="-mx-3 block rounded-[64px] font-inter px-3 py-2.5 text-base no-underline leading-7 text-white bg-[#0027D6] hover:bg-gray-50"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      
    </div>
  )
}

