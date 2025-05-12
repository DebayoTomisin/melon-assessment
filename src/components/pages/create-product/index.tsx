import { Drawer } from "vaul";
import { CircleX } from "lucide-react";
import { useCreateProduct } from "./useCreateProduct";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ICreateProduct {
  open: boolean;
  handleClose: () => void;
}

const CreateProduct = ({ open, handleClose }: ICreateProduct) => {
  const { register, errors, handleAddProduct, isSubmitting } = useCreateProduct(
    { handleClose }
  );

  return (
    <Drawer.Root direction="right" open={open}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-50 outline-none min-w-[310px] w-full max-w-[550px] flex"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-3 flex flex-col rounded-[16px] overflow-hidden">
            <div className="w-full">
              <Drawer.Title className="font-medium mb-2 text-zinc-900 flex items-center justify-between border-b-1 pb-2">
                <div>Create Product</div>
                <CircleX onClick={handleClose} />
              </Drawer.Title>
            </div>
            <div className="flex-1 overflow-y-auto pr-2">
              <form
                id="create-product-form"
                className="mt-10 grid gap-y-6"
                onSubmit={handleAddProduct}
              >
                <div className="w-full space-y-2">
                  <Label htmlFor="picture">Title</Label>
                  <Input
                    id="title"
                    type="text"
                    {...register("title")}
                    placeholder="Enter Product name"
                  />
                  {errors?.title && (
                    <p className="text-xs text-red-500 text-right">
                      {errors?.title?.message}
                    </p>
                  )}
                </div>

                <div className="w-full space-y-2">
                  <Label htmlFor="picture">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    {...register("description")}
                    placeholder="Enter Product Description"
                  />
                  {errors?.description && (
                    <p className="text-xs text-red-500 text-right">
                      {errors?.description?.message}
                    </p>
                  )}
                </div>

                <div className="w-full space-y-2">
                  <Label htmlFor="picture">Price</Label>
                  <Input
                    id="price"
                    type="number"
                    {...register("price")}
                    placeholder="Enter Product Price"
                  />
                  {errors?.price && (
                    <p className="text-xs text-red-500 text-right">
                      {errors?.price?.message}
                    </p>
                  )}
                </div>

                <div className="w-full space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input
                    id="category"
                    type="text"
                    {...register("category")}
                    placeholder="Enter Product Category"
                  />
                  {errors?.category && (
                    <p className="text-xs text-red-500 text-right">
                      {errors?.category?.message}
                    </p>
                  )}
                </div>

                <div className="w-full space-y-2">
                  <Label htmlFor="image">Upload Image</Label>
                  <Input
                    id="image"
                    type="url"
                    {...register("image")}
                    placeholder="Enter Product Image"
                  />
                  {errors?.image && (
                    <p className="text-xs text-red-500 text-right">
                      {errors?.title?.message}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="pt-4 border-t mt-4">
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition"
                form="create-product-form"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Loading..." : "Create Product"}
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CreateProduct;
