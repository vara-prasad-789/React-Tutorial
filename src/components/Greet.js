const Greet = (props) => {
    return (
        <div>
    <h1>Hello {props.name} A.k.a {props.heroName}</h1>
    {props.children}
    </div>
    );
}


export default Greet