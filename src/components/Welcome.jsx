import { Component } from "react";
class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            first: "Punit"
        }
    }
    render() {
        return (<h1>Hello React Class Component {this.state.first} {this.props.data}</h1>)
    }
}
export default Welcome



