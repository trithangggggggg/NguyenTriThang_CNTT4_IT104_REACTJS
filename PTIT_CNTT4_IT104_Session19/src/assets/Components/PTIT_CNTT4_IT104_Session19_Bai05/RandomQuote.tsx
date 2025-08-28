import React, { useState } from "react";

export default function RandomQuote() {
  const quotes: string[] = [
    "Thể thao là không ngừng bỏ cuộc",
    "Tình yêu là kỳ thi không ai ôn mà ai cũng trượt",
    "Đi làm là trò chơi mà boss luôn thắng, nhân viên luôn chơi lại",
    "Học ngoại ngữ: bắt đầu bằng đam mê, kết thúc bằng Google Translate",
    "Deadline không giết người, chỉ biến người thành xác sống",
    "Cuộc họp càng dài, quyết định càng ngắn",
    "Tiền bạc như gió thoảng, chỉ tiếc gió toàn thổi một chiều",
    "Đời là chuyến đi, chỉ tiếc vé khứ hồi chưa bao giờ bán",
    "Thất bại chẳng đáng sợ, đáng sợ là chẳng có gì để thất bại",
    "Debug là cuộc gặp gỡ giữa kiên nhẫn và sự thật",
    "Code tốt là code biết lặng im khi cần thiết"
  ];

  const [current, setCurrent] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrent(quotes[randomIndex]);
  };

  return (
    <div>
      <h2>Câu nói truyền cảm hứng hôm nay:</h2>
      <p>"{current}"</p>
      <button style={{color : 'white', backgroundColor: 'blue'}} onClick={getRandomQuote}>Lấy câu nói mới</button>
    </div>
  );
}
