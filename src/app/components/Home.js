import React from 'react'

export class Home extends React.Component {
    constructor(props) {
        super();
        this.state = {
            age: props.initialage,
            status: 0,
            homeLink: props.initialLinkName
        };

        console.log("constructor");
    }

    //Life cycle events 
    componentWillMount() {
        console.log("componentWillMount");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate", nextProps, nextState)
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate", nextProps, nextState)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState)
    }

    componentWillUnMount(prevProps, prevState) {
        console.log("componentDidUpdate", prevProps, prevState)
    }
    //End life cycle event
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
    };

    changeLinkName() {
        this.props.changeLinkName(this.state.homeLink)
    }

    OnHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
    }
    render() {
        let text = "hello";
        return (

            <div>
                <p>{text}</p>
                <p>Your Name is {this.props.name}</p>
                <p>Your Age is {this.state.age}</p>
                <p>{this.state.status}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                        {this.props.user.hobbies.map((hobby, index) => <li key={index} >{hobby}</li>)}
                    </ul>
                </div>
                <button className="btn btn-primary" onClick={() => this.onMakeOlder()} >Make me older</button><br /><br />
                <button onClick={() => this.props.onGreet()} className="btn btn-primary">Greet</button> <br /><br />
                <br />
                <br />
                <input type="text" value={this.state.homeLink} onChange={(event) => this.OnHandleChange(event)} />
                <button onClick={() => this.changeLinkName()} className="btn btn-primary">Change Link</button>
                <hr />
                {this.props.children}
            </div>
        );
    };
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    user: React.PropTypes.object,
    children: React.PropTypes.element.isRequired,
    initialLinkName: React.PropTypes.string
}