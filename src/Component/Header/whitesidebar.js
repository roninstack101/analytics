import { HugeiconsIcon } from "@hugeicons/react";
import { Home03Icon } from "@hugeicons/core-free-icons";
import "./resuable/stylesheet/style.css";

// const styles = {
//   baseContainer: {
//     height: "94.5%",
//     display: "flex",
//     flexDirection: "column",
//     position: "fixed",
//     background: "rgb(255 255 255 / 12%)",

//     borderRadius: "21px",
//     alignItems: "center",
//     color: "#1A237E",
//     padding: "9px 18px",
//     boxShadow:
//       "rgb(78 76 76 / 30%) 0px 4px 8px 0px, rgb(255 255 255 / 35%) 0px 6px 20px 0px",
//     width: "clamp(200px, 15vw, 300px)",
//     transition: "width 0.3s ease",
//   },

//   mainContent: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "start",
//     width: "100%",
//   },

//   option: {
//     display: "flex",
//   },

//   iconContainer: {
//     width: "35px",
//     height: "35px",
//     borderRadius: "14px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   list: {
//     listStyle: "none",
//     display: "flex",
//     flexDirection: "column",
//     gap: "6px",
//     paddingInlineStart: "0",
//   },

//   listItems: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "center",
//     fontSize: "1rem",
//     fontWeight: "500",
//     padding: "6px 14px",
//     borderRadius: "5px",
//   },
// };

const Sidebar = () => {
  return (
    <div
      className="top-[15px] left-[15px] h-[calc(100vh-30px)] w-[clamp(200px,17vw,335px)] flex flex-col items-center  p-[9px_18px] rounded-[21px]
    shadow-[0_4px_8px_rgba(78,76,76,0.3),_0_6px_20px_rgba(255,255,255,0.35)] text-[#1A237E] transition-[width] duration-300 ease-in-out fixed bg-white/5 backdrop-blur-xl shadow-[(0_8px_30px_rgba(0,0,0,0.1)] border border-white/10"
    >
      <h3 className="text-[clamp(1.3rem,1.5vw,2.25rem)] font-bold text-blue-900 mb-6 mt-6">
        Data analytics
      </h3>
      {/* <hr /> */}
      <div className="flex flex-col justify-start w-full">
        <ul className="list-none flex flex-col gap-[6px] pl-0">
          <li className="group flex gap-[10px] items-center text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px] transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)] hover:font-medium ">
            <div className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)] group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center">
              <HugeiconsIcon
                icon={Home03Icon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="transition-colors duration-300  group-hover:text-white"
              />
            </div>
            Home
          </li>

          <li className="group flex gap-[10px] items-center text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px] transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)] hover:font-medium ">
            <div className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)] group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center">
              <HugeiconsIcon
                icon={Home03Icon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="transition-colors duration-300 group-hover:text-white"
              />
            </div>
            Home
          </li>

          <li className="group flex gap-[10px] items-center text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px] transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)] hover:font-medium ">
            <div className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)] group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center">
              <HugeiconsIcon
                icon={Home03Icon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="transition-colors duration-300 group-hover:text-white"
              />
            </div>
            Home
          </li>

          <li className="group flex gap-[10px] items-center text-base font-medium px-[14px] py-[6px] rounded-[5px] p-[10px] transition-colors duration-300 hover:bg-[rgba(140,206,247,0.47)] hover:font-medium ">
            <div className="transition-colors duration-300 bg-[rgba(0,114,236,0.18)] group-hover:bg-[rgb(0,103,216)] w-[35px] h-[35px] rounded-[14px] flex items-center justify-center">
              <HugeiconsIcon
                icon={Home03Icon}
                size={25}
                color="rgb(0 103 216)"
                strokeWidth={2}
                className="transition-colors duration-300 group-hover:text-white"
              />
            </div>
            Home
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
