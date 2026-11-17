import { useState } from 'react';
import './Card.css';
// PROPS and childreen

// state must be used inside the component function, not outside of it.
// must use react componnent.
// state must be in top level of the component function, not inside any other function or block.

const Card = ({ name, age }) => {

    const [member, setMember] = useState("");

    const clickHandeler = ({name}) => {
        setMember(`Hello, ${name}! You are welcome.`);
    }
    
    return (
        <div onClick={() => clickHandeler({ name })} className="card">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            {member && <p>  Greeting: {member}</p>}
        </div>
    );
};

export default Card;