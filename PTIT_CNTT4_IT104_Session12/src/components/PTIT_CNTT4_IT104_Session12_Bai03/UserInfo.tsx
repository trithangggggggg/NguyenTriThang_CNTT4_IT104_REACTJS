import React from 'react'

export default function UserInfo() {
    const fullName:string = "Nguyen Tri Thang";
    const gioitinh:string = "Nam";
    const ngaySinh:string = "02/02/2006";
    const email:string = "trithang2006vn@gmail.con";
    const address:string = "HaiDuong"
  return (
    <div>
        <h1>Thông tin các nhân</h1>
        <ul>
            <li>Họ và tên: {fullName}</li>
            <li>Giới tính: {gioitinh}</li>
            <li>Ngày sinh: {ngaySinh}</li>
            <li>email    : {email}</li>
            <li>Địa chỉ: {address}</li>
        </ul>
    </div>
  )
}
