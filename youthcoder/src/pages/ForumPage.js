import React, { useState, useEffect } from 'react';
import { uid } from 'uid';
import axios from 'axios';
import NavbarComponent from '../components/NavbarComponent';
// import Comments from '../components/comments/CommentsComponent';
import JumbotronForumComponent from '../components/JumbotronForumComponent';
import Footer from '../components/FooterComponent';
import ListRequestComponent from '../components/ListRequestComponent';
import { Container } from 'reactstrap';

function ForumPage() {
  const [request, setRequestList] = useState([]);

  // untuk mengedit data
  // isUpdate dan setIsUpdate ini berisi obejct yaitu id
  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: '',
    title: '',
  });

  // membuat event ketika ada perubahan
  function handleChange(e) {
    // cloning data dari form
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    setFormData(data);
  }

  function handleSubmit(e) {
    // mengcopy data yang ada di state
    let data = [...request];
    // biar gak ngereload terus, kita kasih ini
    e.preventDefault();
    // memberi alert pindah kebawah
    // alert('oke');

    if (formData.name === '') {
      return false;
    }
    if (formData.title === '') {
      return false;
    }

    // pengecekan jika data diedit
    if (isUpdate.status) {
      data.forEach((request) => {
        if (request.id === isUpdate.id) {
          request.name = formData.name;
          request.title = formData.title;
        }
      });

      // (Edit) dengan isUpdate.id dan mengumpan updatean terbaru
      axios
        .put(`http://localhost:3004/request/${isUpdate.id}`, {
          // properti depan harus sesuai key di JSON
          name: formData.name,
          title: formData.title,
        })
        .then((res) => {
          alert('Berhasil mengedit pertanyaan');
        });
    } else {
      // penambahan data / push data
      let newData = {
        id: uid(),
        name: formData.name,
        title: formData.title,
      };
      data.push(newData);

      // (Create) membuat data dengan object
      axios.post('http://localhost:3004/request', newData).then((res) => {
        alert('Berhasil membuat pertanyaan');
      });
    }

    // masuk kedalam const setContacts
    setRequestList(data);
    // mengatur formData menjadi kosong
    setFormData({ name: '', title: '' });
    // mengatur setIsUpdate menjadi false
    setIsUpdate({ id: null, status: false });
  }

  function handleEdit(id) {
    // clone data contacts
    let data = [...request];
    // cari data berdasarkan id didalam const contacts / json
    let foundData = data.find((request) => request.id === id);
    // set formData sesuai data yang kita temukan
    setFormData({ name: foundData.name, title: foundData.title });
    // mengatur setIsUpdate menjadi true dan set juga id-nya
    setIsUpdate({ id: id, status: true });
  }

  function handleDelete(id) {
    // jangan lupa clone data contacts / json nya
    let data = [...request];
    let filteredData = data.filter((request) => request.id !== id);

    // (Delete) dengan id
    axios.delete(`http://localhost:3004/request/${id}`).then((res) => {
      alert('Berhasil menghapus pertanyaan');
    });

    setRequestList(filteredData);
  }

  // useEffect berfungsi untuk meminta request ke API ketika komponen berhasil di Mount atau di load
  useEffect(() => {
    //  mengambil data
    axios.get('http://localhost:3004/request').then((res) => {
      console.log(res.data);
      // ketika tidak ada data didalam res, maka axios akan mereturn array kosong
      setRequestList(res?.data ?? []);
    });
  }, []);
  return (
    <div
      style={{
        backgroundColor: '#e6e6e6',
      }}
    >
      <NavbarComponent />
      <JumbotronForumComponent />
      <Container id="diskusi" className="container-sm">
        <div className="App">
          <h1 className="px-3 py-3">List Pertanyaan</h1>

          <form onSubmit={handleSubmit} className="px-3 py-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label float-start fw-bolder">
                Nama
              </label>
              <input type="text" class="form-control" placeholder="Nama anda" onChange={handleChange} value={formData.name} name="name" />
            </div>
            <div class="mb-3">
              <label htmlFor="title" className="form-label float-start fw-bolder">
                Pertanyaan
              </label>
              <input type="text" class="form-control" placeholder="Pertanyaan anda" onChange={handleChange} value={formData.title} name="title" />
            </div>
            <div>
              <button type="submit" className="btn btn-primary w-100 mt-3">
                Save
              </button>
            </div>
          </form>
        </div>
      </Container>
      <ListRequestComponent handleDelete={handleDelete} handleEdit={handleEdit} data={request} />
      {/* <Comments commentsUrl="http://localhost:3004/comments" currentUserId="1" /> */}
      <Footer />
    </div>
  );
}
export default ForumPage;
