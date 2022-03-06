import React from 'react'

import {Link} from "react-router-dom"
  
  import  {AppBar}  from './../../components/appbar'

  function DashBoardPage  (props){
      return( 
          <>
             <ul>
             <li>
                <Link to="/">sign out</Link>
             </li>

             <li>
                <Link to="/dashboard">Dashboard</Link>
             </li>
         </ul>
          <AppBar/>
        
          </>
      )
  }
  
  export default DashBoardPage 