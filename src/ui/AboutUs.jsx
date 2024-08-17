import { GrFormNextLink } from "react-icons/gr";

const AboutUs = () => {
  return (
    <div className="flex items-center gap-8 lg:gap-16 max-w-full px-5 md:px-0 lg:px-0 mt-10 mb-12 lg:mt-24 lg:mb-32 flex-col lg:flex-row">
      <div className="w-full lg:w-6/12 z-10">
        <div className="relative mx-5 mb-4 md:mx-10 md:mb-10 lg:ml-10 lg:mb-0 lg:mx-0">
          <div className="!bg-[#609513] !h-full !w-full z-[-1] absolute bottom-[-20px] left-[-20px] md:bottom-[-40px] md:left-[-40px]"></div>
          <img
            src="https://images.prothomalo.com/prothomalo-english%2F2024-08-15%2Fi36kzm16%2FChief%20Adviser%20of%20the%20Interim%20Government%20Professor%20Dr%20Muhammad%20Yunus.jpg?rect=0%2C0%2C707%2C371&w=1200&ar=40%3A21&auto=format%2Ccompress&ogImage=true&mode=crop&overlay=&overlay_position=bottom&overlay_width_pct=1"
            className="lg:h-[450px]"
          />
        </div>
      </div>
      <div className="w-full lg:w-6/12 bg-white">
        <div className="mb-8">
          <h2 className="text-2xl lg:text-3xl text-[#222] font-bold">
            About us
          </h2>
          <p className="relative pl-[28px] text-lg text-[#777777] font-normal mt-3">
            <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-[#EC1C24]"></span>
            About Ministry of Information and Broadcasting
          </p>
        </div>
        <p className="text-lg mb-5 text-[#222]">
          Welcome to the Ministry of Information and Broadcasting of Bangladesh.
          We play a key role in bridging the government and citizens by
          providing clear, reliable information. The Ministry is dedicated to
          fostering national unity and progress by connecting people through
          information, culture, and digital initiatives. Explore our work as we
          continue to serve and inform the people of Bangladesh.
        </p>

        <div>
          <ul className="text-[#777777] text-lg mt-3">
            <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
              <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                <GrFormNextLink className="text-[#609513]  text-xl" />
              </div>
              <a
                href="https://moi.gov.bd/site/page/10ef90a4-a292-4858-acc2-170775fc1b1a/Vision-&amp;-Mission"
                title="Vision &amp; Mission"
              >
                Vision &amp; Mission
              </a>
            </li>
            <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
              <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                <GrFormNextLink className="text-[#609513]  text-xl" />
              </div>
              <a
                href="https://moi.gov.bd/site/page/6dd299d4-f5df-4212-976f-3974c82604fa/Organogram"
                title="Organogram"
              >
                Organogram
              </a>
            </li>
            <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
              <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                <GrFormNextLink className="text-[#609513]  text-xl" />
              </div>
              <a
                href="https://moi.gov.bd/site/view/officer_list_category/প্রতিমন্ত্রী মহোদয়ের দপ্তর/Officers'-List"
                title="Officers' List"
              >
                Officers List
              </a>
            </li>
            <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
              <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                <GrFormNextLink className="text-[#609513]  text-xl" />
              </div>
              <a href="" title="Work Distribution">
                Work Distribution
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
