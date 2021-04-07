import React, { Component } from 'react';

export class Tutorial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(e) {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <div className="clear-left p-1" role="listitem" >
                <input type="button" onClick={this.showDetail} value={this.state.isOpen ? "hide" : "show" } />
                <span className="pl-1 w-2">{this.props.model.videoTitle}</span>
                <div className={this.state.isOpen ? "block" : "hidden" }>
                    <dl className="tutorial-info">
                        <dt>Rating</dt>
                        <dd>{Math.round(this.props.model.averageUserRating * 100)}%</dd>
                        <dt>Teacher</dt>
                        <dd>{this.props.model.teacherName}</dd>
                        <dt>Tags</dt>
                        <dd>
                            <ul>
                            {this.props.model.tags.map((tag, key) => (
                                <li key={key}>{tag}</li>
                            ))}
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        );
    }
}
