import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import { FaChartColumn } from "react-icons/fa6";
import { LuGraduationCap, LuUserRoundCog } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

// الكلاسات لازم تتكتب كاملة (مش dynamic) عشان Tailwind يشوفها
const steps = [
  {
    step: "Step 01",
    title: "Identity & Behavior Modeling",
    desc: "AI builds behavioral profiles using role, department, and communication patterns to understand each employee's risk surface.",
    Icon: LuUserRoundCog,
    iconBg: "bg-(--primary)/10",
    iconColor: "text-(--primary)",
    hover: "hover:shadow-[0_15px_45px_-15px_var(--primary)] hover:border-(--primary)/50",
  },
  {
    step: "Step 02",
    title: "Spear-Phishing Simulation",
    desc: "AI generates unique, safe simulated phishing scenarios per employee across email, SMS, and impersonation vectors.",
    Icon: FiTarget,
    iconBg: "bg-[#17cfbf]/10",
    iconColor: "text-[#17cfbf]",
    hover: "hover:shadow-[0_15px_45px_-15px_#17cfbf] hover:border-[#17cfbf]/50",
  },
  {
    step: "Step 03",
    title: "Risk Scoring & Detection",
    desc: "Advanced models detect impersonation risk and calculate individual & department vulnerability scores in real-time.",
    Icon: FaChartColumn,
    iconBg: "bg-[#22c38e]/10",
    iconColor: "text-[#22c38e]",
    hover: "hover:shadow-[0_15px_45px_-15px_#22c38e] hover:border-[#22c38e]/50",
  },
  {
    step: "Step 04",
    title: "Response & Awareness",
    desc: "Interactive dashboards, investigation workflows, and adaptive awareness training close the security loop.",
    Icon: LuGraduationCap,
    iconBg: "bg-[#f59f0a]/10",
    iconColor: "text-[#f59f0a]",
    hover: "hover:shadow-[0_15px_45px_-15px_#f59f0a] hover:border-[#f59f0a]/50",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HowWorks() {
  return (
    <div className="pb-15">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="w-[50%] mx-auto my-15 text-center"
      >
        <div className="text-[#f0f2f5] my-4 text-4xl font-bold font-mono">
          How ImpersonaGuard Works
        </div>
        <div className="text-(--secondary) font-semibold text-lg">
          A comprehensive four-step approach to identifying and mitigating
          human-factor cyber risks across your organization.
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="px-5 mb-8 gap-6 grid grid-cols-4"
      >
        {steps.map(({ step, title, desc, Icon, iconBg, iconColor, hover }) => (
          <motion.div
            key={step}
            variants={card}
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`group border border-[#2b2b3b80] bg-[#15151ecc] rounded-xl p-5 cursor-pointer
              transition-[box-shadow,border-color] duration-300 ${hover}`}
          >
            <div className={`${iconBg} w-fit p-3 rounded-2xl mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
              <Icon size={30} className={`${iconColor} shrink-0`} />
            </div>
            <div className="text-(--secondary) text-xs font-mono my-1">{step}</div>
            <div className="text-[#f0f2f5] font-extrabold font-['Space_Grotesk'] mb-2">{title}</div>
            <div className="text-(--secondary) text-[15px] font-semibold">{desc}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="group text-[#f0f2f5] flex w-fit mx-auto h-12 items-center justify-center gap-3 font-semibold px-11 rounded-xl border border-[#3c3c4e80] cursor-pointer
          transition-[box-shadow,border-color] duration-300 hover:border-(--primary)/60 hover:shadow-[0_10px_35px_-10px_var(--primary)]"
      >
        <div>Learn More</div>
        <FaArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </motion.div>
    </div>
  );
}