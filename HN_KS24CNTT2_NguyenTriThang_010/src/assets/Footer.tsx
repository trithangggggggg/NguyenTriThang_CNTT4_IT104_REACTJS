import React, { useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function App() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Nguyễn Văn A", phone: "0912345678" },
    { id: 2, name: "Trần Thị B", phone: "0987654321" },
    { id: 3, name: "Lê Văn C", phone: "0901234567" },
  ]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [editId, setEditId] = useState<number | null>(null);

  // modal state
  const [deleteId, setDeleteId] = useState<number | null>(null);

  // validate dữ liệu
  const validate = (): boolean => {
    if (!name.trim() || !phone.trim()) {
      setError("Tên và số điện thoại không được để trống");
      return false;
    }
    if (
      contacts.some(
        (c) => c.phone === phone && (editId === null || c.id !== editId)
      )
    ) {
      setError("Số điện thoại đã tồn tại");
      return false;
    }
    setError("");
    return true;
  };

  // thêm mới / update
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (editId) {
      setContacts((prev) =>
        prev.map((c) =>
          c.id === editId ? { ...c, name: name.trim(), phone: phone.trim() } : c
        )
      );
      setEditId(null);
    } else {
      setContacts((prev) => [
        ...prev,
        { id: Date.now(), name: name.trim(), phone: phone.trim() },
      ]);
    }
    setName("");
    setPhone("");
  };

  // sửa
  const handleEdit = (id: number) => {
    const contact = contacts.find((c) => c.id === id);
    if (!contact) return;
    setName(contact.name);
    setPhone(contact.phone);
    setEditId(id);
    setError("");
  };

  // xóa
  const confirmDelete = () => {
    if (deleteId) {
      setContacts((prev) => prev.filter((c) => c.id !== deleteId));
    }
    setDeleteId(null);
  };

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      <div className="max-w-4xl mx-auto p-4">
        <header className="bg-green-700 rounded-t-lg py-4 px-6 flex items-center justify-center">
          <i className="fas fa-address-book text-white text-xl mr-2"></i>
          <h1 className="text-white font-bold text-lg md:text-xl">
            Quản Lý Liên Hệ
          </h1>
        </header>

        <section className="bg-white rounded-b-lg shadow p-4 mt-4">
          <h2 className="text-green-800 font-semibold text-lg mb-3 flex items-center">
            <i className="fas fa-user-plus mr-2"></i>{" "}
            {editId ? "Cập nhật liên hệ" : "Thêm liên hệ mới"}
          </h2>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Tên liên hệ"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <input
              type="text"
              placeholder="Số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="submit"
              className="bg-green-700 text-white font-semibold rounded px-4 py-2 whitespace-nowrap hover:bg-green-800 transition"
            >
              {editId ? "Cập nhật" : "Thêm"}
            </button>
          </form>
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </section>

        <section className="bg-white rounded-lg shadow p-4 mt-6">
          <h2 className="text-green-800 font-semibold text-lg mb-3 flex items-center">
            <i className="fas fa-list mr-2"></i> Danh sách liên hệ
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-700">
              <thead className="bg-gray-100 border-b border-gray-300">
                <tr>
                  <th className="py-2 px-4 font-semibold text-sm">
                    Tên liên hệ
                  </th>
                  <th className="py-2 px-4 font-semibold text-sm">
                    Số điện thoại
                  </th>
                  <th className="py-2 px-4 font-semibold text-sm">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((c) => (
                  <tr key={c.id} className="border-b border-gray-200">
                    <td className="py-3 px-4">{c.name}</td>
                    <td className="py-3 px-4">{c.phone}</td>
                    <td className="py-3 px-4">
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          onClick={() => handleEdit(c.id)}
                          className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700 transition"
                        >
                          <i className="fas fa-edit"></i> Sửa
                        </button>
                        <button
                          type="button"
                          onClick={() => setDeleteId(c.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-red-700 transition"
                        >
                          <i className="fas fa-trash-alt"></i> Xóa
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                {contacts.length === 0 && (
                  <tr>
                    <td colSpan={3} className="text-center py-4 text-gray-500">
                      Chưa có liên hệ nào
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Modal xác nhận xóa */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80">
            <h3 className="text-lg font-semibold mb-4">Xác nhận xóa</h3>
            <p className="mb-4">Bạn có chắc muốn xóa liên hệ này?</p>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
