import { Fragment, useState, useEffect, useContext } from 'react';
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Button from "../components/button/Button";
import Search from "../components/commom/icons/Search";
import { useSearchCourse } from '../utils/searchApi';
import { serverEndpoint } from "../utils/http";
import { useUser } from '../utils/UserAPI';
import { useNotificationProvider } from '../utils/NotificationApi';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const { user, isLoading, handleLogout } = useUser();
  const {unreadCount} = useNotificationProvider();

  const { isLoading: isSearchLoading, searchCourse } = useSearchCourse();

  const [menuItems, setMenuItems] = useState([
    { name: "Trang chủ", href: "/", current: true },
    { name: "Khóa học", href: "/course", current: false },
    { name: "Blog", href: "/blog", current: false },
    { name: "Giới thiệu", href: "/about", current: false },
  ]);

  const handleMenuItemClick = (index) => {
    const updatedMenuItems = menuItems.map((item, id) => ({
      ...item,
      current: id === index,
    }));
    setMenuItems(updatedMenuItems);
  };
  useEffect(() => {
    // Update active menu item based on the current location
    const updatedMenuItems = menuItems.map((item) => ({
      ...item,
      current: item.href === location.pathname,
    }));
    setMenuItems(updatedMenuItems);
  }, [location.pathname]);





  const handleSearchChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      // Call the searchCourse function from the custom hook and use navigate
      await searchCourse(searchKeyword, navigate);
      // The searchCourse function will update the URL and trigger a reload
    } catch (error) {
      console.error('Error:', error);
      // Handle the error as needed
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchSubmit();
    }
  };


  const renderUserContent = () => {
    if (user && user.userDetails) {
      const users = user.userDetails;
      // Access user_id directly from the user object

      const avatarUrl = users && users.avatar
      ? users.avatar.startsWith("https")
        ? users.avatar
        : `${serverEndpoint}user/avatar/${users.avatar}`
      : "https://cdn.lazi.vn/storage/uploads/users/avatar/1586848529_anh-dai-dien-avatar-dep-facebook.jpg";


      return (
        <>
          <NavLink to="/account/course">
            <p className="text-[14px] text-[#808080] font-medium">
              Khóa học của tôi
            </p>
          </NavLink>
          <Menu as="div" className="relative ml-3">
            <div className=''>
              <Menu.Button className="relative inline-flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 hover:ring-offset-orange-500 w-8 h-8">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="min-w-full h-full rounded-full p-0.5"
                  src={avatarUrl}
                  alt=""
                />
               { unreadCount ? (
                <span className='bg-red-500 px-1.5 pb-0.5 text-white rounded-3xl text-xs'>{unreadCount > 99 ? '99+' : unreadCount}</span>
                ) : (
                  <p></p>
                )}
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
              <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700 bg-gray-100"
                      )}
                    >
                      <div className='flex gap-3 mb-3 '>
                        <div className='w-11 h-11'>
                          <img
                            className="w-full h-full rounded-full"
                            src={ avatarUrl }
                            alt=""
                          />
                        </div>

                        <div className='w-36'>
                          <h2 className='text-base font-semibold text-orange-600 line-clamp-1'>{users.fullname}</h2>
                          <p className='text-xs truncate'>{users.email}</p>
                        </div>

                      </div>
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/account/profile"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Thông tin cá nhân
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="/account/notification"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Thông báo của tôi
                      { unreadCount ? (
                      <span className='bg-red-500 px-1.5  pb-0.5 ml-3 text-white rounded-3xl text-xs'>{unreadCount > 99 ? '99+' : unreadCount}</span>
                      ) : (
                        <p></p>
                      )}
                      </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to="#"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Viết Blog
                    </NavLink>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      to=""
                      onClick={handleLogout}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Đăng xuất
                    </NavLink>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/register">
            <Button
              text={"Đăng ký"}
              Class={
                " text-gray-500 px-6 py-2 ml-3 rounded text-sm font-medium leading-6 hover:text-[#808080] hover:bg-gray-100"
              }
            ></Button>
          </NavLink>
          <NavLink to="/login">
            <Button

              text={"Đăng nhập"}
              Class={
                "bg-[#ff6636] text-white px-6 py-2 ml-3 rounded text-sm font-medium leading-6  hover:text-[#ff6636] hover:bg-[#FFEEE8]"
              }
            ></Button>
          </NavLink>
        </>
      );
    }
  };


  return (
    <>

      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="mx-8 md:mx-16 lg:mx-20">
              <div className="relative flex items-center justify-between h-20">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
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
                      {isLoggedIn && user ? (
                        menuItems.map((item, index) => (
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
                        ))
                      ) : (
                        <>
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
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center gap-4 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="relative text-gray-600 hidden max-w-md mx-auto md:block sm:block">


                    <input
                      type="text"
                      name="search"
                      value={searchKeyword}
                      onChange={handleSearchChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Tìm kiếm khóa học"
                      className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none"
                    />
                    <button type="button" onClick={handleSearchSubmit} className="absolute right-0 top-0 mt-2.5 mr-3">
                      <Search width={20} height={20}></Search>
                    </button>



                  </div>
                  {renderUserContent()}
                </div>
              </div>
            </div>
            <Disclosure.Panel className="lg:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="flex justify-center py-2">
                  <img
                    className="w-auto h-8"
                    src="/images/logo.png"
                    alt="Logo"
                  />
                </div>
                {isLoggedIn && user ? (
                  menuItems.map((item, index) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "text-orange-500"
                          : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-transparent",
                        "rounded-md px-3 py-2 text-sm font-medium block text-center" // Updated styles
                      )}
                      aria-current={item.current ? "page" : undefined}
                      onClick={() => handleMenuItemClick(index)}
                    >
                      {item.name}
                    </Link>
                  ))
                ) : (
                  <div>
                    {menuItems.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "text-orange-500"
                            : "text-[#333333] hover:text-orange-500 font-medium text-sm hover:bg-orange-100",
                          "rounded-md px-3 py-2 text-sm font-medium block text-center bg-orange-50" // Updated styles
                        )}
                        aria-current={item.current ? "page" : undefined}
                        onClick={() => handleMenuItemClick(index)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
                <div className="relative text-gray-600 mx-auto w-max sm:hidden mt-3 lg:pt-0 md:pt-0 sm:pt-3">
                  <input
                    type="text"
                    name="search"
                    value={searchKeyword}
                    onChange={handleSearchChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Tìm kiếm khóa học"
                    className="bg-white h-10 px-4 pr-40 rounded-full border border-[#8d8d8d] text-sm focus:outline-none"
                  />
                  <button type="button" onClick={handleSearchSubmit} className="absolute right-0 top-0 py-2.5 mr-3">
                    <Search width={20} height={20}></Search>
                  </button>
                </div>
              </div>
            </Disclosure.Panel>

          </>
        )}
      </Disclosure>
    </>
  );
}
