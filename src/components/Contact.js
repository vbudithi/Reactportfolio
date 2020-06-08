import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";

export default class Contact extends Component {
  render() {
            
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
               Feel free to contact me for any work or suggestions below
              </p>
              <br />
               <h2>
                    Vivek Budithi
               </h2>
                 <h1>
               <br />
                    vivek.budithi@gmail.com
                  &nbsp;
                    +61XXXXXXXXX          
                  </h1>
            </div>
            <ScrollUpButton /> 
          </div>
        </section>
        );
  }
}