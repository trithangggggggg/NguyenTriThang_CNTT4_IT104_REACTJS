import React, { useEffect } from "react";

export default function Welcome() {
  useEffect(() => {
    console.log("Welcome component đc render lần đầu");
  }, []
);

  return (
    <div>
      <p>Chào mừng bạn đến với ứng dụng của chúng tôi</p>
    </div>
  );
}
