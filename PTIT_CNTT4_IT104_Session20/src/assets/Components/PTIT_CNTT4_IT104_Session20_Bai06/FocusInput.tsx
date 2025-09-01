import React, { useEffect, useRef, useState } from "react";

export default function FocusInput() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(isOpen){
        isRef.current?.focus();
    }
  }, [isOpen]);
  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Chúng tôi đơn giản là đầu gấu</h2>
      <button onClick={handleOpen}>Mở Modal</button>
      {isOpen && (
        <div>
          <h1>Dang nhap</h1>
          <input ref={isRef} type="text" placeholder="Nhap ten nguoi dung " />
          <br />
          <button onClick={handleClose}>Đóng </button>
        </div>  
      )}
    </div>
  );
}
