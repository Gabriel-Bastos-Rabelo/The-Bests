import React, { useState } from 'react'
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./NavBar.css"
function NavBar() {

  const [search, setSearch] = useState("")
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(search)
    if(search){
      navigate(`/search?q=${search}`);
      setSearch("");
    }

    else{
      return;
    }


  }
  return (
   <nav id="navbar">

    <h2>
    <Link to = "/"><BiCameraMovie/>The bests</Link>
    
    </h2>
    
    <form onSubmit={handleSearch}>

        <input type="text" placeholder='Busque um filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
        <button type = "submit"><BiSearchAlt2/></button>
    </form>

   </nav>
  )
}

export default NavBar