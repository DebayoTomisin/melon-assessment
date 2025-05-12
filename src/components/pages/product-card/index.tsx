import type { Product } from "@/type";
import { Star } from "lucide-react";
import { motion } from "motion/react";

interface IProduct {
  product: Product;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const ProductCard = ({ product }: IProduct) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.1)",
        transition: { type: "spring", stiffness: 300 },
      }}
      className="w-full max-w-[400px] bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col min-h-[520px]"
    >
      <div className="w-full max-h-[300px] aspect-square bg-gray-50">
        <motion.img
          src={product.image}
          alt={product.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full object-contain p-4"
        />
      </div>

      <div className="flex flex-col flex-grow p-4 space-y-2">
        <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
          {product.title}
        </h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center gap-1 text-yellow-500 text-sm">
            <Star className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">({product.rating.count})</span>
          </div>
        </div>
      </div>

      <div className="p-4 pt-0">
        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#b6ffb6",
            fontWeight: 600,
            fontSize: 18,
          }}
          transition={{ duration: 0.25 }}
          className="w-full py-2 px-4 bg-[#f7fff7] text-gray-800 text-sm font-medium rounded-md hover:bg-[#b6ffb6] transition-all"
        >
          Add to cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
