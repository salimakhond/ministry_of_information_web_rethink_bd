import { AiFillSafetyCertificate } from "react-icons/ai";
import {
  FaBus,
  FaCity,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GiHealthNormal } from "react-icons/gi";
import { MdLocalPhone, MdSportsCricket } from "react-icons/md";
import { PiMonitorPlayFill, PiParkFill } from "react-icons/pi";
import { RiBook2Line } from "react-icons/ri";

const OfficialsTeam = () => {
  return (
    <div className="pb-8 lg:pb-24 px-5 md:px-0 lg:px-0">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-12 lg:gap-8">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl text-[#222] font-bold">
              Explore Community
            </h2>
            <p className="relative pl-[28px] text-lg text-[#777777] font-normal mt-3">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-[#EC1C24]"></span>
              Explore Our Community
            </p>
          </div>
          <div>
            <ul className="bg-[#fafafa] border-[5px] border-[#ebebeb] rounded-md p-3 px-4 lg:p-5 lg:px-8 list-none w-full grid grid-cols-2 gap-2">
              <li className="my-2 group group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <RiBook2Line className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Education Intitutes
                </a>
              </li>

              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <AiFillSafetyCertificate className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Public Safety
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <GiHealthNormal className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Health and Welfare
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <PiMonitorPlayFill className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Entertainment
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <FaBus className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Transportation
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <MdSportsCricket className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Sports
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <FaCity className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  City Council
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <MdLocalPhone className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Important Numbers
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <PiParkFill className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Parks Nature
                </a>
              </li>
              <li className="my-2 group">
                <a
                  href="#"
                  className="text-base font-semibold text-[#444] group-hover:text-[#609513] flex items-center transition-colors duration-300 ease-in-out"
                >
                  <div className="bg-[#609513] w-[45px] h-[45px] rounded-full flex justify-center items-center mr-2 transition-all duration-300 ease-in-out group-hover:border group-hover:bg-transparent group-hover:border-[#609513]">
                    <FaLocationDot className="text-white font-bold text-3xl transition-colors duration-300 ease-in-out group-hover:text-[#609513]" />
                  </div>
                  Interesting Places
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl text-[#222] font-bold">
              Meet Officials
            </h2>
            <p className="relative pl-[28px] text-lg text-[#777777] font-normal mt-3">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-[#EC1C24]"></span>
              Meet Our Officials
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-4">
            <div className="item">
              <div className="team-box rounded-md overflow-hidden">
                <div className="team-info w-full">
                  <h6 className="text-white text-lg font-medium mb-2">
                    Dr. Muhammad Yunus
                  </h6>
                  <strong className="text-white font-normal block mb-3">
                    Hon'ble Chief Adviser
                  </strong>
                  <ul className="flex space-x-2 text-[#cccccc] text-sm border-t border-[#cccccc] pt-3">
                    <li>
                      <strong className="font-normal">Connect:</strong>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/office_head/bc55c5da_95ac_4c12_b935_0f6793e60c0e/Dr.%20Muhammad%20Yunus.jpg"
                  alt="Harry Simon"
                  className="w-[380px] h-[380px]"
                />
              </div>
            </div>
            <div className="item">
              <div className="team-box rounded-md overflow-hidden">
                <div className="team-info w-full">
                  <h6 className="text-white text-lg font-medium mb-2">
                    Md. Humayun Kabir Khandaker
                  </h6>
                  <strong className="text-white font-normal block mb-3">
                    Senior Secretary, Ministry of Information and Broadcasting
                  </strong>
                  <ul className="flex space-x-2 text-[#cccccc] text-sm border-t border-[#cccccc] pt-3">
                    <li>
                      <strong className="font-normal">Connect:</strong>
                    </li>
                    <li>
                      <a href="#">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaLinkedinIn />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
                <img
                  src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/office_head/94d6d05a_d93b_41df_baa7_b70625877627/secretary.jpg"
                  alt="Harry Simon"
                  className="w-[380px] h-[380px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialsTeam;
