import React from "react";

export default function Ex05() {
  return (
    <div>
      <div className="bg-cyan-200 bg-opacity-50 w-[250px] h-[250px] flex items-center justify-center rounded-[3px]">
            <div className="bg-cyan-400 w-[150px] h-[150px] flex items-center justify-center relative border border-cyan-300">
                    <p className="text-blue-600">Relative parent</p>
                    <div className="bg-blue-500 text-white px-3 py-2 rounded absolute bottom-0 left-0">
                      Absolute child
                    </div>
            </div>
      </div>
    </div>
  );
} 