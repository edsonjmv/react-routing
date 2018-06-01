import React, { Component } from 'react';

class Course extends Component {
    render () {
        let id = this.props.match.params.id ? this.props.match.params.id : undefined;
        let title = this.props.match.params.title ? this.props.match.params.title : undefined;
        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {id}</p>
            </div>
        );
    }
}

export default Course;