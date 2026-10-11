
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import logo from "../assets/favicon.svg";

const links = [
  { name: "Home", path: "/" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "AI Engine", path: "/ai-engine" },
  { name: "Use Cases", path: "/use-cases" },
  { name: "Compliance", path: "/compliance" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0B0F17]/90 backdrop-blur-md sticky top-0 left-0 z-50 w-full flex items-center justify-between px-5 py-4 border-b border-zinc-800"
    >
      <NavLink
        to="/"
        className="w-1/4 flex items-center gap-3 font-sans font-semibold text-(--primary)"
      >
        <img src={logo} alt="ImpersonaGuard logo" className="w-7" />
        <span className="text-lg font-['Space_Grotesk']">
          ImpersonaGuard
        </span>
      </NavLink>

      <div className="w-1/2 font-semibold flex gap-7 text-(--secondary)">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `relative transition-colors duration-300
              hover:text-[#f0f2f5]
              after:absolute after:left-0 after:-bottom-1
              after:h-0.5 after:bg-(--primary)
              after:transition-all after:duration-300
              ${isActive ? "text-white after:w-full" : "after:w-0"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      <div className="w-1/4 text-amber-50 text-sm font-semibold flex items-center justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-zinc-800 px-3 py-2 rounded-xl cursor-pointer transition-colors duration-300 hover:border-(--primary)/60 hover:bg-white/5"
        >
          View Demo
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-[#8258e4] px-3 py-2 rounded-xl cursor-pointer transition-shadow duration-300 hover:shadow-[0_8px_30px_-8px_#8258e4]"
        >
          Request Pilot
        </motion.button>
      </div>
    </motion.nav>
  );
}