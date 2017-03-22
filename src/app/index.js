import React from 'react'
import { render } from "react-dom"
import { Header } from './components/Header'
import { Home } from './components/Home'
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        }
    }
    onGreet() {
        alert("Hello!")
    }

    changeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }
    render() {
        let user = {
            name: "nilesh",
            hobbies: ["sports", "swim"]
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {<Header homeLink={this.state.homeLink} />}
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home changeLinkName={this.changeLinkName.bind(this)} name={"John"} initialage={25} user={user} onGreet={this.onGreet}>
                            <div>
                                <p> Hello from Root</p>
                                <p> N D Patil</p>
                            </div>

                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, document.getElementById('app'));