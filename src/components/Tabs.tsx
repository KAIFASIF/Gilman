import React, { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const Tabs = ({ tabArray, data, setShowCopiedMessage }: any) => {
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    setFilteredData(filterPayload(tabArray[0]));
  }, []);

  const handleClick = (ele: string) => {
    setFilteredData(filterPayload(ele));
  };

  const filterPayload = (item: string) => {
    return data
      .filter((ele: any) => ele?.ostype === item.toLowerCase())
      .sort((a: any, b: any) => parseInt(a.index) - parseInt(b.index));
  };

  const handleCopy = (text: string) => {
    setShowCopiedMessage(true);
    navigator.clipboard.writeText(text);
    setTimeout(() => {
      setShowCopiedMessage(false);
    }, 1000);
  };

  return (
    <div className="w-full">
      <div
        className={`grid grid-cols-${tabArray.length} p-2  gap-2 w-full  bg-gray-200`}
      >
        {tabArray.length > 0 &&
          tabArray.map((ele: string, index: number) => (
            <button
              key={index}
              className="bg-white text-black p-2 hover:bg-gray-500 hover:text-white"
              onClick={() => handleClick(ele)}
            >
              {ele}
            </button>
          ))}
      </div>

      <div
        className={`w-full mt-6 grid ${
          filteredData[0]?.ostype === "commands" ? "grid-cols-4" : "grid-cols-1"
        }`}
      >
        {filteredData.length > 0 &&
          filteredData.map((ele: any, index: number) => (
            <div className="p-4" key={index}>
              <p className={`${!ele?.step && "hidden"}`}>step {ele?.index}</p>
              <p
                className={`text-lg
                 text-semibold ${!ele?.description && "hidden"}`}
              >
                {ele?.description}
              </p>
              <div className="bg-gray-800 flex  justify-between mt-2 p-4">
                <p className="text-white"> {ele?.command} </p>
                <MdOutlineContentCopy
                  className="text-white cursor-pointer hover:text-green-400"
                  onClick={() => handleCopy(ele?.command)}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default React.memo(Tabs);
