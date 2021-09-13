import axios from 'axios';
import { useEffect, useState } from 'react';

const api = axios.create({
  baseURL: 'https://613bce1c270b96001798afab.mockapi.io'
})


export function Axios() {
  const [newUser, setNewUser] = useState('')
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


  // LISTA OS USUARIOS DA API
  async function loadData() {
    const response = await api.get('/users', { 
      params: {
        sortBy: 'id',
        order: 'desc'
      } 
    })
    setUsers(response.data)
  }

  async function addNewUser() {
    const { data } = await api.post('/users', { name: newUser }) // ADICIONEI UM NOVO USUARIO


    await loadData()

    setNewUser('')
  }

  async function editUser() {
    const { data } = await api.put(`/users/${selectedUser}`, { name: newUser }) // ADICIONEI UM NOVO USUARIO


    await loadData()

    setNewUser('')
    setSelectedUser(null)
  }

  async function deleteUser(userId) {
    await api.delete(`/users/${userId}`)
    await loadData()

  }

  useEffect(() => {
    loadData();
  }, [])

  return (
    <div>
      <h1>Usuários ({users.length})</h1>

      <input placeholder="nome do usuário" value={newUser} onChange={e => setNewUser(e.target.value)} />
      <button type="button" onClick={selectedUser ? editUser : addNewUser}>{selectedUser ? 'atualizar' : 'adicionar'}</button>

      <ul>
        {users.map(user => {
          return (
            <li>
              <img src={user.avatar} style={{ width: 30, height: 30, borderRadius: 15 }} />
              <strong>{user.name}</strong>

              <button type="button" onClick={() => {
                setSelectedUser(user.id)
                setNewUser(user.name)
              }}>editar</button>

              <button type="button" onClick={() => deleteUser(user.id)}>delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
}


// API




