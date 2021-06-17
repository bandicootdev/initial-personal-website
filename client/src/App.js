import "./App.scss"
import SignIn from "./pages/Admin/SignIn";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <h1>Estamos en app</h1>
            <Admin/>
            <SignIn/>
            <Home/>
            <Contact/>
        </div>

    )
}

export default App;
