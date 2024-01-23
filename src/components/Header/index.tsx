"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "../../constants/menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center bg-white shadow-nav dark:bg-dark ${
          sticky
            ? "fixed z-[9999] border-b border-stroke  backdrop-blur-[5px] transition dark:border-dark-3/20 "
            : "absolute"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4">
              <Link href="/" className={`navbar-logo block w-full py-2 `}>
                <Image
                  src={"/images/logo/logo.svg"}
                  loading="lazy"
                  alt="logo"
                  width={140}
                  height={30}
                  className="header-logo h-auto w-auto dark:hidden"
                />
                <Image
                  src={"/images/logo/logo-white.svg"}
                  loading="lazy"
                  alt="logo"
                  width={140}
                  height={30}
                  className="header-logo hidden h-auto w-auto dark:block"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? " top-[7px] rotate-45" : " "
                    } !bg-dark dark:!bg-white`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] transition-all duration-300 ${
                      navbarOpen ? "opacity-0 " : " "
                    } !bg-dark dark:!bg-white`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] !bg-dark transition-all duration-300 dark:!bg-white ${
                      navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar absolute right-0 z-30 w-full border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark-2 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 lg:dark:bg-transparent ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:ml-8 lg:flex lg:gap-x-8 xl:ml-14 xl:gap-x-12">
                    {menuData.map((menuItem, index) =>
                      menuItem.path ? (
                        <li key={index} className="group relative">
                          <Link
                            scroll={false}
                            href={menuItem.path}
                            className={`ud-menu-scroll flex py-2 text-base font-bold text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6 ${
                              pathUrl === menuItem?.path &&
                              sticky &&
                              "!text-primary"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                        </li>
                      ) : (
                        <li
                          className={`submenu-item group ${
                            !menuItem.megamenu ? "relative" : ""
                          }`}
                          key={index}
                        >
                          <Link
                            href={menuItem?.url || pathUrl}
                            onMouseEnter={() => handleSubmenu(index)}
                            className={`ud-menu-scroll flex items-center justify-between py-2 text-base font-bold text-dark group-hover:text-primary dark:text-white dark:group-hover:text-primary lg:inline-flex lg:px-0 lg:py-6`}
                          >
                            {menuItem.title}

                            <span className="pl-1">
                              <svg
                                className={`duration-300 group-hover:rotate-180`}
                                width="16"
                                height="17"
                                viewBox="0 0 16 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M8.00039 11.9C7.85039 11.9 7.72539 11.85 7.60039 11.75L1.85039 6.10005C1.62539 5.87505 1.62539 5.52505 1.85039 5.30005C2.07539 5.07505 2.42539 5.07505 2.65039 5.30005L8.00039 10.525L13.3504 5.25005C13.5754 5.02505 13.9254 5.02505 14.1504 5.25005C14.3754 5.47505 14.3754 5.82505 14.1504 6.05005L8.40039 11.7C8.27539 11.825 8.15039 11.9 8.00039 11.9Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </Link>

                          <div
                            className={`submenu relative left-0 top-full w-full rounded-sm border-t-4 border-primary bg-white p-4 px-0 transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark-2 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:px-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index
                                ? "lg:!-left-[25px]"
                                : "hidden"
                            } ${
                              menuItem.megamenu
                                ? "grid-cols-4 flex-wrap gap-8 lg:!grid lg:!w-full"
                                : ""
                            }`}
                          >
                            {menuItem.submenu.map((submenuItem: any) => (
                              <Link
                                href={submenuItem.path}
                                key={submenuItem.id}
                                className={`flex flex-col gap-2 rounded px-4 py-[10px] text-sm font-bold hover:bg-black/10 ${
                                  pathUrl === submenuItem.path
                                    ? "text-primary"
                                    : "text-body-color hover:text-primary dark:text-dark-6 dark:hover:text-primary"
                                }`}
                              >
                                {submenuItem.title}
                                {submenuItem.desc && (
                                  <p className="text-xs font-normal">
                                    {submenuItem.desc}
                                  </p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </nav>
              </div>
              <div className="hidden items-center justify-end pr-16 sm:flex lg:pr-0">
                <div className="flex items-center gap-4">
                  <Link
                    href="/contact"
                    className="rounded bg-primary px-4 py-2 uppercase text-white transition-all duration-300 ease-in-out hover:bg-primary/90"
                  >
                    Contact Us
                  </Link>
                  {/* theme toggler */}
                  <ThemeToggler />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
