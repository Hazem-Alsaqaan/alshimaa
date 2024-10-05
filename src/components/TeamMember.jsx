/* eslint-disable react/prop-types */
import whatsapp_icon from "../assets/pictures/whatsapp_2504957.png";
import PictureItem from "./PictureItem";

function TeamMember({ item }) {
  return (
    <div className="bg-white rounded-md  flex ">
      <div className="flex-1 p-3 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-OpenSansBold capitalize">
            {item.username}
          </h2>
          <p className="text-neutral-400 font-OpenSansSemiBold text-sm">
            {item.job_title}
          </p>
        </div>
        <div className="flex items-center mt-4">
          <a
            className="w-8 h-8 flex items-center"
            href={`https://wa.me/+2${item.phone}`}
            target="_blank"
            title="What'sApp"
          >
            <img src={whatsapp_icon} alt="" />
            <span className="text-xs ml-1">{`What'sApp`}</span>
          </a>
        </div>
      </div>
      <div className=" -translate-y-10 w-24 h-24 bg-yellow-300 rounded-full border-8 border-solid border-neutral-100 overflow-hidden">
        <PictureItem
          productPhoto={item.picture}
          width={"full"}
          height={"full"}
        />
      </div>
    </div>
  );
}

export default TeamMember;
