import './Card.css';
// PROPS and childreen

const Card = ({ name, age }) => {

    const clickHandeler = ({name, age}) => {
        alert(`Card clicked! Name: ${name}, Age: ${age}`);
    }

    const anotherClickHandeler = () => {
        console.log(`Card clicked! Name: ${name}, Age: ${age}`);
    }


    const greeting = ({name, age}) => {
        clickHandeler({name, age});
        anotherClickHandeler();

    }
    
    return (
        <div onClick={() => greeting({ name, age })} className="card">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default Card;