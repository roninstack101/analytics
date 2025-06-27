import { HugeiconsIcon } from "@hugeicons/react";
import { Menu01Icon, UserCircleIcon } from "@hugeicons/core-free-icons";

const Whiteheader = () => {
  return (
    <header className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] py-4 flex items-center justify-between ">
      <div className="flex gap-3 items-center">
      <button
        onClick={""}
        className="flex sm:flex md:hidden xl:hidden items-center gap-2 text-white bg-transparent px-2 py-2 rounded-md transition "
      >
        <HugeiconsIcon
          icon={Menu01Icon}
          size={30}
          color="black" 
        //   rgb(0,103,216)
          strokeWidth={2}
        />
      </button>
      <h2 className="font-bold tracking-wide text-[clamp(1.5rem,2.5vw,4rem)] ">Dashboard</h2>
      </div>
      <button
      onClick={''}
      className="rounded-[21px] bg-black/40 backdrop-blur-xl border-none flex  p-[5px] items-center gap-2 justify-center text-[17px] pl-2 text-white" >
        Profile
         <HugeiconsIcon
      icon={UserCircleIcon}
      size={32}
      color="#000000"
      strokeWidth={2}
    />
      </button>
    </header>
  );
};

export default Whiteheader;
