import { Logs } from "lucide-react";
import React, { useState } from "react";
// import AddNewContact from "./AddNewContact";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Nguyễn Văn A", phone: "0912345678" },
    { id: 2, name: "Nguyễn Thị B", phone: "0987654321" },
  ]);

  // const [name, setName] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    const contact = contacts.find((c) => c.id === id);
    if (!contact) return;
    setContacts()
    // setName(contact.name);
    // setPhone(contact.phone);
    // setEditId(id);
    // setError("");
  };


  return (
    <div className="bg-white rounded-t-lg shadow ">
      <div>
        <h2 className="text-green-500 font-bold text-lg mb-3 flex items-center pl-3 pt-5">
          <Logs className="mr-3" /> Danh sách liên hệ
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-gray-100 border-b border-gray-300">
            <tr>
              <th className="py-2 px-4 font-semibold text-sm">Tên liên hệ</th>
              <th className="py-2 px-4 font-semibold text-sm">Số điện thoại</th>
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
