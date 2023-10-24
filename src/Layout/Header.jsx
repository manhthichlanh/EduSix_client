// import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Button from "../components/button/Button";
import Search from "../components/commom/icons/Search";
const navigation = [
  { name: "Trang chủ", href: "#", current: true },
  { name: "Khóa học", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Giới thiệu", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="max-w-screen-xl px-2 mx-auto sm:px-6 lg:px-0">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#ff6636] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="justify-center hidden lg:flex lg:items-center">
                  <img
                    className="w-auto h-8"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="hidden pl-4 lg:block">
                  <div className="flex gap-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-orange-500"
                            : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden max-w-md mx-auto md:block sm:block">
                  <form action="" className="relative mx-auto w-max">
                    <input
                      type="search"
                      className="relative z-10 w-10 h-10 text-black bg-transparent border rounded-full outline-none cursor-pointer peer focus:w-full focus:cursor-text focus:border-gray-500 focus:pl-16 focus:pr-4"
                    />
                    <Search
                      width={24}
                      height={24}
                      className="absolute w-10 h-6 px-2 my-auto border-r border-transparent inset-y-2 stroke-gray-500 peer-focus:border-gray-500 peer-focus:stroke-gray-500"
                    ></Search>
                  </form>
                </div>
                <Button
                  text={"Đăng ký"}
                  Class={
                    " text-gray-500 px-6 py-2 ml-3 rounded text-sm font-medium leading-6 hover:text-[#808080] hover:bg-gray-100"
                  }
                ></Button>
                <Button
                  text={"Đăng nhập"}
                  Class={
                    "bg-[#ff6636] text-white px-6 py-2 ml-3 rounded text-sm font-medium leading-6  hover:text-[#ff6636] hover:bg-[#FFEEE8]"
                  }
                ></Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="flex justify-center py-2">
                <img className="w-auto h-8" src="/images/logo.png" alt="Logo" />
              </div>
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-[#ff6636] text-white"
                      : "text-gray-400 hover:bg-[#FFEEE8] hover:text-[#ff6636]",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              <form action="" className="relative mx-auto w-max sm:hidden">
                <input
                  type="search"
                  className="relative z-10 w-10 h-10 pl-10 bg-transparent border rounded-full outline-none cursor-pointer peer focus:w-full focus:cursor-text focus:border-gray-500 focus:pl-16 focus:pr-4"
                />
                <Search
                  width={24}
                  height={24}
                  className="absolute inset-y-0 my-auto mx-[-1] h-6 w-10 border-r border-transparent stroke-gray-500 px-2.5 peer-focus:border-gray-500 peer-focus:stroke-gray-500"
                ></Search>
              </form>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
