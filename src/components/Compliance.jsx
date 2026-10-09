import { FiShield } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { FileCheck } from "lucide-react";
import { FiLock } from "react-icons/fi";
export default function Compliance() {
    return (
        <>
            <div className="bg-[#15151e4d] p-5 ">
                <div className="  my-10  py-10 border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl ">
                    <div className=" text-center w-[50%] mx-auto ">
                        <div className="text-[#f0f2f5] text-3xl font-semibold font-['Space_Grotesk'] my-2">Enterprise-Grade Security & Compliance</div>
                        <div className="text-(--secondary) text-lg font-semibold">Built with privacy-by-design principles and aligned with UAE cybersecurity standards. No real phishing, no unauthorized data collection.</div>
                    </div>
                    <div className="grid grid-cols-4 gap-7 w-[90%] mx-auto py-7">
                        <div className="bg-[#0c0c1280] py-4  rounded-2xl  text-center">

                            < FiShield className="text-(--primary) text-3xl w-full mb-1" />


                            <div className="font-bold text-[#f0f2f5] ">Privacy-by-Design</div>
                        </div>
                        <div className="bg-[#0c0c1280] py-4  rounded-2xl  text-center">

                            < FiLock className="text-(--primary) text-3xl w-full mb-1" />


                            <div className="font-bold text-[#f0f2f5] ">SOC Aligned</div>
                        </div>
                        <div className="bg-[#0c0c1280] py-4  rounded-2xl  text-center">

                            < FileCheck size={28} className="text-(--primary)  w-full mb-1" />


                            <div className="font-bold text-[#f0f2f5] ">Ethical Simulations</div>
                        </div>
                        <div className="bg-[#0c0c1280] py-4  rounded-2xl  text-center">

                            < LuBuilding2 className="text-(--primary) text-3xl w-full mb-1" />


                            <div className="font-bold text-[#f0f2f5] ">UAE Ready</div>
                        </div>
                    </div>
                    <div className="bg-[#0C0C12] w-fit border border-[#2b2b3b] text-[#f0f2f5] font-semibold h-10 rounded-xl text-sm mx-auto flex items-center px-5 ">
                        View Compliance Details
                    </div>
                </div>
            </div>
        </>
    )
}
