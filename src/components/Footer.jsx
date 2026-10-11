
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/favicon.svg";

const linkClass =
  "text-[15px] text-(--secondary) font-semibold w-fit cursor-pointer transition-all duration-300 hover:text-[#f0f2f5] hover:translate-x-1";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const col = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const links = {
  howItWorks: "/how-it-works",
  aiEngine: "/ai-engine",
  demo: "/demo",
  useCases: "/use-cases",
  compliance: "/compliance",
  requestPilot: "/request-pilot",
};

export default function Footer() {
  return (
    <footer className="bg-[#0c0c12] border-t border-[#2b2b3b80]">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 py-10"
      >
        {/* Brand */}
        <motion.div variants={col}>
          <NavLink
            to="/"
            className="flex items-center gap-3 font-sans font-semibold text-(--primary)"
          >
            <img src={logo} alt="ImpersonaGuard logo" className="w-8" />
            <span className="text-lg font-['Space_Grotesk']">
              ImpersonaGuard
            </span>
          </NavLink>

          <p className="my-3 text-(--secondary) text-[15px] font-semibold">
            AI-driven impersonation and phishing simulation defense for
            enterprise security.
          </p>
        </motion.div>

        {/* Product */}
        <motion.div variants={col} className="flex flex-col gap-2">
          <h3 className="text-[#f0f2f5] font-bold mb-1">Product</h3>

          <NavLink to={links.howItWorks} className={linkClass}>
            How It Works
          </NavLink>

          <NavLink to={links.aiEngine} className={linkClass}>
            AI Engine
          </NavLink>

          <NavLink to={links.demo} className={linkClass}>
            Demo Dashboard
          </NavLink>
        </motion.div>

        {/* Solutions */}
        <motion.div variants={col} className="flex flex-col gap-2">
          <h3 className="text-[#f0f2f5] font-bold mb-1">Solutions</h3>

          <NavLink to={links.useCases} className={linkClass}>
            Use Cases
          </NavLink>

          <NavLink to={links.compliance} className={linkClass}>
            Compliance &amp; Ethics
          </NavLink>
        </motion.div>

        {/* Contact */}
        <motion.div variants={col} className="flex flex-col gap-2">
          <h3 className="text-[#f0f2f5] font-bold mb-1">Contact</h3>

          <NavLink to={links.requestPilot} className={linkClass}>
            Request Pilot
          </NavLink>
        </motion.div>
      </motion.div>

      <div className="h-px mx-4 bg-[#2b2b3b80]" />

      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 px-5 py-8 mb-4">
        <p className="text-(--secondary) font-semibold text-[15px]">
          © 2026 ImpersonaGuard. All rights reserved.
        </p>

        <p className="w-fit bg-[#27273580] text-[#8a96a8] text-xs p-1 px-3 rounded-4xl">
          Demo Platform – All data shown is simulated for demonstration purposes only.
        </p>
      </div>
    </footer>
  );
}