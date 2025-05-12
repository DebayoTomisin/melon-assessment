import type { ProductFormData } from "@/schema";
import { createProductSchema } from "@/schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { productService } from "@/services/products";
import { toast } from "sonner";

export function useCreateProduct({ handleClose }: { handleClose: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: yupResolver(createProductSchema),
  });

  const queryClient = useQueryClient();

  const { createProduct } = productService;

  const { mutate: createProductMutate, status: createProductStatus } =
    useMutation({
      mutationKey: ["create-product"],
      mutationFn: createProduct,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["get-products"] });
        toast.success("Product Added Successfully.");
        handleClose();
      },
      onError: (error) => {
        toast.error(
          error?.message ?? "An error occurred performing this action"
        );
        console.log(error);
      },
    });

  const handleAddProduct = handleSubmit((data) => {
    console.log(data);
    const payload = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      ...data,
    };

    console.log(payload);
    createProductMutate(payload);
  });

  return {
    register,
    errors,
    handleAddProduct,
    isSubmitting: createProductStatus === "pending",
  };
}
