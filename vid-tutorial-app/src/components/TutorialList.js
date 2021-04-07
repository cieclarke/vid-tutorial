import React, { Component } from 'react';
import { Tutorial } from './Tutorial';

export class TutorialList extends Component {

    render() {
        return (
            <div role="list" className="tutorial-list">
                {this.props.model.length > 0 ? this.props.model.map((tutorial, key) => (
                    <Tutorial model={tutorial} key={key} />      
                )) : <span>No Results</span> }
            </div>
        );
    }
}
