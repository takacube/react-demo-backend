export const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
        </div>
    )
};

export const App = () => {
    const onClickButton = () => {
        alert("pop up alrt message");
    }
    return (
        <div>
            <h1>Hello</h1>
            <p>this is app Component</p>
            <button onClick={onClickButton}>Submit</button>
        </div>
    );
};
