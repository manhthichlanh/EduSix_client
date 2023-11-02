import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import { NavLink, Link } from "react-router-dom";
import Button from "../components/button/Button";
import Search from "../components/commom/icons/Search";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [menuItems, setMenuItems] = useState([
    { name: "Trang chủ", href: "/", current: true },
    { name: "Khóa học", href: "/course", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "Giới thiệu", href: "/about", current: false },
  ]);

  const handleMenuItemClick = (index) => {
    const updatedMenuItems = menuItems.map((item, idx) => ({
      ...item,
      current: idx === index,
    }));
    setMenuItems(updatedMenuItems);
  };
  // Menu khi chưa đăng nhập
  const renderLoggedOutMenu = (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-8 md:mx-16 lg:mx-20">
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
                      {menuItems.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "text-orange-500"
                              : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => handleMenuItemClick(index)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative text-gray-600 hidden max-w-md mx-auto md:block sm:block">
                    <input type="search" name="serch" placeholder="Tìm kiếm khóa học" className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none" />
                    <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-3">
                      <Search
                        width={20}
                        height={20}
                      ></Search>
                    </button>
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
                {menuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-orange-500"
                        : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative text-gray-600 mx-auto w-max sm:hidden pt-3 lg:pt-0 md:pt-0 sm:pt-3">
                  <input type="search" name="serch" placeholder="Tìm kiếm khóa học" className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none" />
                  <button type="submit" class="absolute right-0 top-0 mt-2.5 mr-3 pt-3 lg:pt-0 md:pt-0 sm:pt-3">
                    <Search
                      width={20}
                      height={20}
                    ></Search>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );

  // Menu khi đã đăng nhập
  const renderLoggedInMenu = (
    <>
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-8 md:mx-16 lg:mx-20">
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
                      {menuItems.map((item, index) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "text-orange-500"
                              : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                          onClick={() => handleMenuItemClick(index)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative text-gray-600 hidden max-w-md mx-auto md:block sm:block">
                    <input type="search" name="serch" placeholder="Tìm kiếm khóa học" className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none" />
                    <button type="submit" class="absolute right-0 top-0 mt-2.5 mr-3">
                      <Search
                        width={20}
                        height={20}
                      ></Search>
                    </button>
                  </div>

                  <NavLink to="#">
                    <p className="text-[14px] text-[#808080] font-medium">Khóa học của tôi</p>
                  </NavLink>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/396713512_10219146513253658_3716546754186561634_n.jpg?stp=dst-jpg_p720x720&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bsRdlMjeUMgAX8y2Wk8&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCgrgHMvhnZFdo8-AFjE6Iy8W8tb3XBkQBtRIeEjunYiA&oe=6546FAA1"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Trang cá nhân
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Viết Blog
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                            >
                              Đăng xuất
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="flex justify-center py-2">
                  <img className="w-auto h-8" src="/images/logo.png" alt="Logo" />
                </div>
                {menuItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "text-orange-500"
                        : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                    onClick={() => handleMenuItemClick(index)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="relative text-gray-600 mx-auto w-max sm:hidden pt-3 lg:pt-0 md:pt-0 sm:pt-3">
                  <input type="search" name="serch" placeholder="Tìm kiếm khóa học" className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none" />
                  <button type="submit" className="absolute right-0 top-0 mt-2.5 mr-3 pt-3 lg:pt-0 md:pt-0 sm:pt-3">
                    <Search
                      width={20}
                      height={20}
                    ></Search>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
  return (

    <>
      {isLoggedIn ? renderLoggedInMenu : renderLoggedOutMenu}
    </>
  );
}