import {useState} from "react";
import Data from '../Components/data.json'
import './Table.css'


function Table() {
  const[searchTerm,setSearchTerm]=useState("");
return (
  
<>
    <h2>Manager Details</h2>
    <h4>Click The Details To My Database</h4>
   <div className="container">  
       <input type="text" 
        className="form" onChange={(e)=>{
                 setSearchTerm(e.target.value);
        }}/>
        <table cellSpacing={0}>
           <thead>
               <tr>
                   <th>ID</th>
                   <th>Name</th>
                   <th>Designation</th>
                   <th>Team</th>
                   <th>Manager</th>
                   <th>Img</th>
                   <th>Short</th>
               </tr>
           </thead>
           <tbody id="mytable">
             {
         Data.filter((val)=>{
              if(searchTerm === ""){
                
                return val;
              }else if(
                val.id.toLowerCase().includes(searchTerm.toLowerCase())||
                val.manager.toLowerCase().includes(searchTerm.toLowerCase())
                
         ){
                return val;
         }
         }).map((users)=>( 
       <tr key={users.id}>
             <td>{users.id}</td>
             <td>{users.name}</td>
             <td>{users.designation}</td>
             <td>{users.team}</td>
             <td>{users.manager}</td>
             <td>{users.img}</td>
             <td>{users.short}</td>
        </tr>

                 ))
             }
           </tbody>
        </table>

   </div>
</>
    )
}

export default Table
