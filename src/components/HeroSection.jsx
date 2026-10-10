import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FiShield } from "react-icons/fi";
import { LuBrain, LuActivity } from "react-icons/lu";
import { GoPeople } from "react-icons/go";

const features = [
  { Icon: GoPeople, title: "Personalized Simulations", desc: "Unique phishing scenarios per employee" },
  { Icon: LuBrain, title: "AI Risk Scoring", desc: "Predictive threat intelligence" },
  { Icon: LuActivity, title: "Multi-Channel Detection", desc: "Email, SMS, and voice impersonation" },
  { Icon: FiShield, title: "UAE Compliance Ready", desc: "Sovereign-aligned security design" },
];

const textContainer = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } };
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const cardsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } },
};

function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-200 h-100 rounded-full blur-[120px] opacity-25"
        style={{ background: "var(--primary)" }}
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative isolate pt-10 pb-10">
      <HeroBackground />

      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="show"
        className="p-4 w-[50%] mx-auto text-center"
      >
        <motion.div
          variants={fadeUp}
          className="w-fit mx-auto px-3 py-2 rounded-3xl text-sm border border-(--primary)/20 gap-3 text-(--primary) bg-(--primary)/10 flex items-center justify-center backdrop-blur-sm"
        >
          <FiShield className="text-xl" />
          <span>AI-Powered Cybersecurity</span>
        </motion.div>

        <motion.div variants={fadeUp} className="text-7xl font-[1000] my-6 font-['Space_Grotesk']">
          <h1 className="text-[#f0f2f5]">ImpersonaGuard</h1>
          <h1
            className="text-(--primary)"
            style={{ textShadow: "0 0 40px color-mix(in srgb, var(--primary) 50%, transparent)" }}
          >
            AI-Driven Defense
          </h1>
        </motion.div>

        <motion.div variants={fadeUp} className="text-(--secondary) text-xl font-semibold">
          Simulating targeted phishing per employee to close the human-factor security gap.
          Predict, measure, and reduce impersonation risks before attackers strike.
        </motion.div>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-5 my-8 text-[#f0f2f5]">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group h-12 bg-(--primary) font-semibold rounded-xl px-6 py-2 flex justify-center items-center gap-4 text-base cursor-pointer
              shadow-[0_8px_30px_-10px_var(--primary)] transition-shadow duration-300 hover:shadow-[0_10px_40px_-5px_var(--primary)]"
          >
            Request Pilot
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="h-12 px-6 bg-[#0c0c12]/80 backdrop-blur-sm border border-[#2b2b3b] font-semibold text-base flex items-center justify-center rounded-xl py-2.5 cursor-pointer
              transition-[box-shadow,border-color] duration-300 hover:border-(--primary)/60 hover:shadow-[0_10px_35px_-10px_var(--primary)]"
          >
            View Demo Dashboard
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={cardsContainer}
        initial="hidden"
        animate="show"
        className="w-[70%] py-5 mx-auto gap-5 grid grid-cols-4"
      >
        {features.map(({ Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group border border-[#2b2b3b80] bg-[#15151ecc] backdrop-blur-sm rounded-lg p-5 cursor-pointer
              transition-[box-shadow,border-color] duration-300 hover:border-(--primary)/50 hover:shadow-[0_15px_40px_-15px_var(--primary)]"
          >
            <Icon className="text-(--primary) text-3xl font-extrabold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <div className="text-sm text-[#f0f2f5] font-semibold my-2">{title}</div>
            <div className="text-(--secondary) font-medium text-xs">{desc}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}