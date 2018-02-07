import React, {Component} from 'react';

export default class Loading extends Component {
    render() {
        return (
            <div className="text text-center">
                <i className="fa fa-refresh fa-spin"/>
            </div>
        );
    }
}
