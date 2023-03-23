import React, {useState} from 'react'
import Title from './Title'
import Button from "./Button"

export default function ACController(){
    const [temp, setTemp] = useState(0)
    
    const increase = ()=> {
        setTemp(temp + 1)
    }
    const decrease = ()=> {
        setTemp(temp - 1)
    }
    return(
        <div>
            <Title title="React AC Controller" titleClass="greenYellow"/>
            
            <div style={{height: "330px", width: "200px", border: "5px solid white", borderRadius: "5px", margin: "0 auto", textAlign: 'center'}}>
            
                <div style={{display: "grid", placeContent: "center",height: "150px", width:"150px", borderRadius: "50%", border:"1px solid white", margin: "40px auto"}}className={temp >= 0 ? "bg-green" : "bg-red"}>
            
                    <h1 style={{fontSize: "60px",  textShadow: "2px 2px rgba(0,0,0,0.7)"}}>{temp} <span style={{fontSize: "20px"}}>°C</span> </h1>
                </div>   
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <Button name="+"  handleClick={increase}/>
                    <Button name="-" handleClick={decrease}/>
                </div> 
            </div>
            
        </div>

    )
}

        

        