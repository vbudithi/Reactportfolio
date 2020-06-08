import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
               <li><a className="smoothscroll" href="#resume">ABOUT</a></li>
               <li><a className="smoothscroll" href="#portfolio">WORKS</a></li>
               <li><a className="smoothscroll" href="#contact">CONTACT</a></li>
            </ul>
         </nav> 

         <div className="row banner">
              <div className="banner-text">
                     <div className="three columns">
 
                           <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

                       </div>

                <h1 className="responsive-headline">{resumeData.name}.</h1>
         
                    <h4 style={{color:'#fff', fontFamily:'sans-serif '}}> I am a {resumeData.role}.{resumeData.roleDescription}
                    </h4>
                           <hr/>
                      <ul className="social">
                       {
                         resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                           return(
                                    <li key={item.name}>
                                    <a href={item.url} target="_blank">
                                       <i className={item.className}></i>
                                    </a>
                                    </li>
                                  )
                           }
                         )
                       }
                   </ul>
                </div> 
         </div>
         <div className="row banner">    

            <div className="banner-text">
                 
                   <div class="content">      
                     <main class="main-area">
                        <section class="cards">
                          <article class="cardreal">
                               <a>
                           
                        <div class="card-content">
                            <h2 className="responsive-headline">Skills</h2>
                    
                          <div>
                             <h3 class="tech"> FRONT END</h3>       
                             <div>
                               <h4 class= "method">HTML, ReactJS, CSS, JavaScript, jQuery</h4>
                             </div>
                          </div>
                          
                           <div>
                             <h3 class="tech"> BACK END</h3>       
                             <div>
                               <h4 class= "method">PHP - Laravel, Node.js, Express.js</h4>
                             </div>
                          </div>                                               
                          <div>
                             <h3 class="tech"> DATABASE</h3>       
                             <div>
                               <h4 class= "method">MySQL, MongoDB, Firebase</h4>
                             </div>
                          </div>               
                           <div>
                             <h3 class="tech"> CLOUD</h3>       
                             <div>
                               <h4 class= "method"> Anize, Docker, netfliy, Heroku</h4>
                             </div>
                          </div>                       
                            <div>
                             <h3 class="tech"> OTHERS</h3>       
                             <div>
                               <h4 class= "method">Wordpress, Magento, Git, GraphQl, Rest API</h4>
                             </div>
                          </div>                     
                          
                        </div>
                    </a>
                </article>       
                                    
            </section>
        </main>
      </div> 
     </div>
    </div>
          
  </header>
  
      </React.Fragment>
    );
  }
}