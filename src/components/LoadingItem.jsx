import { RotatingLines } from "react-loader-spinner";

function LoadingItem() {
  return (
    <>
      <RotatingLines
        visible={true}
        height="44"
        width="44"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
}

export default LoadingItem;
