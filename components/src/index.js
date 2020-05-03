import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";



class App extends React.Component{
    render() {
        return <div className="ui container comments">
            <ApprovalCard >
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:30"
                     content="Nice blog"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Tom"
                    timeAgo="Yesterday at 12:30"
                    content="I like the subject"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard >
                <CommentDetail
                    author="Jane"
                    timeAgo="Today at 5:00"
                    content="I like the writing"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"))