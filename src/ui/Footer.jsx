import { FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img
        src="https://moi.gov.bd/themes/responsive_npf/images/footer_top_bg.png"
        alt=""
        className="w-full lg:h-32 bg-white"
      />
      <div className="px-5 md:px-0 lg:px-0 py-10 bg-[#e6e6e6] text-[#222]">
        <div className="container m-auto">
          <div className="flex gap-5 lg:gap-10">
            <div className="w-full">
              <ul className="flex-col lg:flex-row flex text-lg">
                <li className="lg:p-3 lg:px-4 pb-2 hover:text-[#609513] lg:rounded-lg lg:hover:bg-[#609513] lg:hover:text-white transition-colors duration-300 ease-in-out">
                  <a
                    href="https://moi.gov.bd/site/page/b8e29f10-29ed-4193-a0d1-b047289dfa81/Privacy-Policy"
                    title="Privacy Policy"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="lg:p-3 lg:px-4 pb-2 hover:text-[#609513] lg:rounded-lg lg:hover:bg-[#609513] lg:hover:text-white transition-colors duration-300 ease-in-out">
                  <a href="" title="Sitemap">
                    Sitemap
                  </a>
                </li>
                <li className="lg:p-3 lg:px-4 pb-2 hover:text-[#609513] lg:rounded-lg lg:hover:bg-[#609513] lg:hover:text-white transition-colors duration-300 ease-in-out">
                  <a
                    href="https://moi.gov.bd/site/page/03f01824-afc7-4c41-b0b4-d1724701922b/Contact"
                    title="Contact"
                  >
                    Contact
                  </a>
                </li>
                <li className="lg:p-3 lg:px-4 pb-2 hover:text-[#609513] lg:rounded-lg lg:hover:bg-[#609513] lg:hover:text-white transition-colors duration-300 ease-in-out">
                  <a
                    href="https://moi.gov.bd/site/page/ee571010-9350-441d-a264-ea6346bae660/Terms-of-Use"
                    title="Terms of Use"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="lg:p-3 lg:px-4 pb-2 hover:text-[#609513] lg:rounded-lg lg:hover:bg-[#609513] lg:hover:text-white transition-colors duration-300 ease-in-out">
                  <a
                    href="https://moi.gov.bd/site/page/d71e834e-4d6a-4d9d-b57c-da0650107184/FAQ"
                    title="FAQ"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
              <div className="flex flex-col lg:flex-row lg:items-center p-0 lg:pl-4 mt-4">
                <p className="font-medium">Follow Me:</p>
                <ul className="flex gap-4 lg:mt-0 mt-4 ml-0 lg:ml-4">
                  <li>
                    <a href="https://www.facebook.com/MinInfoBD">
                      <FaFacebook className="text-[#1877F2] text-3xl" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCcKp_qLm1jT3kyMNGU6w4xQ">
                      <FaYoutube className="text-[#c4302b] text-3xl" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              <div className="float-right">
                <p className="text-sm bm-4">
                  Planning and Implementation:&nbsp;
                  <a href="https://cabinet.gov.bd/" title="Cabinet Division">
                    Cabinet Division
                  </a>
                  ,&nbsp;
                  <a href="https://a2i.gov.bd" title="a2i">
                    a2i
                  </a>
                  ,&nbsp;
                  <a href="http://bcc.gov.bd/" title="BCC">
                    BCC
                  </a>
                  ,&nbsp;
                  <a href="http://doict.gov.bd/" title="DOICT">
                    DOICT
                  </a>
                  ,&nbsp;
                  <a href="https://basis.org.bd/" title="BASIS">
                    BASIS
                  </a>
                  .
                </p>
                <p className="flex flex-col lg:flex-row lg:items-center text-sm">
                  Technical Support:
                  <img
                    src="https://moi.gov.bd/themes/responsive_npf/img/np-logo-set.png"
                    alt="np-logo-set"
                    className="ml-4 w-40"
                  ></img>
                </p>
              </div>
            </div>
          </div>
          <aside className="mt-12">
            <p className="p-0 lg:pl-4 text-center">
              Copyright © ${new Date().getFullYear()} - All right reserved by
              Ministry of Information and Broadcasting
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
