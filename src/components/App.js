/* import React, {useState, useEffect} from 'react';
import '../index.css';
//import axios from 'axios'

const API = 'https://jsonplaceholder.typicode.com/users'

const App = () => {
  const [usuarios, SetUsuarios] = useState([]);
//usando fetch
  useEffect(() => {
    fetch(API)
    .then((response) => response.json())
    .then((data) => SetUsuarios(data))
    
    .catch((error) => console.error(error))
  }, [])
console.log(usuarios)
  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Enlace</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) =>{ 
            return(
            <tr key={usuario.id}>
              <td>{usuario.name}</td>
              <td>{usuario.email}</td>
              <td>{usuario.website}</td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default App; */
import React, {useState, useEffect} from 'react';
import '../index.css';
import axios from 'axios'


//usando Axios
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(resp => {
        setUsers(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  return (
    <div className="margen">
      <table className="tabla">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.link}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
export default App;