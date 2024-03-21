import Image from "next/image";
import { initFlowbite } from "flowbite";
import { useEffect } from "react";
export default function Navbar() {
  useEffect(() => {
    initFlowbite;
  }, []);
  return (
    <>
      {/* Navbar Menu */}
      <nav className="relative px-4 lg:px-16 py-4 lg:py-8 flex justify-between items-center bg-white">
        <a className="" href="#">
          <Image src="/logo.png" alt="Logo" width={120} height={24} priority />
        </a>
        <div className="lg:hidden">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 bg-white absolute left-0 w-full rounded-none z-50 border">
              <li>
                <button
                  id="dropdownMenuFirstMobile"
                  data-dropdown-toggle="dropdownMenuFirstMobileLink"
                  className="text-black pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                >
                  Tentang Kami
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownMenuFirstMobileLink"
                  className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                >
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownMenuSecondMobile"
                  data-dropdown-toggle="dropdownMenuSecondMobileLink"
                  className="text-orangePrimary pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
                >
                  Produk & Layanan
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  id="dropdownMenuSecondMobileLink"
                  className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
                >
                  <ul className="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                      >
                        Link 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#" className="block py-2 px-3">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3">
                  FAQ
                </a>
              </li>
              <li>
                <div className="px-3">
                  <a
                    className="block lg:inline-block py-2 px-6 text-black text-center"
                    href="#"
                  >
                    Daftar
                  </a>
                </div>
              </li>
              <li>
                <div className="px-3 mt-2">
                  <a
                    className="block lg:inline-block py-2 px-6 bg-orangePrimary text-white rounded-sm text-center"
                    href="#"
                  >
                    Masuk
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-10">
          <li>
            <button
              id="dropdownMenuFirst"
              data-dropdown-toggle="dropdownMenuFirstLink"
              className="text-black pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            >
              Tentang Kami
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownMenuFirstLink"
              className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
            >
              <ul className="py-1" aria-labelledby="dropdownLargeButton">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <button
              id="dropdownMenuSecond"
              data-dropdown-toggle="dropdownMenuSecondLink"
              className="text-orangePrimary pl-3 pr-4 py-2 md:p-0 font-medium flex items-center justify-between w-full md:w-auto"
            >
              Produk & Layanan
              <svg
                className="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <div
              id="dropdownMenuSecondLink"
              className="hidden bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44"
            >
              <ul className="py-1" aria-labelledby="dropdownLargeButton">
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                  >
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a className="text-black font-medium" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="text-black font-medium" href="#">
              FAQ
            </a>
          </li>
        </ul>
        <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 text-black font-medium transition"
          href="#"
        >
          Daftar
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-orangePrimary text-white font-medium rounded-md transition"
          href="#"
        >
          Masuk
        </a>
      </nav>
      {/* End Navbar Menu */}

      {/* Breadcrumb Menu */}
      <nav
        className="flex px-4 lg:px-16 py-4 lg:py-6 bg-white"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <a
              href="#"
              className="inline-flex items-center text-sm font-medium text-orangePrimary"
            >
              Home
            </a>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-grayThin mx-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a
                href="#"
                className="ms-1 text-sm font-medium text-orangePrimary"
              >
                Layanan Desain
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-grayThin mx-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-grayPrimary">
                Omah Apik 3
              </span>
            </div>
          </li>
        </ol>
      </nav>
      {/* End Breadcrumb Menu */}
    </>
  );
}
