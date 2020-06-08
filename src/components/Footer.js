import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

export default class Footer extends Component {
    render(){
         let resumeData = this.props.resumeData;
         return(
             <footer>
                 <div className="row">
                     <div className="twelve columns">
                          &copy; Copyright 2020 Vivek Budithi
                            <ul className ="social-links">
                              {
                                 resumeData.socialLinks && resumeData.Data.scoialLinks.map ((item) => {
                                     return(
                                         <li>
                                             <a href = {item.url}>
                                               <i className ={item.className} />
                                             </a>
                                         </li>
                                     )
                                 })
                              }
                            </ul>
                     </div>    
                 </div>
             </footer>
         );
    }

}