import LogoPicture from "../../assets/pictures/logo2.jpg";

function Logo() {
  return (
    <a
      href="#"
      className=" flex justify-center items-center gap-1 cursor-pointer"
    >
      <img src={LogoPicture} alt="alshimaa_logo" className="w-14 h-14" />
      <h6 className="font-OpenSansExtraBold text-xl flex items-center justify-center gap-1">
        <span>Alshimaa</span>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
      </h6>
    </a>
  );
}

export default Logo;
