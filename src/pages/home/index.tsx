import { Button } from "@/components/ui/button";
import { useHome } from "./useHome";
import CreateProduct from "@/components/pages/create-product";
import ProductCard from "@/components/pages/product-card";
import type { Product } from "@/type";
import { motion } from "motion/react";
import { SkeletonCard } from "@/components/pages/product-card/skeleton";
import { Input } from "@/components/ui/input";
import { PackageSearch } from "lucide-react";

const Home = () => {
  const {
    selectedAction,
    isFetchingProducts,
    setSelectedAction,
    allProducts,
    setValue,
  } = useHome();

  return (
    <div className="">
      <div className="flex flex-col gap-4 md:flex-row w-full items-center lg:items-start  justify-start lg:justify-between">
        <div className="w-full max-w-[350px]">
          <Input
            placeholder="Search by Product Title"
            defaultValue={""}
            onChange={(event) => setValue(event.target.value)}
          />
        </div>
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

        {!isFetchingProducts && allProducts?.length > 0 ? (
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
        ) : (
          <div className="w-full h-[60vh] flex flex-col gap-y-2 items-center justify-center">
            <PackageSearch className="w-32 h-32" />
            <h1 className="text-lg ">There are no products at this time</h1>
          </div>
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
