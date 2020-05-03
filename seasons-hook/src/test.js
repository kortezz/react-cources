import React from "react";

class UserForm extends React.Component {

    state = {time: ''}
    componentDidMount() {
        this.setInterval(() => {
            this.setState({
                    time: new Date().toLocaleTimeString()
                }
            )
        }, 1000);
    }

    render(){
    return (
    <div>
    <form>
    <label>Enter a username:</label>
    <input />
    </form>
    </div>
    );
}
}


    // Renders the App component into a div with id 'root'
ReactDOM.render(<UserForm />, document.querySelector('#root'));






<!--The App component above will be rendered into this-->
<div id="root"></div>


<!--No need to change anything after this line!-->
<!--No need to change anything after this line!-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.0.0/polyfill.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script src="https://unpkg.com/@babel/preset-env-standalone@7/babel-preset-env.min.js"></script>
<script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/redux@4.0.1/dist/redux.js"></script>
<script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.js"></script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />