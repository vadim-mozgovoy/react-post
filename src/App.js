import {PostPerson} from "./constants";
import Posts from "./component/post";
import './App.css';

function App() {
    return (<div className="App">
            <h1>Post 1</h1>
            <Posts posts={PostPerson[0]}/>
        </div>);
}

export default App;
