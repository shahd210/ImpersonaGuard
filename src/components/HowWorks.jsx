import { FiTarget } from "react-icons/fi";
import { FaChartColumn } from "react-icons/fa6";
import { LuGraduationCap } from "react-icons/lu";
import { LuUserRoundCog } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
export default function HowWorks() {
    return (
        <>
            <div className="pb-15">
                <div className="w-[50%] mx-auto my-15 text-center">
                    <div className="text-[#f0f2f5] my-4 text-4xl font-bold font-mono  ">
                        How ImpersonaGuard Works
                    </div>
                    <div className="text-(--secondary) font-semibold text-lg">A comprehensive four-step approach to identifying and mitigating human-factor cyber risks across your organization.</div>
                </div>
                <div className="px-5 mb-8 gap-6 grid grid-cols-4">
                    <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl p-5">
                        <div className="bg-(--primary)/10 w-fit p-3 rounded-2xl mb-5">
                            <LuUserRoundCog size={30} className="text-(--primary) shrink-0 " />

                        </div>
                        <div className="text-(--secondary) text-xs font-mono my-1" >Step 01</div>
                        <div className="text-[#f0f2f5]  font-extrabold font-['Space_Grotesk'] mb-2">Identity & Behavior Modeling</div>
                        <div className="text-(--secondary) text-[15px] font-semibold">AI builds behavioral profiles using role, department, and communication patterns to understand each employee's risk surface.</div>
                    </div>
                    <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl p-5">
                        <div className="bg-[#17cfbf]/10 w-fit p-3 rounded-2xl mb-5">
                            <FiTarget size={30} className="text-[#17cfbf] shrink-0 " />

                        </div>
                        <div className="text-(--secondary) text-xs font-mono my-1" >Step 02</div>
                        <div className="text-[#f0f2f5]  font-extrabold font-['Space_Grotesk'] mb-2">Spear-Phishing Simulation</div>
                        <div className="text-(--secondary) text-[15px] font-semibold">AI generates unique, safe simulated phishing scenarios per employee across email, SMS, and impersonation vectors.</div>
                    </div>
                    <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl p-5">
                        <div className="bg-[#22c38e]/10 w-fit p-3 rounded-2xl mb-5">
                            <FaChartColumn size={30} className="text-[#22c38e] shrink-0 " />

                        </div>
                        <div className="text-(--secondary) text-xs font-mono my-1" >Step 03</div>
                        <div className="text-[#f0f2f5]  font-extrabold font-['Space_Grotesk'] mb-2">Risk Scoring & Detection</div>
                        <div className="text-(--secondary) text-[15px] font-semibold">Advanced models detect impersonation risk and calculate individual & department vulnerability scores in real-time.</div>
                    </div>
                    <div className="border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl p-5">
                        <div className="bg-[#f59f0a]/10 w-fit p-3 rounded-2xl mb-5">
                            <LuGraduationCap size={30} className="text-[#f59f0a] shrink-0 " />

                        </div>
                        <div className="text-(--secondary) text-xs font-mono my-1" >Step 04</div>
                        <div className="text-[#f0f2f5]  font-extrabold font-['Space_Grotesk'] mb-2">Response & Awareness</div>
                        <div className="text-(--secondary) text-[15px] font-semibold">Interactive dashboards, investigation workflows, and adaptive awareness training close the security loop.</div>
                    </div>
                </div>
                <div className="text-[#f0f2f5] flex w-fit mx-auto h-12  items-center justify-center gap-3 font-semibold px-11 rounded-xl border border-[#3c3c4e80] ">
                    <div>Learn More</div>
                    <FaArrowRight size={12} />
                </div>
            </div>

        </>
    )
}
