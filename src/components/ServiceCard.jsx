/* eslint-disable react/prop-types */
const ServiceCard = ({ item }) => {
  return (
    <>
      <div className="bg-white max-w-[1024px] flex justify-center max-[510px]:flex-col max-[510px]:items-center gap-4 py-10 px-5 rounded-md border-2 border-solid border-white shadow-2xl max-sm:px-3  overflow-auto ">
        <div className="w-36 max-sm:w-28">
          <img
            src={item?.icon}
            alt="web development"
            className="hover:scale-125 duration-200"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-green-700 font-OpenSansExtraBold text-xl mb-2 whitespace-nowrap max-sm:text-base">
            {item?.title}
          </h1>
          <p className="font-OpenSansMedium max-sm:text-sm max-xsm:text-xs leading-8">
            {item?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
