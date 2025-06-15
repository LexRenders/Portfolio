import { useState } from "react";
import { NavLink } from "react-router-dom";

const activeNavLinkClasses =
    "block py-2 px-3 text-white bg-purple-700 rounded-sm text-center md:text-left md:bg-transparent md:p-0 md:text-purple-500";

const inactiveNavLinkClasses =
    "block py-2 px-3 rounded-sm text-center md:text-left md:hover:bg-transparent md:border-0 md:p-0 text-white md:hover:text-purple-500 hover:bg-gray-700 hover:text-white";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            <nav
                className="bg-indigo-950"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Portfolio Lex Renders
                        </span>
                    </div>

                    {/* Hamburger menu toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            {menuOpen ? (
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2 2l13 10M2 12L15 2"
                                />
                            ) : (
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            )}
                        </svg>
                    </button>

                    {/* Collapsible nav links */}
                    <div
                        className={`w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"
                            }`}
                        id="navbar-default"
                    >
                        <nav
                            style={{ backgroundColor: "transparent" }}
                            className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-indigo-950 dark:border-gray-700"
                        >
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeNavLinkClasses : inactiveNavLinkClasses
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about-me"
                                className={({ isActive }) =>
                                    isActive ? activeNavLinkClasses : inactiveNavLinkClasses
                                }
                            >
                                About me
                            </NavLink>
                            <NavLink
                                to="/internship"
                                className={({ isActive }) =>
                                    isActive ? activeNavLinkClasses : inactiveNavLinkClasses
                                }
                            >
                                Internship
                            </NavLink>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? activeNavLinkClasses : inactiveNavLinkClasses
                                }
                            >
                                Projects
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive ? activeNavLinkClasses : inactiveNavLinkClasses
                                }
                            >
                                Contact
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
