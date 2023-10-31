// /* eslint-disable react/no-unescaped-entities */
import { Disclosure } from "@headlessui/react";
import ChevronUp from "../commom/icons/ChevronUp";
import classNames from "classnames";
import PlayCircleFill from "../commom/icons/PlayCircleFill";
import Vector from "../commom/icons/Vector";
import Pause from "../commom/icons/Pause";
import Lock from "../commom/icons/Lock";

export default function Dropdown() {
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                "flex items-center justify-between w-full px-4 py-2 bg-[#F5F5F5] border-b",
                "text-black text-sm font-medium",
                "focus:outline-none",
                "hover:bg-slate-200"
              )}
            >
              <div className="flex flex-col">
                <span>1. Vũ Huy Đức?</span>
                <div
                  className={classNames(
                    "flex items-center gap-1",
                    "text-black text-opacity-60 text-xs"
                  )}
                >
                  <span>8/25</span> | <span> 47:22</span>
                </div>
              </div>
              <ChevronUp
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      1. Em của ngày hôm qua
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:29
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm nay
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                "flex items-center justify-between w-full px-4 py-2 bg-[#F5F5F5] border-b",
                "text-black text-sm font-medium",
                "focus:outline-none",
                "hover:bg-slate-200"
              )}
            >
              <div className="flex flex-col">
                <span>2. Ngô Thủy Đan</span>
                <div
                  className={classNames(
                    "flex items-center gap-1",
                    "text-black text-opacity-60 text-xs"
                  )}
                >
                  <span>1/8</span> | <span> 47:22</span>
                </div>
              </div>
              <ChevronUp
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      1. Em của ngày hôm kia
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={classNames(
                "flex items-center justify-between w-full px-4 py-2 bg-[#F5F5F5] border-b",
                "text-black text-sm font-medium",
                "focus:outline-none",
                "hover:bg-slate-200"
              )}
            >
              <div className="flex flex-col">
                <span>2. Ngô Thủy Đan</span>
                <div
                  className={classNames(
                    "flex items-center gap-1",
                    "text-black text-opacity-60 text-xs"
                  )}
                >
                  <span>1/8</span> | <span> 47:22</span>
                </div>
              </div>
              <ChevronUp
                className={`${open ? "rotate-180 transform" : ""} h-5 w-5`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      1. Em của ngày hôm kia
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
            <Disclosure.Panel className="bg-[#F5F5F5] hover:bg-slate-200">
              <button className="w-full px-4 py-2 focus:bg-[#FCDCD3] relative group">
                <div className="flex items-center justify-between gap-1">
                  <div className="flex flex-col">
                    <p className="text-sm font-medium text-black">
                      2. Em của ngày hôm kia kìa
                    </p>
                    <div className="flex items-center justify-start gap-1">
                      <PlayCircleFill
                        width={12}
                        height={12}
                        fill="#808080"
                        className="group-focus:hidden"
                      />
                      <Pause
                        width={12}
                        height={12}
                        fill="#FF6636"
                        className="hidden group-focus:block"
                      />
                      <p className="text-xs font-normal text-black text-opacity-60">
                        19:20
                      </p>
                    </div>
                  </div>
                  <Lock
                    width={16}
                    height={16}
                    className="group-focus:hidden"
                  ></Lock>
                  <Vector
                    width={16}
                    height={16}
                    fill="#1F8354"
                    className="hidden group-focus:block"
                  ></Vector>
                </div>
              </button>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
