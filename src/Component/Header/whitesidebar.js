import { HugeiconsIcon } from "@hugeicons/react";
import {
  Home03Icon,
  BarChartHorizontalIcon,
  InvoiceIcon,
} from "@hugeicons/core-free-icons";
// import "./resuable/stylesheet/style.css";

const WhiteSideBar = () => {
  return (
    <nav
      className="font-[Poppins] top-5 left-5 h-[calc(100vh-40px)] fixed flex flex-col items-center p-[9px_18px] rounded-2xl
      shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] text-[#1A237E]
      bg-white/5 backdrop-blur-xl border border-white/10
      xl:max-w-[264px] max-w-[230px] w-full transition-all duration-300"
    >
      <h3 className="text-center font-bold tracking-wide text-[clamp(1rem,2vw,1.5rem)] mb-6 mt-6">
        Data analytics
      </h3>

      <ul className="list-none flex flex-col justify-start w-full gap-[6px] pl-0">
        {/* Link Item */}
        <li>
          <a
            href="#"
            className="group flex items-center gap-[10px] text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px]
              transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)]"
          >
            <span
              className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)]
              group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center"
            >
              <HugeiconsIcon
                icon={Home03Icon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="group-hover:text-white transition-colors duration-300"
              />
            </span>
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center gap-[10px] text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px]
              transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)]"
          >
            <span
              className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)]
              group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center"
            >
              <HugeiconsIcon
                icon={BarChartHorizontalIcon}
                size={23}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="group-hover:text-white transition-colors duration-300"
              />
            </span>
            Table
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center gap-[10px] text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px]
              transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)]"
          >
            <span
              className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)]
              group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center"
            >
              <HugeiconsIcon
                icon={InvoiceIcon}
                size={23}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="group-hover:text-white transition-colors duration-300"
              />
            </span>
            Billing
          </a>
        </li>

        <li>
          <a
            href="#"
            className="group flex items-center gap-[10px] text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px]
              transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)]"
          >
            <span
              className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)]
              group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center"
            >
              <HugeiconsIcon
                icon={BarChartHorizontalIcon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="group-hover:text-white transition-colors duration-300"
              />
            </span>
            Dashboard
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default WhiteSideBar;
