import React, { useState, useEffect } from 'react'
import './Plant.scss'
import './home.css'


const defaultplant = {
    name: 'Other Expenses',
    icon: '🚀',
    salary: 50

}
function Plant({ plant3 = defaultplant }) {
    let { name, icon, salary, aboutMe } = plant3

    const [dys, setDys] = useState(salary)
    useEffect(() => {
           if(dys>150 && (name=='Medical Expenses'||name==='Grocery Expenses'))
           {
            alert('Reached your max salary');
           }
           else if(dys>200)
           {
            alert('Reached your max salary using unwanted purchase');
           }

        // set timeout,set interval,clear interval
        // const interval = setInterval(() => {
        //     if (dys <= 150) {

        //         setDys(dys + 20)
        //     }
        //     else {
        //         setDys(dys - 20)

        //     }

        // }, 1000)
        // return () => clearInterval(interval)

    }, [dys])
    // const handleSubmit = () => {
    //     setDys(dys + 20)
    // }
    const handleClick = () => {
        setDys(salary)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setDys(dys + 20);
    }
    

    const plantname = 'rose'
    const sstyle = {
        color: 'red'
    }
    // const {plant3=defaultplant}=props
    return (
            <form style={styles.form}  >
        <div >
            <div className='planttt'>
           
                <h1>  {name}</h1>
                {/* {aboutMe.map(data => <div>{data}</div>)}
     */}

                {/* { name ==='grape tree'?
  <div>It is a tree</div>:
  <div> It is not a tree</div>

} */}
                <div style={{ fontSize: `${dys}px` }}>{icon}</div>
                {aboutMe ? aboutMe.map((item, index) => <div>{index + 1}.{item}</div>) : null}
        
           
            </div>
         
            {name === 'Medical Expenses' || name === 'Grocery Expenses' ?

<div><button className="signup-but" onClick={handleSubmit}>buy</button><br />
                    <button className="signup-but" onClick={handleClick}>cancel</button>
                </div> : <div><button className="signup-but" onClick={handleSubmit}>buy other things</button> <br />
                    <button className="signup-but" onClick={handleClick}>cancel</button>
                </div>

}
        </div>
</form>
    )
}
const styles = {
    container: {
  display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    form: {
      
      width: '300px',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
  };

export default Plant;
