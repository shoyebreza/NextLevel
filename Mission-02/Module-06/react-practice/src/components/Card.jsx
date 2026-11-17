import './Card.css';
// PROPS and childreen

const Card = ({ name, age }) => {

    if(age < 18){
        return (
            <div className="card"> you are not allowed to see this content</div>
        )
    }

    return (
        <div className="card">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default Card;