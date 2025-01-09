// src/components/DataCard.jsx
import React from "react";

const DataCard = ({ title, value }) => {
  const isLoading = value === "Loading...";
  const isError = value?.includes("Error:");

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      <div className="p-4 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-white">
        <h3 className="text-lg font-semibold text-blue-600 capitalize">
          {title}
        </h3>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ) : isError ? (
          <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
            {value}
          </div>
        ) : (
          <pre className="text-sm font-mono bg-gray-50 p-3 rounded-lg overflow-x-auto whitespace-pre-wrap break-words max-h-[300px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {JSON.stringify(JSON.parse(value), null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default DataCard;