import React from 'react';
import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
} from "react-router-dom";
import profile from "./2.jpeg"
import './style.css';
const Zuri=()=>{
    return(
        <div>
             <img src={profile} alt="yy" id='profile__img'/> 

             <div class="profile-name">Friday Blessed</div>
              <a href="https://twitter.com/FridayBlessed13" class="links">Twitter Link</a>
              <a href="https://training.zuri.team/" class="links">Zuri Team</a>
              <a href="https://books.zuri.team" class="links">Zuri Books</a>
         <a href="https://books.zuri.team" class="links">Python Book </a>
         <a href="background.zuri.team" class="links">Background Checks for Codes</a>
         <a href="https://books.zuri.team/design-rules" class="links">Design Books</a>
          <div class="container"> 
              <div> <i class="fa-brands fa-github "></i>
               <i class="fa-brands fa-slack"></i>
              </div>
        </div>
    
        {/* <div class="bottom-text">Zuri<span style="color: red;" > .</span>Internship</div> */}
    
        <div class="footer">HNG Internship 9 Frontend Task</div>
     
     </div>
    

   
    )
}

export default Zuri;