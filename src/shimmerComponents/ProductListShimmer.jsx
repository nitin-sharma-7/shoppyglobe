function ProductListShimmer() {
  return (
    <>
      <div className="py-8 bg-gray-50 pt-10 md:pt-20 -z-10">
        {
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-4/5 my-4 mx-auto animate-pulse">
            <div className="h-10 bg-gray-200 rounded-md w-full md:w-48"></div>
            <div className="h-10 bg-gray-200 rounded-md w-full md:w-64"></div>
          </div>
        }

        <div className="flex flex-wrap gap-x-12 gap-y-16 w-4/5 my-8 mx-auto justify-center">
          {Array(8)
            .fill()
            .map((_, index) => (
              <div
                key={index}
                className="w-64 bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200 w-full"></div>
                <div className="p-4">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-5/6 mb-4"></div>
                  <div className="h-8 bg-gray-200 rounded w-full"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default ProductListShimmer;
