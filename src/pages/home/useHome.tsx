import { useDebounceValue } from "usehooks-ts";
import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/products";
import type { Product } from "@/type";

export function useHome() {
  const [selectedAction, setSelectedAction] = useState("");
  const [debouncedValue, setValue] = useDebounceValue("", 500);

  const { getAllProducts } = productService;

  const { data: allProducts, isFetching: isFetchingProducts } = useQuery({
    queryKey: ["get-products"],
    queryFn: () => getAllProducts(),
  });

  const filteredProducts = useMemo(() => {
    if (!allProducts?.data || !debouncedValue.trim()) return allProducts?.data;

    return allProducts.data.filter((product: Product) =>
      product.title.toLowerCase().includes(debouncedValue.toLowerCase())
    );
  }, [allProducts?.data, debouncedValue]);

  console.log(filteredProducts);

  return {
    allProducts: filteredProducts,
    isFetchingProducts,
    selectedAction,
    setSelectedAction,
    setValue,
  };
}
