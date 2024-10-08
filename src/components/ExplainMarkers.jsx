import { FaXmark } from "react-icons/fa6";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiFrozenOrb } from "react-icons/gi";

function ExplainMarkers() {
  return (
    <div className="flex items-center justify-center gap-2 max-sm:gap-1">
      <div className="flex items-center justify-center gap-2 bg-yellow-300 py-2 px-4 rounded max-sm:p-2 max-sm:gap-1">
        <IoCheckmarkSharp className="text-4xl max-sm:text-xl text-yellow-600" />
        <span className="text-yellow-700 font-OpenSansBold text-base max-sm:text-xs uppercase">
          frish
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 bg-yellow-300 py-2 px-4 rounded max-sm:p-2 max-sm:gap-1">
        <GiFrozenOrb className="text-4xl max-sm:text-xl text-yellow-600" />
        <span className="text-yellow-700 font-OpenSansBold text-base max-sm:text-xs uppercase">
          stored
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 bg-yellow-300 py-2 px-4 rounded max-sm:p-2 max-sm:gap-1">
        <FaXmark className="text-4xl max-sm:text-xl text-yellow-600" />
        <span className="text-yellow-700 font-OpenSansBold text-base max-sm:text-xs uppercase">
          none
        </span>
      </div>
    </div>
  );
}

export default ExplainMarkers;
