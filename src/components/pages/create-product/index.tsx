import { Drawer } from "vaul";
import { CircleX } from "lucide-react";

interface ICreateProduct {
  open: boolean;
  handleClose: () => void;
}

const CreateProduct = ({ open, handleClose }: ICreateProduct) => {
  return (
    <Drawer.Root direction="right" open={open}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="right-2 top-2 bottom-2 fixed z-10 outline-none min-w-[310px] w-full max-w-[550px] flex"
          style={
            { "--initial-transform": "calc(100% + 8px)" } as React.CSSProperties
          }
        >
          <div className="bg-zinc-50 h-full w-full grow p-3 flex flex-col rounded-[16px]">
            <div className="w-full">
              <Drawer.Title className="font-medium mb-2 text-zinc-900 flex items-center justify-between border-b-1 pb-2">
                <div>Create Product</div>
                <CircleX onClick={handleClose} />
              </Drawer.Title>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default CreateProduct;
