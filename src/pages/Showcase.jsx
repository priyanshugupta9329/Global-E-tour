import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topimage from '../components/Topimage'
import "./css/showcase.css";


export default function Showcase() {
  let navigate = useNavigate();
  return (
    <div>

        <div>
            <Topimage />
        </div>
        <div class="my-3">
         <button type="button" class="btn continue" onClick={()=> navigate("/home")}>
         <b class="text-black">Continue</b>
         </button>
 
        </div>
    
    </div>
  )
}
