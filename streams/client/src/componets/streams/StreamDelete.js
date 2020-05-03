import React from "react";
import { connect } from "react-redux"
import Modal from "../Modal";
import history from "../../history";
import {fetchStream, deleteStream} from "../../actions";
import {Link} from "react-router-dom";

class StreamDelete extends React.Component{

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
        console.log(this.props.stream);
    }

    renderActions() {
        const id = this.props.match.params.id;
        return (
            <React.Fragment>
                <button className="ui button negative" onClick={() => this.props.deleteStream(id)}>DELETE</button>
                <Link to={"/"} className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if(!this.props.stream){
            return 'Are you sure you want to delete the stream?'
        }

        return `Are you sure you want to delete the stream with title ${this.props.stream.title}`
    }

    render() {
        return (
            <Modal
                title="Sleep Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,
    { fetchStream, deleteStream}
    )(StreamDelete);