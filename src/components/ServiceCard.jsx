/* eslint-disable react/prop-types */
const ServiceCard = ({ item }) => {
  return (
    <>
      <div className="bg-white max-w-[1024px] flex justify-center gap-4 py-10 px-5 rounded-md border-2 border-solid border-white shadow-2xl max-sm:px-3  overflow-auto ">
        <div>
          <img
            src={item?.icon}
            alt="web development"
            className=" min-w-8 max-w-18 hover:scale-125 duration-200"
          />
        </div>
        <div>
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
