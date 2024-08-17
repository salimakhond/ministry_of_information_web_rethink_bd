const NavBar = () => {
  return (
    <div className=" navbar p-0 justify-center items-center bg-[#609513] text-white">
      <div className="container">
        <div className="navbar-center">
          <div className="dropdown  z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 w-52 p-2 shadow bg-[#609513] text-white"
            >
              <li>
                <a className="hover:bg-opacity-5 rounded-none">Home</a>
              </li>
              <li className="relative group">
                <summary className="hover:bg-opacity-5 rounded-none ">
                  About us
                </summary>
                <ul className="top-0 left-[200px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none z-[2]">
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      About us page 1
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      About us page 2
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      About us page 3
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      About us page 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <summary className="hover:bg-opacity-5 rounded-none">
                  Affiliated Offices/Institutions
                </summary>
                <ul className="top-0 left-[200px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none z-[2]">
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Affiliated Offices Page 1
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Affiliated Offices Page 2
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Affiliated Offices Page 3
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Affiliated Offices Page 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <summary className="hover:bg-opacity-5 rounded-none">
                  Projects
                </summary>
                <ul className="top-0 left-[200px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none z-[2]">
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Projects Page 1
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Projects Page 2
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Projects Page 3
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Projects Page 4
                    </a>
                  </li>
                </ul>
              </li>
              <li className="relative group">
                <summary className="hover:bg-opacity-5 rounded-none">
                  Contact & Comment
                </summary>
                <ul className="top-0 left-[200px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none z-[2]">
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Contact & Comment Page 1
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Contact & Comment Page 2
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Contact & Comment Page 3
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-opacity-5 rounded-none">
                      Contact & Comment Page 4
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-start hidden lg:flex">
          <ul className="menu p-0 menu-horizontal z-20">
            <li>
              <a className="hover:bg-opacity-5 rounded-none py-6">Home</a>
            </li>
            <li className="relative group">
              <summary className="py-6 hover:bg-opacity-5 rounded-none">
                About us
              </summary>
              <ul className="top-[76px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    About us page 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    About us page 2
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    About us page 3
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    About us page 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <summary className="py-6 hover:bg-opacity-5 rounded-none">
                Affiliated Offices/Institutions
              </summary>
              <ul className="top-[76px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Affiliated Offices Page 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Affiliated Offices Page 2
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Affiliated Offices Page 3
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Affiliated Offices Page 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <summary className="py-6 hover:bg-opacity-5 rounded-none">
                Projects
              </summary>
              <ul className="top-[76px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Projects Page 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Projects Page 2
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Projects Page 3
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Projects Page 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <summary className="py-6 hover:bg-opacity-5 rounded-none">
                Contact & Comment
              </summary>
              <ul className="top-[76px] absolute w-max ml-0 p-0 bg-[#609513] invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-300 rounded-none">
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Contact & Comment Page 1
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Contact & Comment Page 2
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Contact & Comment Page 3
                  </a>
                </li>
                <li>
                  <a className="hover:bg-opacity-5 rounded-none">
                    Contact & Comment Page 4
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:flex lg:justify-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
