export default function Loader() {
  return (
    <>
      <div className="h-3/4 w-full flex justify-center items-center">
        {/* <span className="loading loading-bars loading-lg mt-8"></span> */}
        {/* <span className="loading loading-spinner w-40 h-40"></span> */}
        <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-blue-600"></div>
      </div>
    </>
  );
}
