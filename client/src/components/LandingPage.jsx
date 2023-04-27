import React from 'react';
import {Link} from 'react-router-dom';
import  '../CSS/LandingPage.css';


export default function LandingPage(){
    return (
      
        <div id='justificado'>

            <div>
                <h1 className='title'>Bienvenido Aplicación Dog</h1>
                <Link to ='/home'>
                    <button className='boton'> Start  </button>
                </Link>
             </div>
            <div className="imaLoading">
                 <img src="https://static-01.daraz.pk/p/1428aeeee4991bad1b27038493201e05.jpg" alt='not exist'/>
            </div>
     
        </div>
    )
}