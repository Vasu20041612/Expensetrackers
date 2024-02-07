import React from 'react'
import Plant from './Plant'
import './home.css'
//import Learn from './Learn'
import {Link} from 'react-router-dom';
function Home() {
    const plants1={
        name :'Medical Expenses',
        icon:'💊',
        salary :70,
        aboutMe:[
         'Inhalers. ...',
         'Injections.',
         'tablet...'
        ],
    }
    const plants2={
        name :'Grocery Expenses',
        icon:'🍔',
        salary :100,
        aboutMe:[
            'non-food items. ...',
            'foodstuffs. ...',
            'drinks. ...'
           ],
    }
  //   const vasu={
  //     dep:'ECE',
  //     year:'3'
  // }
  // const vasu2={
  //     dep:'EEE',
  //     year:'4'
  // }
  return (
    
    <div className='logo'>
       <h1 >Family Expenses</h1>
      <Plant plant3={plants1} />
      <Plant plant3={plants2}/>
      <Plant/>
      {/* <Learn vasu3={vasu}/>
      <Learn vasu3={vasu2}/> */}
      <hr />
      <Link to='/'><button  className="signup-but">Back to login</button></Link>
    </div>
  )
}

export default Home;
