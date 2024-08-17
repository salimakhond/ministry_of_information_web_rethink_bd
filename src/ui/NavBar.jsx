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
              <a className="py-6 hover:bg-opacity-5 rounded-none">About us</a>
              <div className="absolute left-[0px] w-max top-full hidden group-hover:block bg-[#609513] group-hover:bg-[#609513] z-20 rounded-none">
                <div className="px-4 py-6 pt-0 bg-[#609513] rounded-none">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-[#609513]">
                    {/* Column 1 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Ministry</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/3606211e-9c06-4f7e-ba9e-37cae9e08500/History-&amp;-Activities"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          History &amp; Activities
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/10ef90a4-a292-4858-acc2-170775fc1b1a/Mission-&amp;-Vision"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Mission &amp; Vision
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/6c1d24ab-c259-4994-be49-5ef0844cd146/List-of-Ex-ministers"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          List of Ex-ministers
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/office_head/002e1358-e9d0-40cd-9e1c-accf822ee261/Senior-Secretary"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Senior Secretary
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/dc1aeb5f-2905-409b-a5e6-9df9a8d519ba/List-of-Ex-secretaries"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          List of Ex-secretaries
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/6dd299d4-f5df-4212-976f-3974c82604fa/Organogram"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Organogram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/df702094-f0df-455b-b0eb-7d539597448b/Allocation-of-Business"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Allocation of Business
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/nolink/Success-&amp;-Achievements"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Success &amp; Achievements
                        </a>
                      </li>
                    </ul>
                    {/* Column 2 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Manpower</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/view/officer_list_category/প্রতিমন্ত্রী মহোদয়ের দপ্তর/Officers"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Officers
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Work Distribution
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/view/information_officers/দায়িত্বপ্রাপ্ত-কর্মকর্তা-ও-আপীল-কর্তৃপক্ষ"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Information Officer
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/files/ee03f722-ff32-45cf-8390-49f5f0d7e3c2/GRS-Officer"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          GRS Officer
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/files/ee03f722-ff32-45cf-8390-49f5f0d7e3c2/Appellate-Officer"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Appellate Officer
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/76f1d1a5-f261-49e6-a950-ee4e3777abd9/Focal-Point-Officers"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Focal Point Officers
                        </a>
                      </li>
                    </ul>
                    {/* Column 3 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">
                        Services of Ministry
                      </h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/view/citizen_charter/Citizen-Charter"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Citizen Charter
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/beb0a4e5-6069-4c23-b228-53465ac5f249/List-of-Citizen-e-Services"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          List of Citizen e-Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/nolink/List-of-Other-Services"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          List of Other Services
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative group">
              <a className="py-6 hover:bg-opacity-5 rounded-none">
                Affiliated Offices/Institutions
              </a>
              <div className="absolute left-[-184px] w-max top-full hidden group-hover:block bg-[#609513] group-hover:bg-[#609513] z-20 rounded-none">
                <div className="px-4 py-6 pt-0 bg-[#609513] rounded-none">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-[#609513]">
                    {/* Column 1 */}
                    <ul className="m-0 p-0">
                      <li>
                        <a
                          href="http://www.pressinform.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Press Information Department
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.betar.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Betar
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.btv.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Television
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.dfp.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Department of Films &amp; Publications
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.masscommunication.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Department of Mass Communication
                        </a>
                      </li>
                    </ul>
                    {/* Column 2 */}
                    <ul className="m-0 p-0">
                      <li>
                        <a
                          href="http://www.presscouncil.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Press Council
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.fdc.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Film Development Corporation
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.bfa.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Film Archive
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.pib.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Press Institute Bangladesh
                        </a>
                      </li>
                    </ul>
                    {/* Column 3 */}
                    <ul className="m-0 p-0">
                      <li>
                        <a
                          href="http://www.bssnews.net/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Sangbad Sangstha
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.nimc.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          National Institute of Mass Communication
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.bfcb.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Film Censor Board
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.infocom.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Information Commission
                        </a>
                      </li>
                    </ul>
                    {/* Column 4 */}
                    <ul className="m-0 p-0">
                      <li>
                        <a
                          href="http://bcti.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Film and Television Institute
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://www.bjwt.gov.bd/"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Bangladesh Journalist Welfare Trust
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a className="py-6 hover:bg-opacity-5 rounded-none">Projects</a>
              <div className="absolute left-[0px] w-max top-full hidden group-hover:block bg-[#609513] group-hover:bg-[#609513] z-20 rounded-none">
                <div className="py-6 pt-0 bg-[#609513] rounded-none">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#609513]">
                    {/* Column 1 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Running</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/files/81cf2643-0f57-446e-bc8b-5d708f6818c8/Runing-Projects"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Runing Projects
                        </a>
                      </li>
                    </ul>
                    {/* Column 2 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Completed</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/files/eecdbb93-c600-4379-b382-c5f20d0136d4/Completed-Projects"
                          title="Enter to get more menu"
                        >
                          Completed Projects
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="group relative">
              <a className="py-6 hover:bg-opacity-5 rounded-none">
                Contact & Comment
              </a>
              <div className="absolute left-[0px] w-max top-full hidden group-hover:block bg-[#609513] group-hover:bg-[#609513] z-20 rounded-none">
                <div className="py-6 pt-0 bg-[#609513] rounded-none">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#609513]">
                    {/* Column 1 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Contact</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/page/03f01824-afc7-4c41-b0b4-d1724701922b/Office-Address"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Office Address
                        </a>
                      </li>
                    </ul>
                    {/* Column 2 */}
                    <ul className="m-0 p-0">
                      <h5 className="pl-4 mb-2 font-bold text-lg">Comment</h5>
                      <li>
                        <a
                          href="https://moi.gov.bd/forms/form/feedback-forms/Your-Opinion"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Your Opinion
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://moi.gov.bd/site/files/aa0e8c0c-84e2-4174-b749-041a2e70e190/Draft-Law/Policy"
                          title="Enter to get more menu"
                          className="block py-2 hover:bg-opacity-5 rounded-none"
                        >
                          Draft Law/Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
