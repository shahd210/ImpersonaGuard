import { FaArrowRight } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { LuBrain } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { LuActivity } from "react-icons/lu";
export default function HeroSection() {
    return (
        <>
            <div className="p-4  w-[50%] mx-auto text-center">
                <div className='w-fit mx-auto px-3 py-2 rounded-3xl text-sm border border-(--primary)/20 gap-3 text-(--primary) bg-(--primary)/10 flex items-center justify-center'>
                    <FiShield className="text-xl " />
                    <span>AI-Powered Cybersecurity</span>
                </div>
                <div className="text-7xl font-[1000] my-6 font-['Space_Grotesk']">
                    <h1 className="text-[#f0f2f5]">ImpersonaGuard</h1>
                    <h1 className="text-(--primary)">AI-Driven Defense</h1>
                </div>
                <div className="text-(--secondary)  text-xl font-semibold ">

                    Simulating targeted phishing per employee to close the human-factor security gap. Predict, measure, and reduce impersonation risks before attackers strike.

                </div>
                <div className=" flex items-center justify-center gap-5 my-8 text-[#f0f2f5]">
                    <button className="h-12 bg-(--primary) font-semibold rounded-xl px-6 py-2 flex justify-center items-center gap-4 text-base">Request Pilot
                        <FaArrowRight />
                    </button>
                    <button className="h-12 px-6 bg-[#0c0c12] border border-[#2b2b3b] font-semibold text-base flex items-center justify-center rounded-xl  py-2.5 ">View Demo Dashboard</button>
                </div>
            </div>
            <div className="w-[70%] py-5 mx-auto gap-5 grid grid-cols-4">
                <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-lg p-5">
                    <GoPeople className="text-(--primary) text-3xl font-extrabold" />
                    <div className="text-sm text-[#f0f2f5] font-semibold my-2">Personalized Simulations</div>
                    <div className="text-(--secondary) font-medium text-xs">Unique phishing scenarios per employee</div>
                </div>
                <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-lg p-5">
                    <LuBrain className="text-(--primary) text-3xl font-extrabold" />
                    <div className="text-sm text-[#f0f2f5] font-semibold my-2">AI Risk Scoring</div>
                    <div className="text-(--secondary) font-medium text-xs">Predictive threat intelligence</div>
                </div>
                 <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-lg p-5">
                    <LuActivity className="text-(--primary) text-3xl font-extrabold" />
                    <div className="text-sm text-[#f0f2f5] font-semibold my-2">Multi-Channel Detection</div>
                    <div className="text-(--secondary) font-medium text-xs">Email, SMS, and voice impersonation</div>
                </div>
                  <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-lg p-5">
                    <FiShield className="text-(--primary) text-3xl font-extrabold" />
                    <div className="text-sm text-[#f0f2f5] font-semibold my-2">UAE Compliance Ready</div>
                    <div className="text-(--secondary) font-medium text-xs">Sovereign-aligned security design</div>
                </div>
            </div>
        </>
    )
}
