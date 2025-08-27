import React, { useMemo } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};

export default function UserList() {
  const users: User[] = [
    {
      id: 1,
      name: "tri thang",
      age: 20,
    },
    {
      id: 2,
      name: "thanh ha",
      age: 20,
    },
    {
      id: 3,
      name: "unndefined",
      age: 15,
    },
  ];

  const filterUsers = useMemo(() => {
    return users.filter((user) => user.age >18);
  }, [users]);

  return (
    <div className="css">
      <h2>Danh sach nguoi tren 18 tuoi:</h2>
      <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} tuoi
          </li>
        ))}
      </ul>
    </div>
  );
}
