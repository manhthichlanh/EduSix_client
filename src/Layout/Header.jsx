import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from "../components/button/Button"
import Search from "../components/commom/icons/Search"
const navigation = [
  { name: 'Trang chủ', href: '#', current: true },
  { name: 'Khóa học', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Giới thiệu', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-0">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#ff6636] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'text-orange-500'
                            : 'text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div class="mx-auto max-w-md">
                  <form action="" class="relative mx-auto w-max">
                    <input type="search"
                      class="peer cursor-pointer relative z-10 h-10 w-10 rounded-full border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-gray-500 focus:pl-16 focus:pr-4" />
                    <Search
                      width={24}
                      height={24}
                      className="absolute inset-y-0 my-auto mx-[-1] h-6 w-10 border-r border-transparent stroke-gray-500 px-2.5 peer-focus:border-gray-500 peer-focus:stroke-gray-500"
                    ></Search>
                  </form>
                </div>
                <Button
                  text={"Đăng ký"}
                  Class={" text-gray-500 px-6 py-2 ml-3 rounded text-sm font-medium leading-6 hover:text-[#808080] hover:bg-gray-100"}
                ></Button>
                <Button
                  text={"Đăng nhập"}
                  Class={"bg-[#ff6636] text-white px-6 py-2 ml-3 rounded text-sm font-medium leading-6  hover:text-[#ff6636] hover:bg-[#FFEEE8]"}
                ></Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#ff6636] text-white' : 'text-gray-400 hover:bg-[#FFEEE8] hover:text-[#ff6636]',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
