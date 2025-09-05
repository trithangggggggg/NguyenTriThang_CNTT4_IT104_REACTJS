import { Logs, Pencil, Trash2 } from "lucide-react";
import type { Contact } from "../types";

type ContactListProps = {
  contacts: Contact[];
  onEdit: (id: number) => void;
};

export default function ContactList({ contacts, onEdit }: ContactListProps) {

  return (
    <div className="bg-white rounded-t-lg shadow ">
      <div>
        <h2 className="text-green-500 font-bold text-lg mb-3 flex items-center pl-3 pt-5 ">
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
                      onClick={() => onEdit(c.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1 hover:bg-blue-700 transition cursor-pointer"
                    >
                      <Pencil size={16}/> Sửa
                    </button>
                    <button
                      type="button"
                      disabled
                      className="bg-red-400 text-white px-3 py-1 rounded flex items-center gap-1 cursor-not-allowed cursor-pointer"
                    >
                      <Trash2 size={16}/> Xóa
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

      
    </div>
  );
}

