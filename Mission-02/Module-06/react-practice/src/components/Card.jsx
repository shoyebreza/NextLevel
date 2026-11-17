
// PROPS and childreen

// const Card = (props) => {
//     return (
//         <div>
//             <h2>Card Title</h2>
//             <p>This is the card content.</p>
//             <p>First Name: {props.firstName}</p>
//             <p>Last Name: {props.lastName}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

const Card = ({ firstName, lastName, age }) => {
    return (
        <div>
            <h2>Card Title</h2>
            <p>This is the card content.</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Age: {age}</p>
        </div>
    );
};

export default Card;