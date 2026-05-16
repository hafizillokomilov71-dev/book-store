import { useEffect, useRef, useState } from "react";
import Icon from "./ui/icon";
import { Link } from "react-router-dom";
import { useUserStore } from "../store/user.store";
import { removeItem } from "../utils/localstorege";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userStore = useUserStore();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const onLogout = () => {
    userStore.logOut();
    removeItem("token");
    window.location.reload();
  };

  return (
    <header className="pt-3.5">
      <div className="container">
        <div className="flex items-center gap-x-6">
          <Link to="/" className="flex items-center gap-2">
            <Icon.leaf />
            <Icon.logo />
          </Link>
          <form className="max-w-95 w-full">
            <label className="bg-[#FBF7F0] p-[12px_20px] rounded-[40px] flex items-center gap-3 w-full shadow-md">
              <Icon.searchIcon />
              <input
                type="text"
                className="w-full text-base text-[#1F2F28] placeholder:text-[#7A7A7A] bg-transparent focus:outline-0"
                placeholder="Search books, authors, genres..."
              />
            </label>
          </form>
          <nav>
            <ul className="flex gap-x-6 text-sm font-medium">
              <li>
                <Link
                  to={"/books"}
                  className="text-[#1F2F28] hover:text-[#2A3D33] transition-colors"
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to={"/authors"}
                  className="text-[#1F2F28] hover:text-[#2A3D33] transition-colors"
                >
                  Authors
                </Link>
              </li>
              <li>
                <Link
                  to={"/favorites"}
                  className="text-[#1F2F28] hover:text-[#2A3D33] transition-colors"
                >
                  Favorites
                </Link>
              </li>
            </ul>
          </nav>
          {userStore.user ? (
            <div className="flex items-center gap-x-5 ml-auto">
              <button type="button" className="relative cursor-pointer">
                <Icon.cart />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF3B30]"></span>
              </button>
              <button type="button" className="relative cursor-pointer">
                <Icon.bell />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#FF3B30]"></span>
              </button>
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="flex items-center gap-x-2 bg-[#FBF7F0] rounded-full p-[6px_16px_6px_6px] cursor-pointer"
                >
                  <span className="w-9 h-9 rounded-full bg-[#D9E5DC] flex items-center justify-center text-[#1F2F28] font-semibold text-base">
                    {userStore.user?.fullName[0]}
                  </span>
                  <span className="text-base text-[#1F2F28]">
                    {userStore.user?.fullName}
                  </span>
                  <span
                    className={`transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <Icon.chevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-lg border border-[#EFE7DA] p-2 z-50">
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-[#1F2F28] hover:bg-[#FBF7F0] rounded-xl"
                    >
                      Profile
                    </a>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-[#1F2F28] hover:bg-[#FBF7F0] rounded-xl"
                    >
                      My Library
                    </a>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm text-[#1F2F28] hover:bg-[#FBF7F0] rounded-xl"
                    >
                      Settings
                    </a>
                    <hr className="my-1 border-[#EFE7DA]" />
                    <button
                      type="button"
                      className="w-full text-left px-4 py-2 text-sm text-[#FF3B30] hover:bg-[#FBF7F0] rounded-xl cursor-pointer"
                      onClick={onLogout}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="ml-auto flex items-center gap-x-3">
              <Link
                to={"/sign-in"}
                className="text-sm text-[#1F2F28] border border-[#1F2F28] rounded-full px-5 py-2 hover:bg-[#1F2F28] hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                to={"/sign-up"}
                className="text-sm text-white bg-[#1F2F28] rounded-full px-5 py-2 hover:bg-[#2A3D33] transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
