function Header(){
    return (
    <div class="container">
        <header class="header">
                <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react_image"/>
                <h1>React Essentials</h1>
                <p>
                    Fundamentals React concepts you will need for almost any appyou are going to build!
                </p>
                <main>
                        <h5>Time to get started!</h5>
                </main>
      </header>
    </div>



    );
}

function App(){
    return(
        <div>
            <Header/>

        </div>
    )
}
export default App;