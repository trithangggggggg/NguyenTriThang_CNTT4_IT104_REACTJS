import { UserPlus } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import type { Contact } from "../types";

type AddNewContactProps = {
  contacts: Contact[];
  editingContact: Contact | null;
  onSave: (draft: { id?: number; name: string; phone: string }) => void;
  onCancelEdit: () => void;
};

export default function AddNewContact({ contacts, editingContact, onSave, onCancelEdit }: AddNewContactProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const editId = useMemo(() => (editingContact ? editingContact.id : null), [editingContact]);

  useEffect(() => {
    if (editingContact) {
      setName(editingContact.name);
      setPhone(editingContact.phone);
      setError("");
    } else {
      setName("");
      setPhone("");
      setError("");
    }
  }, [editingContact]);

  const validate = (): boolean => {
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
    if (!trimmedName || !trimmedPhone) {
      setError("Tên và số điện thoại không được để trống");
      return false;
    }
    const isDuplicate = contacts.some(
      (c) => c.phone === trimmedPhone && (editId == null || c.id !== editId)
    );
    if (isDuplicate) {
      setError("Số điện thoại đã tồn tại");
      return false;
    }
    setError("");
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (editId !== null) {
      onSave({ id: editId, name: name.trim(), phone: phone.trim() });
    } else {
      onSave({ name: name.trim(), phone: phone.trim() });
    }
    setName("");
    setPhone("");
  };

  return (
    <div className="rounded-b-lg bg-white border-gray-400 p-4">
      <h2 className="text-green-800 font-semibold text-lg mb-3 flex items-center">
        <UserPlus/> {editId !== null ? "Cập nhật liên hệ" : "Thêm liên hệ mới"}
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
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-700 text-white font-semibold rounded px-4 py-2 whitespace-nowrap hover:bg-green-800 transition"
          >
            {editId !== null ? "Cập nhật" : "Thêm"}
          </button>
          {editId !== null && (
            <button
              type="button"
              onClick={onCancelEdit}
              className="border border-gray-300 rounded px-4 py-2 whitespace-nowrap hover:bg-gray-100 transition"
            >
              Hủy
            </button>
          )}
        </div>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
}

