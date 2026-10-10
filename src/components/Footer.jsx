import { motion } from "framer-motion";
import { ShieldUser } from "lucide-react";

const linkClass =
  "text-[15px] text-(--secondary) font-semibold w-fit cursor-pointer transition-all duration-300 hover:text-[#f0f2f5] hover:translate-x-1";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const col = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <div className="bg-[#15151ecc] border border-[#2b2b3b80]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-4 gap-13 px-6 py-10"
      >
        <motion.div variants={col}>
          <div className="flex items-center gap-3 font-sans font-semibold text-(--primary)">
            <ShieldUser className="text-xl" />
            <span className="text-lg font-['Space_Grotesk']">ImpersonaGuard</span>
          </div>
          <div className="my-3 text-(--secondary) text-[15px] font-semibold">
            AI-driven impersonation and phishing simulation defense for enterprise security.
          </div>
        </motion.div>

        <motion.div variants={col} className="flex flex-col gap-2">
          <div className="text-[#f0f2f5] font-bold mb-1">Product</div>
          <div className={linkClass}>How It Works</div>
          <div className={linkClass}>AI Engine</div>
          <div className={linkClass}>Demo Dashboard</div>
        </motion.div>

        <motion.div variants={col} className="flex flex-col gap-2">
          <div className="text-[#f0f2f5] font-bold mb-1">Solutions</div>
          <div className={linkClass}>Use Cases</div>
          <div className={linkClass}>Compliance & Ethics</div>
        </motion.div>

        <motion.div variants={col} className="flex flex-col gap-2">
          <div className="text-[#f0f2f5] font-bold mb-1">Contact</div>
          <div className={linkClass}>Request Pilot</div>
        </motion.div>
      </motion.div>

      <div className="h-px mx-4 bg-[#2b2b3b80]"></div>
      <div className="flex justify-between px-5 py-8 mb-4">
        <div className="text-(--secondary) font-semibold text-[15px]">
          © 2026 ImpersonaGuard. All rights reserved.
        </div>
        <div className="bg-[#27273580] text-[#8a96a8] text-xs p-1 px-3 rounded-4xl">
          Demo Platform – All data shown is simulated for demonstration purposes only.
        </div>
      </div>
    </div>
  );
}