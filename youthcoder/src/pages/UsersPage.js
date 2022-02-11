import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import NavbarComponent from '../components/NavbarComponent';
import JumbotronUsersComponent from '../components/JumbotronUsersComponent';
import ListUsersComponent from '../components/ListUserComponent';
import Footer from '../components/FooterComponent';

function UsersPage() {
  // sebagai penampung API kita
  const [users, setUserList] = useState([]);

  // useEffect berfungsi untuk meminta request ke API ketika komponen berhasil di Mount atau di load
  useEffect(() => {
    //  mengambil data
    axios.get('http://localhost:3004/users').then((res) => {
      console.log(res.data);
      // ketika tidak ada data didalam res, maka axios akan mereturn array kosong
      setUserList(res?.data ?? []);
    });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <JumbotronUsersComponent />
      <ListUsersComponent data={users} />
      <Footer />
    </div>
  );
}

export default UsersPage;
