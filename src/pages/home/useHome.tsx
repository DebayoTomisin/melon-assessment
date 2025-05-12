import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/products";

export function useHome() {
  const [selectedAction, setSelectedAction] = useState("");

  const { getAllProducts } = productService;

  const { data: allProducts, isFetching: isFetchingProducts } = useQuery({
    queryKey: ["get-products"],
    queryFn: () => getAllProducts(),
  });

  return {
    allProducts: allProducts?.data,
    isFetchingProducts,
    selectedAction,
    setSelectedAction,
  };
}
