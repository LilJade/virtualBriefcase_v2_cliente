import { useEffect, useState } from 'react';
import './App.css';
import Routing from './routes/routing';
import {AuthContext } from "./utils/context"
import {isUserLogedApi} from "./api/auth"
function App() {
  const [user, setUser] = useState(null)
  const [loadUser, setLoadUser] = useState(false)
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false)

  useEffect(() => {
   setUser(isUserLogedApi());
   setLoadUser(true);
  }, [refreshCheckLogin])

    if(!loadUser)return null;

  return (
    <AuthContext.Provider value={user}>
    <div className="App">
      <Routing setRefreshCheckLogin={setRefreshCheckLogin}></Routing>
    </div>
  
  </AuthContext.Provider>
);
  }
export default App;
