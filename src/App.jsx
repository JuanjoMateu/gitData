import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "./redux/userSlice";
import Card from "./components/Card";
import './App.css'

function App() {
  const [inputUser, setInputUser] = useState("")
  const [doFetch, setDoFetch] = useState(false)
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault()
    setDoFetch(!doFetch)
  }

  useEffect(() => {
    async function fetchUser() {
      if (inputUser.trim() != '') {
        const response = await fetch(`https://api.github.com/users/${inputUser.trim()}`)
        const data = await response.json()
        dispatch(addUser(data))
        setLoading(false)
      }
    }
    fetchUser()
  }, [doFetch])
  return (
    <>
      <h1>Buscador de Usuarios</h1>
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Introduce usuario" value={inputUser} onChange={(e) => setInputUser(e.target.value)} />
        <button type="submit" >Buscar Usuario</button>
      </form>
      {!loading ?  <Card /> : ''}
    </>
  );
}
export default App;
