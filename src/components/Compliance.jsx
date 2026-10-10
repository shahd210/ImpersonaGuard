import { motion } from "framer-motion";
import { FiShield, FiLock } from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import { FileCheck } from "lucide-react";

const items = [
  { Icon: FiShield, label: "Privacy-by-Design" },
  { Icon: FiLock, label: "SOC Aligned" },
  { Icon: FileCheck, label: "Ethical Simulations" },
  { Icon: LuBuilding2, label: "UAE Ready" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Compliance() {
  return (
    <div className="bg-[#15151e4d] p-5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="my-10 py-10 border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl"
      >
        <div className="text-center w-[50%] mx-auto">
          <div className="text-[#f0f2f5] text-3xl font-semibold font-['Space_Grotesk'] my-2">
            Enterprise-Grade Security & Compliance
          </div>
          <div className="text-(--secondary) text-lg font-semibold">
            Built with privacy-by-design principles and aligned with UAE cybersecurity standards.
            No real phishing, no unauthorized data collection.
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="grid grid-cols-4 gap-7 w-[90%] mx-auto py-7"
        >
          {items.map(({ Icon, label }) => (
            <motion.div
              key={label}
              variants={item}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-[#0c0c1280] py-4 rounded-2xl text-center cursor-pointer border border-transparent
                transition-[box-shadow,border-color] duration-300 hover:border-(--primary)/40 hover:shadow-[0_12px_35px_-12px_var(--primary)]"
            >
              <Icon
                size={28}
                className="text-(--primary) w-full mb-1 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="font-bold text-[#f0f2f5]">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#0C0C12] w-fit border border-[#2b2b3b] text-[#f0f2f5] font-semibold h-10 rounded-xl text-sm mx-auto flex items-center px-5 cursor-pointer
            transition-[box-shadow,border-color] duration-300 hover:border-(--primary)/60 hover:shadow-[0_10px_30px_-10px_var(--primary)]"
        >
          View Compliance Details
        </motion.div>
      </motion.div>
    </div>
  );
}