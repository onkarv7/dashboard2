import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, } from "@heroicons/react/24/outline";
import Sidebar from "./Sidebar";
import { Slider } from "@mui/material";
import { HiArrowNarrowUp , HiMenu} from "react-icons/hi";


const user = {
  name: "Maman Ketoprak",
  email: "maman@gmail.com",
  imageUrl: "../hacker.png",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

const products = [
  { name: "Oblong T-Shirt", subname: "600 of 800 Items" },
  { name: "Gundam 90'Editions", subname: "500 of 800 Items" },
  { name: "Rounded Hat", subname: "455 of 800 Items" },
  { name: "Indomie Goreng", subname: "400 of 800 Items" },
  { name: "Remote Control Car Racing", subname: "200 of 800 Items" },
];
const invoice = [
  {
    name: "Order ID",
    order_id: "RA0449",
    cutomer: "Udin Wayang",
    item: "Nasi Padang",
    Status: "Delivered",
    color: "",
    action: "Detail",
   
  },
  {
    name: "customer",
    order_id: "RA5324",
    cutomer: "Jaenab Bajigur",
    item: " Gundam 90' Edition",
    Status: "Shipping",
    color: "",
    action: "Detail",
  },
  {
    name: "Item",
    order_id: "RA8568",
    cutomer: "Rivat Mahesa",
    item: "Oblong T-Shirt ",
    Status: "Pending",
    color: "Pending",
    action: "Detail",
  },
  {
    name: "Status",
    order_id: "RA1453",
    cutomer: "Indri Junanda",
    item: " Hat Rounded",
    Status: "Processing",
    color: "Processing",
    action: "Detail",
  },
  {
    name: "Action",
    order_id: "RA1998",
    cutomer: "Udin Cilok",
    item: " Baby Powder",
    Status: "Delivered",
    color: "Delivered",
    action: "Detail",
  },
];

const data = [
  {
    name: "EARNING( monthly )",
    price: " $40,000",
    percentage: " 3.48%",
    content: "Since last month",
    src: "./brief",
  },
  {
    name: "SALES",
    price: "650",
    percentage: " 12%",
    content: "Since last years",
  },
  {
    name: "NEW USER",
    price: "366",
    percentage: " 20.04%",
    content: "Since last month",
  },
  {
    name: "PENDING REQUESTS",
    price: " 18",
    percentage: " 1.10%",
    content: "Since yesterday",
  },
];

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <div className="flex">
      <div className="w-1/6 min-h-screen  bg-white">
        <Sidebar />
      </div>
      <div className="min-h-screen w-5/6 bg-slate-200">
        <Disclosure as="nav" className="bg-indigo-400">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                     
                                  <HiMenu  className="h-8 w-8"></HiMenu>
                    </div>
                    <div className="hidden md:block"></div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="rounded-full bg-white p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="sr-only">View notifications</span>
                        <img
                          src="./notofication.jpeg"
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 ml-1 gap-3">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                            <div> {user.name}</div>
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
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}

            <div
            // className="px-4 py-6 sm:px-0"
            >
              <div
                className="
            grid grid-cols-4 gap-4 mx-10


            "
              >
                {data.map((data) => {
                  return (
                    <div className="" key={data.name}>
                      <div className="bg-white p-3 rounded-xl border border-gray-50">
                        <div className="flex justify-between items-start">
                          <div className="flex flex-col">
                            <p className="text-xs text-gray-600 tracking-wide">
                              {data.name}
                            </p>
                            <h3 className="mt-1 text-lg text-blue-500 font-bold">
                              {data.price}
                            </h3>
                            <span className="mt-2 text-xs text-green-500">
                              <span>↑{data.percentage} </span>
                              <span className="mt-4 ml-2 text-xs text-gray-500">
                                {data.content}
                              </span>
                            </span>
                          </div>
                          <div className="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                            <img
                              src={data.img}
                              alt="icon"
                              className="w-auto h-8 md:h-6 xl:h-8 object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* <div className='bd-indigo-500'>{data.name}</div>
      <div>{data.price}</div>
      <span>{data.percentage}</span>
      <span>{data.content}</span> */}
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-5 gap-4 my-8 p-8	">
                <div className="col-span-2 bg-white">
                  <div className="flex flex-row justify-between p-3">
                    <h1 className="text-indigo-400">Products Sold</h1>

                    <h3 className="bg-indigo-400 p-1">Month</h3>
                  </div>

                  {products.map((product) => {
                    return (
                      <>
                        <div className="flex flex-row justify-between p-4">
                          {product.name}
                          <div>{product.subname}</div>
                        </div>
                      </>
                    );
                  })}
                  <div className="flex justify-center text-indigo-400 mt-10">
                    View More
                  </div>
                </div>
                <div className="col-span-3 bg-white">
                  <div className="flex flex-row justify-between p-7 ">
                    <div className="text-indigo-400">Invoice</div>

                    <div className="bg-red-500 p-1 text-black">View More</div>
                  </div>

                  {invoice.map((invoice) => {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                            textAlign: "start",
                          }}
                          className="p-7"
                        >
                          <div></div>

                          <ul class="divide-y-2 divide-gray-100 overflow-x-auto w-full">
                            <li class="py-3 flex justify-between text-sm text-gray-500 font-semibold">
                              <p class="px-4 font-semibold text-indigo-400">
                                {invoice.order_id}
                              </p>
                              <p class="px-4 text-gray-600">
                                {invoice.cutomer}
                              </p>
                              <p class="px-4 tracking-wider">{invoice.item}</p>
                              <p class="px-4 text-blue-600">{invoice.Status}{invoice.style}</p>
                              <p class="p-1 md:text-base bg-indigo-400 text-black flex items-center gap-2">
                                {invoice.action}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="w-4 h-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                  />
                                </svg>
                              </p>
                            </li>
                          </ul>

                          {/* <div className='items-start	text-indigo-400'>{invoice.order_id}</div>
       <div className='items-start		'>{invoice.cutomer}</div> 
       <div>{invoice.item}</div> 
       <div>{invoice.Status}</div>
       <div className='bg-indigo-400'>{invoice.action}</div> */}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </div>
  );
}
