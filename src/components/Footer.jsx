import { ShieldUser } from "lucide-react";
export default function Footer() {
    return (
        <>
            <div className='bg-[#15151ecc] border border-[#2b2b3b80]'>
                <div className='grid grid-cols-4 gap-13 px-6 py-10'>
                    <div>
                        <div className=' flex items-center justify gap-3  font-sans font-semibold text-(--primary)'>
                            <ShieldUser className='text-xl' />
                            <span className=" text-lg font-['Space_Grotesk'] ">ImpersonaGuard</span>
                        </div>
                        <div className="my-3 text-(--secondary) text-[15px] font-semibold">
                            AI-driven impersonation and phishing simulation defense for enterprise security.
                        </div>
                    </div>
                    <div>
                        <div className="text-[#f0f2f5] font-bold mb-3">Product</div>
                        <div className="text-[15px] text-(--secondary) font-semibold">How It Works</div>
                        <div className="text-[15px] my-2 text-(--secondary) font-semibold">AI Engine</div>
                        <div className="text-[15px]  text-(--secondary) font-semibold">Demo Dashboard</div>
                    </div>
                    <div>
                        <div className="text-[#f0f2f5] font-bold mb-3">Solutions</div>
                        <div className="text-[15px] text-(--secondary) font-semibold">Use Cases</div>
                        <div className="text-[15px] mt-2 text-(--secondary) font-semibold">Compliance & Ethics</div>

                    </div>
                    <div>
                        <div className="text-[#f0f2f5] font-bold mb-3">Contact</div>
                        <div className="text-[15px] text-(--secondary) font-semibold">Request Pilot</div>

                    </div>
                </div>

                <div className="h-px mx-4  bg-[#2b2b3b80]"></div>
                <div className="flex justify-between px-5 py-8 mb-4">
  <div className="text-(--secondary) font-semibold text-[15px]">© 2026 ImpersonaGuard. All rights reserved.</div>
  <div className="bg-[#27273580] text-[#8a96a8] text-xs p-1 px-3 rounded-4xl">Demo Platform – All data shown is simulated for demonstration purposes only.</div>
                </div>            </div>
        </>
    )
}
