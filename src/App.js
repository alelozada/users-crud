import './App.css';
import { useEffect, useState } from 'react';
import getAllUsers from './services/getAllUsers';
import UserCard from './components/UserCard';
import CreateUserForm from './components/CreateUserForm';
import createNewUser from './services/createNewUser';
import deleteUser from './services/deleteUser';
import editUser from './services/editUser';
import EditForm from './components/EditForm';

function App() {

  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState({})
  const [deleteId, setDeleteId] = useState('')
  const [editDefValues, setEditDefValues] = useState({})
  const [editFormRes, setEditFormRes] = useState({})
  const [displayForm, setDisplayForm] = useState(false)


  useEffect(() => {
    getAllUsers()
      .then( (response) => {
        console.log(response.data)
        setUsers(response.data)
      })
  }, [])

  useEffect(() => {
    if (newUser.email) {
      createNewUser(newUser)
        .then((response) => {
          console.log(response.data)
          setUsers([...users, response.data])
          setNewUser({})
        })
    } else {
      console.log('No se encontró ningún valor para hacer una petición.');
    }
  }, [newUser, users])

  useEffect(() => {
    
    const filterUsers = (id) => {
      const newArr = users.filter((user) => id !== user.id)
      return newArr
    }

    if(deleteId){
      deleteUser(deleteId)
        .then(() => {
          setUsers(filterUsers(deleteId))
          setDeleteId('')
        })
    } 
  }, [deleteId, users])

  useEffect(() => {

    const filterUsers = (id) => {
      const newArr = users.filter((user) => id !== user.id)
      return newArr
    }

    if(editFormRes.id){
      editUser(editFormRes.id, editFormRes)
        .then((response) => {
          console.log(response.data)
          setUsers([response.data, ...filterUsers(editFormRes.id)])
          setEditFormRes({})
        })
    }
  }, [editFormRes, users])

  const handlerOnCreateUser = (event) => {
    setNewUser(event)
  }

  const handlerOnDelete = (id) => {
    setDeleteId(id)
  }

  const handlerOnEdit = (object) => {
    setEditDefValues(object)
  }

  const handlerOnEditUser = (data) => {
    setEditFormRes(data)
  }

  const usersList = users.map( (item) => <UserCard userObj={item} onDelete={handlerOnDelete} onEdit={handlerOnEdit} key={item.id} />)

  return (
    <div className="App">
      <header className="App-header">
        <EditForm onEdit={handlerOnEditUser} defValues={editDefValues} />
        <button onClick={() => setDisplayForm(!displayForm)} >New User</button>
        {displayForm && <CreateUserForm onCreate={handlerOnCreateUser} />}
        
        {usersList}
      </header>
    </div>
  );
}

export default App;
