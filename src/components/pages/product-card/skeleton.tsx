import { motion } from "motion/react";

export const SkeletonCard = () => {
  return (
    <motion.div className="w-full max-w-[400px] bg-white border border-gray-100 rounded-2xl p-4 min-h-[520px] flex flex-col animate-pulse">
      <div className="w-full aspect-square bg-gray-200 rounded-md mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-4" />
      <div className="h-4 bg-gray-200 rounded w-1/3 mb-6 mt-auto" />
      <div className="h-10 bg-gray-300 rounded-md" />
    </motion.div>
  );
};
