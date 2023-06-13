import {  useState } from "react";
import Navbar from "./components/Navbar2";
import UserList from "./components/UserList";
import axios from 'axios'
import Alert from "./components/Alert";
import User2 from "./components/User2";


function App() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);
  

const searchUsers = (search) => {
  
  setLoad(true);

  setTimeout(() => {
      const fetchData = async () => {
      const result = await axios.get("https://api.github.com/search/users?q=" + search );
     
      setUsers(result.data.items);
      setLoad(false);     
    }
    fetchData();
  
  }, 1000); 
}

const clearResults = () =>{
  setUsers([]);
}

const displayAlert = (msg, type) => {
  setError({ msg, type });

  setTimeout(() => {
    setError(null);
  }, 3000);
};






  
  return (
    <div className="App">

      <Navbar searchUsers={searchUsers} clearResults={clearResults} displayAlert={displayAlert}
      showClearButton={users.length > 0 ? true : false} title="Githup Finder" />
      <Alert error={error} />

      <div className="container mt-3">

        <UserList users={users} load ={load} />
     
      </div>
  
     
    </div>
  );
}

export default App;

/* useEffect(()=>{

  setLoad(true);

setTimeout(() => {
    const fetchData = async () => {
    const result = await axios.get("https://api.github.com/users");
   
    setUsers(result.data);
    setLoad(false);     
  }
  fetchData();

}, 2000); 


  
},[]) */
