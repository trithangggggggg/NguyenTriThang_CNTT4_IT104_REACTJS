import React from "react";

export default function App() {
  return (
    <body className="bg-gray-100 min-h-screen p-4 sm:p-6 md:p-10">
      <header>
        <button
          type="button"
          className="w-full max-w-4xl mx-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <i className="fas fa-user-plus"></i>
          <span className="text-lg sm:text-xl">Quản Lý Thành Viên</span>
        </button>
      </header>

      <section className="max-w-4xl mx-auto mt-6 bg-white rounded-lg shadow-sm p-5 flex flex-col gap-3">
        <div className="flex items-center gap-1 text-gray-800 font-semibold text-sm select-none">
          <i className="fas fa-plus"></i>
          <span>Thêm thành viên mới</span>
        </div>
        <form className="flex flex-wrap gap-3 sm:gap-4">
          <input
            type="text"
            placeholder="Tên thành viên"
            className="min-w-[140px] max-w-[220px] border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="min-w-[140px] max-w-[220px] border border-gray-300 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
          />
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400">
            <option>Hoạt động</option>
            <option>Bị khóa</option>
          </select>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Thêm
          </button>
        </form>
      </section>

      <section className="max-w-4xl mx-auto mt-8 bg-white rounded-lg shadow-sm p-5">
        <h2 className="font-semibold text-gray-800 mb-4">
          Danh sách thành viên
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-700 border border-gray-200 rounded-md">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 border-r border-gray-200 font-semibold">
                  Tên thành viên
                </th>
                <th className="px-4 py-3 border-r border-gray-200 font-semibold">
                  Số điện thoại
                </th>
                <th className="px-4 py-3 border-r border-gray-200 font-semibold">
                  Trạng thái
                </th>
                <th className="px-4 py-3 font-semibold">Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-100">
                  <a href="#" className="text-blue-600 hover:underline">
                    Nguyễn Văn An
                  </a>
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  0987654321
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                    Hoạt động
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Sửa
                  </button>
                  <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Xóa
                  </button>
                </td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-100">
                  <a href="#" className="text-blue-600 hover:underline">
                    Trần Thị Bình
                  </a>
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  0912345678
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  <span className="inline-block bg-orange-100 text-orange-700 text-xs font-medium px-2 py-0.5 rounded">
                    Bị khóa
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Sửa
                  </button>
                  <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Xóa
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-4 py-3 border-r border-gray-100">
                  <a href="#" className="text-blue-600 hover:underline">
                    Lê Văn Cường
                  </a>
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  0905558889
                </td>
                <td className="px-4 py-3 border-r border-gray-100">
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-2 py-0.5 rounded">
                    Hoạt động
                  </span>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button className="text-blue-600 border border-blue-600 rounded px-3 py-1 text-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400">
                    Sửa
                  </button>
                  <button className="text-red-600 border border-red-600 rounded px-3 py-1 text-sm hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400">
                    Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 text-gray-700 text-sm select-none">
          <nav className="flex items-center gap-1" aria-label="Pagination">
            <button
              className="p-1 rounded text-gray-400 cursor-not-allowed"
              aria-disabled="true"
              aria-label="Previous page"
            >
              &lt;
            </button>
            <button
              className="px-3 py-1 rounded border border-blue-600 bg-blue-600 text-white font-semibold"
              aria-current="page"
            >
              1
            </button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">2</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">3</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">4</button>
            <button className="px-3 py-1 rounded hover:bg-gray-100">5</button>
            <span className="px-2">...</span>
            <button className="px-3 py-1 rounded hover:bg-gray-100">100</button>
            <button
              className="p-1 rounded text-gray-600 hover:bg-gray-200"
              aria-label="Next page"
            >
              &gt;
            </button>
          </nav>

          <select
            aria-label="Số bản ghi trên trang"
            className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            title="Chọn số bản ghi trên trang"
            name="recordsPerPage"
          >
            <option value="1" selected>1 bản ghi / trang</option>
            <option value="3">3 bản ghi / trang</option>
            <option value="7">7 bản ghi / trang</option>
            <option value="8">10 bản ghi / trang</option>
          </select>
        </div>
      </section>
    </body>
  );
}
