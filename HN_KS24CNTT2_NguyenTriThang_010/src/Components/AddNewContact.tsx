import { UserPlus } from "lucide-react";
import React, { useState } from "react";
// import ContactList from "./ContactList";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

export default function AddNewContact() {

  
  const [contacts, setContacts] = useState<Contact[]>([
    { id: 1, name: "Nguyễn Văn A", phone: "0324234234" },
    { id: 2, name: "Nguyễn Thị B", phone: "02343242342" },
    { id: 3, name: "Nguyễn Văn C", phone: "023423423423" },
  ]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const [editId, setEditId] = useState<number | null>(null);

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

  return (
    <div className="rounded-b-lg bg-white border-gray-400 p-4">
      <h2 className="text-green-800 font-semibold text-lg mb-3 flex items-center">
        <UserPlus/>{" "}
        {editId ? "Cập nhật liên hệ" : "Thêm liên hệ mới"}
      </h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
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
    </div>
  );
}
