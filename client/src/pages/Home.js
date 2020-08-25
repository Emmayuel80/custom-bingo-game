import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }

    }
    componentDidMount() {
        this.getRandomId();
    }
    getRandomId() {
        fetch('/api/idGenerator')
        .then(res => res.json())
        .then(generatedId => this.setState({ id: generatedId }))
    }
  render() {
    return (
    <div className="App">
        {this.state.id ? <Redirect to={"/card/"+this.state.id.id} /> : 'Getting ready..'}
    </div>
    );
  }
}
export default Home;