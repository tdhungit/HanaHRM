import React, {Component} from 'react';

class SidebarMinimizer extends Component {
    static sidebarMinimize() {
        document.body.classList.toggle('sidebar-minimized');
    }

    static brandMinimize() {
        document.body.classList.toggle('brand-minimized');
    }

    render() {
        return (
            <button className="sidebar-minimizer" type="button" onClick={(event) => {
                this.sidebarMinimize();
                this.brandMinimize()
            }}/>
        )
    }
}

export default SidebarMinimizer;
