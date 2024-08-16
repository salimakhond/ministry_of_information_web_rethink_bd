import { GrFormNextLink } from "react-icons/gr";

const InformationDesk = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 px-6 lg:p-0">
        <div className="col-span-12 lg:col-span-8">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl text-[#222] font-bold">
              Departments & Information Desk
            </h2>
            <p className="relative pl-[28px] text-lg text-[#777777] font-normal mt-3">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[20px] h-[3px] bg-[#EC1C24]"></span>
              Choose Your Interest
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Notice Order Circular */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/f34ab22b_edce_42b8_bc95_8c10348ae0de/notice%20(1).png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Notice &amp; Order &amp; Circular</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline transition duration-300 ease-in-out">
                  <div className="border border-[#609513] h-6 w-6 rounded-full flex justify-center items-center mr-2 transition duration-300 ease-in-out hover:bg-[#609513] hover:text-white">
                    <GrFormNextLink className="text-[#609513] text-lg transition duration-300 ease-in-out" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/notices/Notifications-Circulars"
                    title="Notifications/Circulars"
                  >
                    Notifications/Circulars
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline transition duration-300 ease-in-out">
                  <div className="border border-[#609513] h-6 w-6 rounded-full flex justify-center items-center mr-2 transition duration-300 ease-in-out hover:bg-[#609513] hover:text-white">
                    <GrFormNextLink className="text-[#609513] text-lg transition duration-300 ease-in-out" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/notices/Office-Order-GO-NOC"
                    title="Office Order/GO/NOC"
                  >
                    Office Order/GO/NOC
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline transition duration-300 ease-in-out">
                  <div className="border border-[#609513] h-6 w-6 rounded-full flex justify-center items-center mr-2 transition duration-300 ease-in-out hover:bg-[#609513] hover:text-white">
                    <GrFormNextLink className="text-[#609513] text-lg transition duration-300 ease-in-out" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/news/News-Notification"
                    title="News Notification"
                  >
                    News Notification
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline transition duration-300 ease-in-out">
                  <div className="border border-[#609513] h-6 w-6 rounded-full flex justify-center items-center mr-2 transition duration-300 ease-in-out hover:bg-[#609513] hover:text-white">
                    <GrFormNextLink className="text-[#609513] text-lg transition duration-300 ease-in-out" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/tenders/ab170772-a58c-4b17-aeb6-e970722991ad/Tender-Recruitment-Notice"
                    title="Tender/Recruitment Notice"
                  >
                    Tender/Recruitment Notice
                  </a>
                </li>
              </ul>
            </div>

            {/* Policies &amp; Publications */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/1863f5ad_a394_47aa_b1ff_01a68d3ad642/POLICY_PUBLICATION-New.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Policies &amp; Publications</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Policies">
                    Policies
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Laws &amp; Regulations">
                    Laws &amp; Regulations
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Publications &amp; Annual Report">
                    Publications &amp; Annual Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Other Reports">
                    Other Reports
                  </a>
                </li>
              </ul>
            </div>
            {/* Citizen e-Services */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/2212af1d_fcec_47c5_9c9f_87d00e14b6b9/Eservice.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Citizen e-Services</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2 leading-6">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://www.mygov.bd/services/info?id=BDGS-1715147330"
                    title="Providing NOC to Import foreign film."
                  >
                    Providing NOC to Import foreign film.
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://www.mygov.bd/services/info?id=BDGS-1681719442"
                    title="License Renewal of Privately Owned FM Radio Stations"
                  >
                    License Renewal of Privately Owned FM Radio Stations
                  </a>
                </li>
              </ul>
            </div>
            {/* Citizen Charter */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/08df85e4_ee12_4b5f_a58c_57b94e194508/Untitled.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Citizen Charter</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/citizen_charter/Citizen-Charter"
                    title="Citizen Charter"
                  >
                    Citizen Charter
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/b0d314f5-7ed8-43f0-93fa-c0940a8e69b2/Focal-Point-Officer-Monitoring-Committee"
                    title="Focal Point Officer/Monitoring Committee"
                  >
                    Focal Point Officer/Monitoring Committee
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/c69fa9e2-b146-48f9-ab91-183c2b36fa0f/Work-Plan,-Monitoring-&amp;-Evaluation-Report"
                    title="Work Plan, Monitoring &amp; Evaluation Report"
                  >
                    Work Plan, Monitoring &amp; Evaluation Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://cabinet.gov.bd/site/page/10117079-8a4a-4743-99b6-1dd9c1230a07"
                    title="Laws/Regulations/Policies/Guidelines"
                  >
                    Laws/Regulations/Policies &amp; Guidelines
                  </a>
                </li>
              </ul>
            </div>
            {/* Annual Performance Agreement */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/093584eb_c3da_4a07_bb26_e866a4ecab2e/APA.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Annual Performance Agreement</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/miscellaneous_info/বার্ষিক কর্মসম্পাদন ব্যবস্থাপনা -কমিটি/Guideline-Circular--APA-Team-Focal-Point"
                    title="Guideline/Circular/ APA Team/Focal Point"
                  >
                    Guideline/Circular/ APA Team/Focal Point
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/915713a3-2bf5-449a-8b4e-ab4b9d06c61f/Annual-Performance-Agreement-&amp;-Result"
                    title="Annual Performance Agreement &amp; Result"
                  >
                    Annual Performance Agreement &amp; Result
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/0d7964df-af21-40c3-b539-942adab08c25/Monitoring-and-Evaluation-Report"
                    title="Monitoring and Evaluation Report"
                  >
                    Monitoring and Evaluation Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://apams.cabinet.gov.bd/"
                    title="APAMS Web Link"
                  >
                    APAMS Web Link
                  </a>
                </li>
              </ul>
            </div>
            {/* National Integrity Strategy (NIS) */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://file-rajshahi.portal.gov.bd/uploads/6e43673c-c499-49f8-bdeb-9930ee6546b5//640/579/3ce/6405793ce121e457764689.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">National Integrity Strategy (NIS)</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/07eb8089-cd4a-4b93-babe-03f494ee7ec2/Best-Practice-Work-Plan-Web-Link"
                    title="Best Practice Work Plan Web Link"
                  >
                    Best Practice Work Plan Web Link
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/c1eb89a1-3309-4e51-b1cf-381f4ee27086/Intregrity-Strategy-Committee-&amp;-Focal-Point"
                    title="Intregrity Strategy Committee &amp; Focal Point"
                  >
                    Intregrity Strategy Committee &amp; Focal Point
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="/site/files/3bfcfebf-cd3f-46ae-a7bb-47c93c9cdb3b/Monitoring-Evaluation-Report"
                    title="Monitoring/Evaluation Report"
                  >
                    Monitoring/Evaluation Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/c36a47ce-b57d-43d3-b93a-376be4354f53/Laws-Regulations-Policies-Guidelines"
                    title="Laws/Regulations/Policies/Guidelines"
                  >
                    Laws/Regulations/ Policies/ Guidelines
                  </a>
                </li>
              </ul>
            </div>
            {/* Grievance Redress System (GRS) */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/c7548026_e65f_4620_b1fa_cb7c6b57288b/complain.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Grievance Redress System (GRS)</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="/site/files/ee03f722-ff32-45cf-8390-49f5f0d7e3c2/GRS-and-Appellate-Officer"
                    title="GRS and Appellate Officer"
                  >
                    GRS and Appellate Officer
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="/site/view/reports/মাসিক, ত্রৈমাসিক ও বার্ষিক মূল্যায়ন প্রতিবেদন/Work-Plan,-Monitoring-&amp;-Evaluation-Report"
                    title="Work Plan, Monitoring &amp; Evaluation Report"
                  >
                    Work Plan, Monitoring &amp; Evaluation Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="http://www.grs.gov.bd/"
                    title="Complaint Submission (Online)"
                  >
                    Complaint Submission (Online)
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="/site/files/a6167edd-f196-46a0-bf89-e3a6ac6745e5/Laws-Regulations-Notifications-Policies--Circulars-Guidelines"
                    title="Laws/Regulations/Notifications/Policies//Circulars/Guidelines"
                  >
                    Laws/Regulations/ Notifications/ Policies/ Circulars/
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            {/* Right to Information (RTI) */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/5b76c26a_8fa4_4891_b68e_e3b49349d3ae/infocom.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Right to Information (RTI)</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/information_officers/Responsible-Officer-&amp;-Appellate-Authority"
                    title="Responsible Officer &amp; Appellate Authority"
                  >
                    Responsible Officer &amp; Appellate Authority
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/1278a651-8e72-4526-9e1d-d54d9aecbc7c/Work-Plan,-Application,-Appeal,-Complaint-Forms-&amp;-Web-Link"
                    title="Work Plan, Application, Appeal, Complaint Forms &amp; Web Link"
                  >
                    Work Plan, Application, Appeal, Complaint Forms &amp; Web
                    Link
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/reports/তথ্য অধিকার সংক্রান্ত প্রতিবেদন/Voluntarily-Disclosable-Information"
                    title="Voluntarily Disclosable Information"
                  >
                    Voluntarily Disclosable Information
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/d14fea5f-3566-4e7e-a099-3494f9af5440/Laws-Regulations-Notifications-Policies-Circulars-Guidelines"
                    title="Laws/Regulations/Notifications/Policies/Circulars/Guidelines"
                  >
                    Laws/Regulations, Notifications, Policies, Circulars,
                    Guidelines
                  </a>
                </li>
              </ul>
            </div>
            {/* Innovative Activities */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/f18757f8_e599_4480_8a90_8b55a8f657cf/INNOVATION%20(1).png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Innovative Activities</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/3bfb14ef-6ecd-4401-8716-30777a309ffa/Work-Plan-Guidelines-Projects"
                    title="Work Plan/Guidelines/Projects"
                  >
                    Work Plan/Guidelines/Projects
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/415a0d63-e17c-46a3-85ae-dc4c43fc725d/Innovation-Team"
                    title="Innovation Team"
                  >
                    Innovation Team
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/3bfb14ef-6ecd-4401-8716-30777a309ffa/Notifications-Circulars-Policies-Compilations"
                    title="Notifications/Circulars/Policies/Compilations"
                  >
                    Notifications, Circulars, Policies, Compilations
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://egov.cabinet.gov.bd/login"
                    title="Evaluation Report Web Link"
                  >
                    Evaluation Report Web Link
                  </a>
                </li>
              </ul>
            </div>
            {/* Service Simplification */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/517a0df0_bbe7_4f03_87eb_f40c391b6c56/SPS-3.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Service Simplification</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Service Process Simplification Manual">
                    Service Process Simplification Manual
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href=""
                    title="Notifications/ Circulars/ Policies/ Office Orders/ Compilations"
                  >
                    Notifications/ Circulars/ Policies/ Office Orders/
                    Compilations
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/b755f33a-1b68-426a-a717-c9d4d84474f2/List-of-Simplified-Services"
                    title="List of Simplified Services"
                  >
                    List of Simplified Services
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Service Process Simplification Example">
                    Service Process Simplification Example
                  </a>
                </li>
              </ul>
            </div>
            {/* Budget and Projects */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/87eb41eb_6eb1_4c95_8849_7559f3e8d355/budget2%20(1).png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Budget and Projects</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/503652ad-dd9b-4190-b347-5689c5c6290e/Annual-Procurement-Plan"
                    title="Annual Procurement Plan"
                  >
                    Annual Procurement Plan
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/503652ad-dd9b-4190-b347-5689c5c6290e/Budget-&amp;-MTBF-Budget"
                    title="Budget &amp; MTBF Budget"
                  >
                    Budget &amp; MTBF Budget
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Budget Reports/ Office Orders">
                    Budget Reports/ Office Orders
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/dd826087-f3bf-4bc7-a4f8-eb800e1d5d61/Important-Implemented-Projects"
                    title="Important Implemented Projects"
                  >
                    Important Implemented Projects
                  </a>
                </li>
              </ul>
            </div>
            {/* SDG & Dev Plan */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/c61f9d73_d5aa_4b13_97f7_41e96c649169/FinalLogoSDG.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">SDG & Dev Plan</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/263f168b-499a-4cac-b710-70197c5781ee/Ministry--Division's-SDG"
                    title="Ministry/ Division's SDG"
                  >
                    Ministry/ Divisions SDG
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/de216a9a-7522-45a6-9bc7-25af3553dc94/SDG-Focal-Alternative-Focal-Point"
                    title="SDG Focal/Alternative Focal Point"
                  >
                    SDG Focal/Alternative Focal Point
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://sdg.gov.bd/#1"
                    title="SDG  National Documents"
                  >
                    SDG National Documents
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/212f8be0-0094-48a7-908c-fb457d4b502a/5th-Year-Plan-and-Report"
                    title="5th Year Plan and Report"
                  >
                    5th Year Plan and Report
                  </a>
                </li>
              </ul>
            </div>
            {/* Forms */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/a45fa29e_8951_4362_9070_5ad3005c3b9a/forms.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Forms</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/forms/8abb1353-e8a2-47e5-8676-aa76c482df52/Journalist-welfare-fund-"
                    title="Journalist welfare fund."
                  >
                    Journalist welfare fund.
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="http://www.forms.gov.bd" title="Govt Forms">
                    Govt Forms
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/forms/2b68be69-58ef-482c-9552-715e47899aec/Requisition"
                    title="Requisition"
                  >
                    Requisition
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/forms/3ddd2952-d20f-45f0-9284-946ab86a08ed/Others"
                    title="Others"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Sefetynet */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/51afe3d1_bc6b_4afa_bf87_6a0de4c62ad3/Untitled-edited-7.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Social Sefetynet</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Social Security">
                    Social Security
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Coordination Management">
                    Coordination Management
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Activities">
                    Activities
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a href="" title="Notifications/Circulars/Policies">
                    Notifications/Circulars/Policies
                  </a>
                </li>
              </ul>
            </div>
            {/* Film */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/1fe9833c_6b6f_4e20_ba78_1830957480b4/film.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Film</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/miscellaneous_info/জাতীয়%20চলচ্চিত্র%20পুরস্কার/National-film-award---Jury-Board---Censore-Board"
                    title="National film award / Jury Board / Censore Board"
                  >
                    National film award / Jury Board / Censore Board
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/f4d7fce6-c015-4467-9fa7-b4ac8ab9d853/Film-Rule-(Voint-Venture)"
                    title="Film Rule (Voint Venture)"
                  >
                    Film Rule (Voint Venture)
                  </a>
                </li>

                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/7a9c7ec5-f71c-439f-be0b-ffa9eb0931df/Short-Film-Rules-2012"
                    title="Short Film Rules-2012"
                  >
                    Short Film Rules-2012
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/088d724b-600e-4b37-818f-ffc650ab77ce/Others"
                    title="Others"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>
            {/* Innovative Activities */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/f18757f8_e599_4480_8a90_8b55a8f657cf/INNOVATION%20(1).png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Innovative Activities</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/3bfb14ef-6ecd-4401-8716-30777a309ffa/Work-Plan-Guidelines-Projects"
                    title="Work Plan/Guidelines/Projects"
                  >
                    Work Plan/Guidelines/Projects
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/415a0d63-e17c-46a3-85ae-dc4c43fc725d/Innovation-Team"
                    title="Innovation Team"
                  >
                    Innovation Team
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/415a0d63-e17c-46a3-85ae-dc4c43fc725d/Innovation-Team"
                    title="Innovation Team"
                  >
                    Innovation Team
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/3bfb14ef-6ecd-4401-8716-30777a309ffa/Notifications-Circulars-Policies-Compilations"
                    title="Notifications/Circulars/Policies/Compilations"
                  >
                    Notifications, Circulars, Policies, Compilations
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://egov.cabinet.gov.bd/login"
                    title="Evaluation Report Web Link"
                  >
                    Evaluation Report Web Link
                  </a>
                </li>
              </ul>
            </div>
            {/* Television */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/d10bc69d_e926_4f36_9bc7_78d4067003bb/download.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Television</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view//miscellaneous_info/অনাপত্তি%20প্রদানকৃত%20দেশি%20ও%20বিদেশি%20টেলিভিশন%20চ্যানেল%20এর%20তালিকা/List-of-non-objectionable-domestic-and-foreign-television-channels"
                    title="List of non-objectionable domestic and foreign television channels"
                  >
                    List of non-objectionable domestic and foreign television
                    channels
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/fcb6c7ec-1de7-40aa-bc06-d6cd45af9a50/National-Broadcast-Policy"
                    title="National Broadcast Policy"
                  >
                    National Broadcast Policy
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/fa036334-a985-4ae5-aded-13f855f0d5f4/List-of-approved-IP-TVs"
                    title="List of approved IP TVs"
                  >
                    List of approved IP TVs
                    <a
                      href="https://moi.gov.bd/site/files/fcb6c7ec-1de7-40aa-bc06-d6cd45af9a50/National-Broadcast-Policy"
                      title="National Broadcast Policy"
                    >
                      National Broadcast Policy
                    </a>
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/764330a5-6383-4c00-ae7d-51c0e23fd969/Others"
                    title="Others"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>
            {/* Press */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/2cd95c28_ccc1_4b7b_b1af_cc8b6cc58fa1/14n.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Press</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://www.moi.gov.bd/site/view/miscellaneous_info/%E0%A6%B8%E0%A6%B0%E0%A6%95%E0%A6%BE%E0%A6%B0%E0%A6%BF%20%E0%A6%AE%E0%A6%BF%E0%A6%A1%E0%A6%BF%E0%A7%9F%E0%A6%BE%E0%A6%AD%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%20%E0%A6%B8%E0%A6%82%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B0%20%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE"
                    title="Government Listed Newspapers"
                  >
                    Government Listed Newspapers
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/reports/Laws,-rules,-regulations,-circulars,-guidelines,-notifications"
                    title="Laws, rules, regulations, circulars, guidelines, notifications"
                  >
                    Laws, rules, regulations, circulars, guidelines,
                    notifications
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://www.moi.gov.bd/site/view/miscellaneous_info/অনুমোদনকৃত%20অনলাইন%20পোর্টাল%20ও%20দৈনিক%20অনলাইন%20নিউজ%20পোর্টালের%20তালিকা"
                    title="List of approved online portals and daily online news portals"
                  >
                    List of approved online portals and daily online news
                    portals
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/6f925cae-a28b-46db-9b0c-7e013e404b39/Steps-in-the-process-of-publishing-Newspapers-Supplementary"
                    title="Steps in the process of publishing Newspapers Supplementary"
                  >
                    Steps in the process of publishing Newspapers Supplementary
                  </a>
                </li>
              </ul>
            </div>

            {/* SDG & Dev Plan */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/c61f9d73_d5aa_4b13_97f7_41e96c649169/FinalLogoSDG.png"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">SDG & Dev Plan</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/263f168b-499a-4cac-b710-70197c5781ee/Ministry--Division's-SDG"
                    title="Ministry/ Division's SDG"
                  >
                    Ministry/ Divisions SDG
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/de216a9a-7522-45a6-9bc7-25af3553dc94/SDG-Focal-Alternative-Focal-Point"
                    title="SDG Focal/Alternative Focal Point"
                  >
                    SDG Focal/Alternative Focal Point
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://sdg.gov.bd/#1"
                    title="SDG  National Documents"
                  >
                    SDG National Documents
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/212f8be0-0094-48a7-908c-fb457d4b502a/5th-Year-Plan-and-Report"
                    title="5th Year Plan and Report"
                  >
                    5th Year Plan and Report
                  </a>
                </li>
              </ul>
            </div>

            {/* Act &amp; Policy */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/75a1fc43_b451_496d_ad8c_34c47dacd3fd/Untitled-1.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Act &amp; Policy</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/fcb6c7ec-1de7-40aa-bc06-d6cd45af9a50/National-Broadcast-Policy"
                    title="National Broadcast Policy"
                  >
                    National Broadcast Policy
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/fd0fcb03-13a1-4e85-a460-1093b98f95a6/Cable-TV-Rules-2010"
                    title="Cable TV Rules-2010"
                  >
                    Cable TV Rules-2010
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/8a51bb3c-6a74-471f-bd13-0e7bf991a290/Journalist-welfare-trust-rules"
                    title="Journalist welfare trust rules"
                  >
                    Journalist welfare trust rules
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/7e546a06-e70f-4e5e-a5da-6224da13f037/Others"
                    title="Others"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>

            {/* Others */}
            <div
              className="bg-white rounded-lg p-8"
              style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
            >
              <img
                className="w-[100px]"
                src="https://moi.gov.bd/sites/default/files/files/moi.portal.gov.bd/front_service_box/e5109ab1_57c1_42cd_a259_3a1f4297131d/others.jpg"
                alt=""
              />
              <h6 className="mt-4 text-lg text-[#222] font-bold">
                <a href="#">Others</a>
              </h6>
              <ul className="text-[#777777] mt-3">
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/view/annual_reports/Annual-Report"
                    title="Annual Report"
                  >
                    Annual Report
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/tenders/ab170772-a58c-4b17-aeb6-e970722991ad/Tender"
                    title="Tender"
                  >
                    Tender
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/photogallery/ec7d7140-db43-4a7b-84ab-e66fac133305/Photo-Gallery"
                    title="Photo Gallery"
                  >
                    Photo Gallery
                  </a>
                </li>
                <li className="flex items-center mb-2 hover:text-[#EC1C24] hover:underline">
                  <div className="border border-[#609513] h-6 w-6 rounded-full  flex justify-center items-center mr-2">
                    <GrFormNextLink className="text-[#609513] text-lg" />
                  </div>
                  <a
                    href="https://moi.gov.bd/site/files/07acda2b-d681-4318-922c-9f21cef8dbed/Others"
                    title="Others"
                  >
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          {/* Notices Board */}
          <div
            className="bg-white rounded-bl-lg rounded-br-lg mt-12 lg:mt-0"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <div className="rounded-tl-lg rounded-tr-lg bg-[#609513] p-8 pt-4 pb-4">
              <h2 className="text-2xl lg:text-3xl text-white font-bold text-center">
                Notices Board
              </h2>
            </div>
            <ul className="text-[#777777] p-8">
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 16, 2024</span>
              </li>
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 16, 2024</span>
              </li>
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 16, 2024</span>
              </li>
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 15, 2024</span>
              </li>
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 15, 2024</span>
              </li>
              <li className="text-lg font-semibold mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 14, 2024</span>
              </li>
              <li className="text-lg font-semibold">
                <a
                  href="https://moi.gov.bd/site/notices/ddb4d30a-d148-4832-a2c9-ebc7e64106f4/GONo-1602-18"
                  title="G.O.No-1602/1(8)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  G.O.No-1602/1(8)
                  <strong className="text-base font-medium text-[#EC1C24]">
                    {" "}
                    (New)
                  </strong>
                </a>
                <br />
                <span className="text-base font-normal">August 14, 2024</span>
              </li>
              <button className="btn text-[#609513] bg-transparent border-[#609513] hover:text-white hover:bg-[#609513] hover:border-transparent mt-6">
                <a
                  href="https://moi.gov.bd/site/view/internal_eservices"
                  title="All"
                >
                  See More
                </a>
              </button>
            </ul>
          </div>

          {/* Hotline */}
          <div>
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              Hotline Number
            </h2>
            <img
              className="rounded-bl-lg rounded-br-lg w-full"
              alt="Hotline"
              src="https://moi.portal.gov.bd/uploader/server/../../sites/default/files/files/moi.portal.gov.bd/npfblock//hotline.gif"
            ></img>
          </div>

          {/* Internal eServices */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              Internal E-Services
            </h2>
            <ul className="text-[#777777] p-8">
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://bangladesh.gov.bd/site/view/all_eservices_in_bangladesh/"
                  title="Providing NOC to Import foreign film."
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Central E-Services
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://www.mygov.bd/services/info?id=BDGS-1715147330"
                  title="Providing NOC to Import foreign film."
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Providing NOC to Import foreign film.
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://www.mygov.bd/services/info?id=BDGS-1681719442"
                  title="License Renewal of Privately Owned FM Radio Stations"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  License Renewal of Privately Owned FM Radio Stations
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="http://application.bfcb.gov.bd/"
                  title="Online Application for Sensor Board"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Online Application for Sensor Board
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="http://application.bfcb.gov.bd/site/calculation.html"
                  title="Screening Fee Calculator"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Screening Fee Calculator
                </a>
                <br />
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://mail.moi.gov.bd/"
                  className="hover:text-[#EC1C24] hover:underline"
                  title="Web Mail"
                >
                  Web Mail
                </a>
              </li>
              <li className="text-lg">
                <a
                  href="http://ofc.bfa.gov.bd/Websites/login"
                  title="Online Cataloging for film Archieve"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Online Cataloging for film Archieve
                </a>
              </li>
              <button className="btn text-[#609513] bg-transparent border-[#609513] hover:text-white hover:bg-[#609513] hover:border-transparent mt-6">
                <a
                  href="https://moi.gov.bd/site/view/internal_eservices"
                  title="All"
                >
                  See More
                </a>
              </button>
            </ul>
          </div>

          {/* National Anthem */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              National Anthem
            </h2>
            <ul className="text-[#777777] p-8">
              <li className="text-lg mb-2">
                <audio controls style={{ width: "100%" }}>
                  <source
                    src="https://moi.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/e5f25d4e_f0a7_4b2a_a07c_3ec69a793516/bd_national_anthem.mp3"
                    type="audio/mp3"
                  />
                  Your browser does not support the audio element.
                </audio>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              Important Links
            </h2>
            <ul className="text-[#777777] p-8">
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="http://www.bangabhaban.gov.bd/"
                  title="President's Office"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Presidents Office
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="http://www.cabinet.gov.bd/"
                  title="Cabinet Division "
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Cabinet Division
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="http://www.mopa.gov.bd/"
                  title="Ministry of Public Administration"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Ministry of Public Administration
                </a>
              </li>
              <li className="text-lg">
                <a
                  href="http://www.bangladesh.gov.bd/"
                  title="National Web Portal"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  National Web Portal
                </a>
              </li>

              <button className="btn text-[#609513] bg-transparent border-[#609513] hover:text-white hover:bg-[#609513] hover:border-transparent mt-6">
                <a
                  href="https://moi.gov.bd/site/view/internal_eservices"
                  title="All"
                >
                  All Link
                </a>
              </button>
            </ul>
          </div>
          {/* Featured Gallery */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <ul className="text-[#777777] mt-4">
              <li className="">
                <a href="https://edirectory.portal.gov.bd/">
                  <img
                    src="https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/npfblock//e-directory.jpg"
                    alt=""
                    className=""
                  />
                </a>
              </li>
              <li className="my-4">
                <a href="https://www.mygov.bd/">
                  <img
                    src="https://moi.gov.bd/sites/default/files/files/mod.portal.gov.bd/page/41732ef3_4108_4549_be07_77bf22484c68/National-portal_bn.gif"
                    alt=""
                    className=""
                  />
                </a>
              </li>
              <li className="">
                <a href="https://www.mygov.bd/serviceByOffice/?agent=np&domain=moi.gov.bd">
                  <img
                    src="https://moi.gov.bd/sites/default/files/files/mod.portal.gov.bd/page/41732ef3_4108_4549_be07_77bf22484c68/internal_eservice2.gif"
                    alt=""
                    className=""
                  />
                </a>
              </li>
            </ul>
          </div>

          {/* Government Employee Management System (GEMS) */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              Government Employee Management System (GEMS)
            </h2>
            <ul className="text-[#777777] p-8">
              <li className="text-lg">
                <a
                  href="http://www.gems.gov.bd"
                  target="_blank"
                  title="সরকারি কর্মচারী ব্যবস্থাপনা পদ্ধতি (GEMS)"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Government Employee Management System (GEMS)
                </a>
              </li>
            </ul>
          </div>

          {/* Innovation Corner */}
          <div
            className="rounded-bl-lg rounded-br-lg"
            style={{ boxShadow: "0px 5px 15px 0 rgba(0, 0, 0, 0.07)" }}
          >
            <h2 className="text-center mt-4 text-2xl lg:text-3xl text-white p-4 font-bold rounded-tl-lg rounded-tr-lg bg-[#609513]">
              Innovation Corner
            </h2>
            <ul className="text-[#777777] p-8">
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/view/innovation/Innovation Team"
                  title="Innovation Team"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Innovation Team
                </a>
              </li>
              <li className="text-lg mb-2 border-b pb-2">
                <a
                  href="https://moi.gov.bd/site/view/innovation/Annual Action Plan of Innovation Team"
                  title="Annual Action Plan of Innovation Team"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Annual Action Plan of Innovation Team
                </a>
              </li>
              <li className="text-lg">
                <a
                  href="https://moi.gov.bd/site/view/innovation/Innovation Progress Report"
                  title="Innovation Progress Report"
                  className="hover:text-[#EC1C24] hover:underline"
                >
                  Innovation Progress Report
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDesk;
