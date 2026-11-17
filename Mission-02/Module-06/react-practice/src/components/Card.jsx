import './Card.css';
// PROPS and childreen

const Card = ({ children, firstName, lastName, age }) => {

    if(age < 18){
        return (
            <div className="card"> you are not allowed to see this content</div>
        )
    }

    return (
        <div className="card">
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
            {children}
        </div>
    );
};

export default Card;