/* eslint-disable react/prop-types */

const SectionTitle = ({ title }) => {
  return (
    <div className="mb-12 flex items-center justify-center  cursor-context-menu">
      <h1
        className={`px-6 py-1 rounded-lg border-b-8 border-solid border-green-200 text-nowrap text-6xl font-OpenSansExtraBold max-md:text-4xl max-sm:text-4xl`}
      >
        {title ? title : ""}
      </h1>
    </div>
  );
};
export default SectionTitle;
