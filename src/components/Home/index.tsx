
import React from "react";

// import Footer from "./Footer"; 
const HomePage = () => {
    return (
        <div className=" text-black md:px-8 ">
            <div className="flex justify-between flex-col md:flex-row mb-[200px] md:m-0">
                <div className="w-full md:w-[25%] p-4 ">
                    <div className="bg-white rounded-md flex flex-col font-bold text-lg px-4">
                        <div className="text-center bg-[#d0efff] border border-[#1a9de1] rounded-b-full mb-4 py-2">
                            <h1>Notifications</h1>
                        </div>
                        <div>
                            <div>
                                <NoticeSection />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-[40%] p-4">
                    <div className="bg-white rounded-sm">
                        <HelpDeskSection />
                    </div>
                </div>
                <div className="w-full md:w-[35%] p-4">
                    <div className="">
                        <div className="flex flex-col gap-6 pb-10">
                            <div className="flex justify-between gap-4">

                                <button className=" w-1/2 bg-white rounded-full py-2 font-semibold">login</button>
                                <button className="w-1/2 bg-white rounded-full py-2 font-semibold">forgot</button>
                            </div>
                            <button className="w-full bg-white rounded-full py-2 font-semibold">score card</button>

                        </div>

                        <SelectPanel />

                        <InterviewButtons />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;


const panelOptions = [
    { id: 1, label: "Category - II" },
    { id: 2, label: "Response View" },
    { id: 3, label: "Score Card" },
    { id: 4, label: "Technical Officer/C" },
    { id: 5, label: "Category - I" },
    { id: 6, label: "Scientific Assistant/B" },
];

const SelectPanel = () => {
    return (
        <div className="bg-white rounded-sm flex flex-col font-bold text-lg px-4 pb-8 mb-4">
            <div className="text-center bg-[#d0efff] border border-[#1a9de1] rounded-b-full mb-4 py-2">
                <h1>Select Panel</h1>
            </div>

            <div className="flex flex-col items-center gap-4">
                {panelOptions.map((option) => (
                    <button
                        key={option.id}
                        className="w-fit border border-blue-400 rounded-full px-12 py-2"
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>
    );
};


import { FaSignInAlt } from "react-icons/fa";

const interviewData = [
    {
        id: 1,
        label: "Interview Call letter (Technical Officer/C) DR-08 (Drilling) & DR-14 (Mining)"
    },
    {
        id: 2,
        label: "Interview Call letter (Technical Officer/C) DR-10 (Mechanical) & DR-15 (Chemical)"
    },
    {
        id: 3,
        label: "Interview Call letter (Scientific Assistant) DR-20 (Physics) & DR-25 (Electronics)"
    }
];

const InterviewButtons = () => {
    return (
        <div className="flex flex-col gap-6 fixed bottom-0 left-0 w-full p-1 md:static bg-white md:bg-transparent">
            {interviewData.map((item) => (
                <button key={item.id} className="w-full bg-green-600 text-white rounded-full py-2 p-2">

                    <span className=""><FaSignInAlt className="inline-block mr-2" />{item.label}</span>
                </button>
            ))}
        </div>
    );
};



const notices = [
    { href: "assets/docs/notice_2024.pdf", text: "Circular for Advt.No. 05/2022 (R-I)" },
    { href: "assets/docs/cat_II/Notice.pdf", text: "Notice - Category II" },
    { href: "assets/docs/schedule_of_skill_testnoticecat_2.pdf", text: "Schedule of Skill Test - Category - II" },
    { href: "assets/docs/boiler_attendant.pdf", text: "Corrigendum - Technician/B" },
    { href: "assets/docs/electrical1.pdf", text: "Corrigendum - Cat - I (Electrical)" },
    { href: "assets/docs/mechanical1.pdf", text: "Corrigendum - Cat - I (Mechanical)" },
    { href: "assets/docs/appeal_bilingual.pdf", text: "Appeal" },
    { href: "assets/docs/result/notice2024.pdf", text: "Notice - Scientific Assistant/B & Category-I" },
    { href: "assets/docs/notice_login.pdf", text: "Notice - Technical Officer/C" },
    { href: "assets/docs/cancellation-architecture_compressed.pdf", text: "NOTICE - CANCELLATION OF RECRUITMENT PROCESS - TO/C (DR-04 ARCHITECTURE)" },
    { href: "assets/docs/Interview Schedule _Mining & Drilling.pdf", text: "Schedule of Interview - TO/C DR-08(Drilling) & DR-14(Mining)" },
    { href: "assets/docs/CAT-I_Schedule_2.pdf", text: "CAT-I Interview Schedule" },
    { href: "assets/docs/Guidelines_to_be_adopted_for_selection_candidates_in_case_of_tie.pdf", text: "NOTICE REGARDING SCIENTIFIC ASSISTANT/B & STIPENDIARY TRAINEE CATEGORY-I SELECTION" },
    { href: "assets/docs/Notice_advt_03_2023_BARC.pdf", text: "NOTICE REGARDING TECHNICAL OFFICER/C SELECTION" },
    { href: "assets/docs/Interview_Reschedule_tro5_tr06_tr12.pdf", text: "RE-SCHEDULE OF INTERVIEW - TR-05 (Agriculture), TR-06 (Horticulture) & TR-12 (Metallurgy)" },
    { href: "assets/docs/DR-01_TO_C_Reschedule_of_Interview_Date.pdf", text: "RE-SCHEDULE OF INTERVIEW - DR-01 - TECHNICAL OFFICER/C" },
    { href: "assets/docs/schedule_of_Interview_TO_C.pdf", text: "Schedule of Interview - Technical Officer/C" },
];

const NoticeSection = () => {
    return (
        <div className="p-4 border-b flex flex-col items-center">
            {notices.map((notice, index) => (
                <div key={index} className="mb-4">
                    <a href={notice.href} target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 text-sm font-bold border border-green-500 text-green-500 rounded hover:bg-green-500 hover:text-white transition">
                            {notice.text}
                        </button>
                    </a>
                </div>
            ))}
        </div>
    );
};




import Image from "next/image";

const HelpDeskSection = () => {
    return (
        <div className="p-3 w-full ">
            {/* Banner Image */}
            <div className="p-2 pb-0">
                <Image
                    className="rounded-lg"
                    src="/assets/banner1.jpg"
                    alt="Bhabha Atomic Research Centre"
                    width={600}
                    height={300}
                    layout="responsive"
                />
            </div>

            {/* Marquee Section */}
            <p className="text-red-600 font-bold py-2">
                Score card for Category – II Trainees (Phase – II) will be available from 22.11.2024
            </p>

            {/* Help Desk Section */}
            <div
                className="p-4 bg-cover bg-center rounded-lg mt-4"
                style={{ backgroundImage: "url(/assets/images/bg_cat.jpg)" }}
            >
                <div className="text-center py-2">
                    <a href="tel:044-47749000" aria-label="Helpdesk" className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                        <Image
                            className="rounded-full"
                            src="/assets/images/call_icon.png"
                            alt="Help Desk Icon"
                            width={24}
                            height={24}
                        />
                        Technical Helpdesk Number: 044-47749000
                    </a>
                </div>
                <p className="text-sm text-gray-700 mt-2">Please contact between 10 AM to 6.30 PM (Mon – Sat)</p>
                <strong>
                    <a
                        href="http://barconlineexam.com/helpdeskcand/BARC_ContUs.aspx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:underline"
                    >
                        For More Queries Click Here
                    </a>
                </strong>
            </div>
        </div>
    );
};
