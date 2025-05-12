import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { forwardRef, useState } from "react";
import { NavLink } from "react-router";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, ChevronUp, X, House, ShoppingCart } from "lucide-react";

const MotionLink = motion.create(NavLink);

const Heading = forwardRef<HTMLDivElement>((_, ref) => {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > 0) {
      setAtTop(false);
    } else {
      setAtTop(true);
    }
    if (previous && latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        hidden: { translateY: "-100%" },
        visible: { translateY: 0 },
      }}
      initial="visible"
      animate={hidden ? "hidden" : "visible"}
      transition={{ ease: "easeOut", duration: 0.8 }}
      ref={ref}
      className={`w-full px-3 md:px-5 lg:px-6 py-3 transition-all duration-800 ${
        atTop
          ? ""
          : "border-b border-b-[#000] bg-white md:bg-transparent shadow-xl md:shadow-none md:border-none "
      }`}
    >
      <div className="flex w-full items-center justify-between">
        <div className="bg-[#6fff6f] px-4 py-2 rounded-lg text-lg">D</div>
        <div
          className={`hidden transition-all duration-800 lg:flex gap-10 ${
            !atTop
              ? " bg-[#f7fff7] px-6 py-3 rounded-full shadow-xl backdrop-hue-rotate-180"
              : ""
          }`}
        >
          <MotionLink
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "hover:text-[#6fff6f] transition-all duration-300"
                  : ""
              }`
            }
            to="/"
          >
            Home
          </MotionLink>
          <MotionLink
            to="/checkout"
            className={({ isActive }) =>
              ` ${
                isActive
                  ? "hover:text-[#6fff6f] transition-all duration-300"
                  : ""
              }`
            }
          >
            Checkout
          </MotionLink>
        </div>
        <div className="visible lg:invisible">
          <div className="relative">
            {openMenu && (
              <div className="fixed min-h-screen inset-0 z-10 bg-black/40 blur-2xl" />
            )}
            <Popover open={openMenu} onOpenChange={setOpenMenu}>
              <PopoverTrigger
                className="text-lg cursor-default flex items-center gap-x-1"
                onClick={() => setOpenMenu(!openMenu)}
              >
                Menu
                {openMenu ? <ChevronUp /> : <ChevronDown />}
                {/* <motion.button whileTap={{ scaleX: 0.9 }}></motion.button> */}
              </PopoverTrigger>
              <PopoverContent className="w-80 bg-white shadow-lg rounded-lg flex flex-col  right-4">
                <div className="flex w-full items-center justify-between">
                  <p>Explore</p>
                  <X onClick={() => setOpenMenu(false)} />
                </div>
                <div className=" mt-6 flex flex-col gap-y-5">
                  <MotionLink
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? "hover:text-[#6fff6f] transition-all duration-300"
                          : ""
                      } flex gap-x-1 items-center`
                    }
                    to="/"
                    onClick={() => setOpenMenu(false)}
                    whileTap={{
                      background: "#6fff6f",
                      padding: 2,
                      borderRadius: 4,
                    }}
                  >
                    <House className="w-4 h-4" />
                    Home
                  </MotionLink>
                  <MotionLink
                    className={({ isActive }) =>
                      ` ${
                        isActive
                          ? "hover:text-[#6fff6f] transition-all duration-300 "
                          : ""
                      } flex gap-x-1 items-center`
                    }
                    to="/checkout"
                    onClick={() => setOpenMenu(false)}
                    whileTap={{
                      background: "#6fff6f",
                      padding: 2,
                      borderRadius: 4,
                    }}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Checkout
                  </MotionLink>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default Heading;
