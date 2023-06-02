import React from "react"
import './element.css';
import { useNavigate } from 'react-router-dom';



function Element(props){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/Item', { state: { props } });
    };
    console.log(props)
    return(<div className="element" onClick={handleClick}>
        <div>
            <img src={props.e[3]} className="photoo"/>
            <div>{props.e[0]}</div>
            <div>{props.e[1]}</div>
            <div>{props.e[2]}</div>  
            <div>{props.e[4]}</div> 
        </div>

            
    </div>);
}

export default Element;

