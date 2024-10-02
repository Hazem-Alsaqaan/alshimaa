/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
  return (
    <>
      <h1
        className={`text-center text-nowrap text-6xl font-OpenSansExtraBold mb-12 max-md:text-4xl max-sm:text-4xl`}
      >
        {title ? title : ""}
      </h1>
    </>
  );
};
export default SectionTitle;
