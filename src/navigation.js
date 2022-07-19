const handleClick = (event) => {
    console.log(event.target)
}

function Navigation() {
    return (
        <div>
            <button onClick={(e) => handleClick(e)}>Next</button>
            <button onClick={(e) => handleClick(e)}>Previous</button>
            <button onClick={(e) => handleClick(e)}>Start Over</button>
            <button onClick={(e) => handleClick(e)}>Slide (X)</button>
        </div>
    )
}

export default Navigation