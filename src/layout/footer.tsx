import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className=" w-full pt-10 pb-15 px-4 md:px-5 border-t-[0.5px] border-t-[#e5e7eb]"
    >
      <div className="flex w-full justify-between text-gray-600">
        <h1 className="font-normal text-lg">Dummy Store</h1>
        <p className="text-sm font-medium">&copy; {new Date().getFullYear()}</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
