import React from "react";

export default function Ex08() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h3 className="text-gray-600 mb-4">phần tử bên trái</h3>
        <div className="flex gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 mb-4">phần tử bên phải</h3>
        <div className="flex justify-end gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 mb-4">phần tử ở giữa</h3>
        <div className="flex justify-center gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 mb-4">phần tử hai bên</h3>
        <div className="flex justify-between">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 mb-4">phần tử đều 2 bên</h3>
        <div className="flex justify-around">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>

      <div>
        <h3 className="text-gray-600 mb-4">phần tử giữa đều</h3>
        <div className="flex justify-evenly">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">01</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">02</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">03</div>
        </div>
      </div>
    </div>
  );
}
