import react from "react";
import "./header.css"

export function Header (){
    return(
        <>
        <div className= "header">
           <div className = "headerTitles">
            <span className="headerTitlesm">React & Node</span>
            <span className="headerTitlelg">BLOG</span>
           </div>
           <img className="headerImage" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="not found"/>
        </div>
        </>
    )
}