import { Button } from "@/components/ui/button";
import { useHome } from "./useHome";
import CreateProduct from "@/components/pages/create-product";
import ProductCard from "@/components/pages/product-card";
import type { Product } from "@/type";
import { motion } from "motion/react";
import { SkeletonCard } from "@/components/pages/product-card/skeleton";

const Home = () => {
  const { selectedAction, isFetchingProducts, setSelectedAction, allProducts } =
    useHome();
  console.log(allProducts);

  return (
    <div className="">
      <div className="flex w-full justify-end">
        <Button
          variant="outline"
          onClick={() => setSelectedAction("create-product")}
        >
          Create Product
        </Button>
      </div>

      <div className="my-10 ">
        {isFetchingProducts && (
          <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        )}

        {!isFetchingProducts && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, filter: "blur(8px)", y: 30 },
              visible: {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="w-full grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6"
          >
            {allProducts?.map((product: Product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </motion.div>
        )}
      </div>

      {selectedAction === "create-product" && (
        <CreateProduct
          open={selectedAction === "create-product"}
          handleClose={() => setSelectedAction("")}
        />
      )}
    </div>
  );
};

export default Home;
