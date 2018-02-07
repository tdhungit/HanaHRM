import React, {Component} from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <a href="http://penguinhrm.io">PenguinHRM</a> &copy; 2017 Jacky.
                <span className="float-right">Powered by <a href="http://coreui.io">PenguinHRM</a></span>
            </footer>
        )
    }
}
