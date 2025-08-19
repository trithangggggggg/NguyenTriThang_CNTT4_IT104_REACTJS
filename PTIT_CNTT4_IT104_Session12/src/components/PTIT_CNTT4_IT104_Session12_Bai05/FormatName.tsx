import React from 'react'

export default function FormatName() {
    const user = {
        firstName : "Nguyen Tri",
        lastName : "Thang",
    };
    function FormatName(user:{firstName:string; lastName:string}):string{
        return `${user.firstName} ${user.lastName}`
    }
  return (
    <div>
      <h1>Họ và tên: {FormatName(user)}</h1>
    </div>
  )
}
