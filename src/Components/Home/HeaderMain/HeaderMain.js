import React from 'react';
import Chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style = {{height:'600px'}} className ="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here</h1>
               <p className = "text-secondary" > Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident beatae incidunt vitae! Consectetur fuga dolor iusto qui sapiente soluta quidem deserunt, accusantium itaque ad voluptatum odio excepturi in, autem sequi minima dolorem doloribus rem sint doloremque magnam! Possimus iusto deserunt veniam debitis sequi voluptatem accusantium in officia ratione neque. </p>
               <button className= "btn btn-primary">GET APPOINTMENT</button>
           </div>
           <div className="col-md-6">
               <img src={Chair} alt="" className="img-fluid" />
           </div>
            
        </main>
    );
};

export default HeaderMain;