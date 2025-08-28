import React, { useRef } from "react";

export default function ScrollToSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div style={{ background: "#007BFF", color: "white", padding: "50px 20px", textAlign: "center" }}>
        <h1> Cuộn tới nội dung</h1>
        <button
          onClick={handleScroll}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #333",
            cursor: "pointer",
          }}
        >
          Đi tới phần nội dung
        </button>
      </div>

      <div style={{ padding: "30px", background: "#f2f2f2", minHeight: "500px" }}>
        <p>Đây là nội dung giả lập để tạo khoảng cách cho trang</p>
        <p>Bạn có thể thêm nhiều đoạn như thế này để tăng chiều dài</p>
        <p>Cuộn trang sẽ mượt mà hơn khi có nhiều nội dung.</p>
      </div>

      <div ref={sectionRef} style={{ padding: "50px" }}>
        <h2> Phần nội dung mục tiêu</h2>
        <p>Đây là nơi nút sẽ cuộn tới</p>
      </div>
    </div>
  );
}
