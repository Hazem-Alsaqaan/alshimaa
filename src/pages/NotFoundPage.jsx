import errorPic from "../assets/pictures/error404.gif";
function NotFoundPage() {
  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center justify-center p-10">
      <img src={errorPic} alt="404" className="w-36 h-36" />
      <h1 className="text-5xl text-green-500 capitalize max-sm:text-3xl font-OpenSansExtraBold text-center animate-pulse">
        Error 404 page not found...
      </h1>
    </div>
  );
}

export default NotFoundPage;
