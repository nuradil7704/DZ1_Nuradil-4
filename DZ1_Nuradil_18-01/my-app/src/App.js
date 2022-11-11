import './App.css';

function AboutUs () {
    return (
        <>
        <div>
            <Project/>
        </div>
            <p>Lorem ipsum.</p>
        </>
    )
}

function Portfolio () {
    return (
        <>
        <div>
            <Biography/>
        </div>
            <p>Lorem ipsum.</p>
        </>
    )
}

function Project () {
    return <h1>Project</h1>
}

function Biography () {
    return <h1>Biography</h1>
}

function App() {
  return (
    <div className="App">
        <>
            <AboutUs/>
            Hello world
            <Portfolio/>
        </>
    </div>
  );
}

export default App;
