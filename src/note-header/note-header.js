import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../logo.svg';
import './note-header.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class NoteHeader extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#"><Link to={'/'}>Dashboard</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><Link to={'/newnote'}>Add New</Link></a>
                        </li>
                    </ul>
                </div>
            </nav>
            // <Navbar color="dark" dark expand="md">
            //         <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /> NoteBook</NavbarBrand>
            //         <NavbarToggler onClick={this.toggle} />
            //         <Collapse isOpen={this.state.isOpen} navbar>
            //             <Nav className="ml-auto" navbar>
            //                 <NavItem>
            //                     <NavLink><Link to={'/'}>Dashboard</Link></NavLink>
            //                 </NavItem>
            //                 <NavItem>
            //                     <NavLink><Link to={'/newnote'}>Add New</Link></NavLink>
            //                 </NavItem>
            //                 <UncontrolledDropdown nav inNavbar>
            //                     <DropdownToggle nav caret>Options</DropdownToggle>
            //                     <DropdownMenu right>
            //                         <DropdownItem>Option 1</DropdownItem>
            //                         <DropdownItem>Option 2</DropdownItem>
            //                         <DropdownItem divider />
            //                         <DropdownItem>Reset</DropdownItem>
            //                     </DropdownMenu>
            //                 </UncontrolledDropdown>
            //             </Nav>
            //         </Collapse>
            //     </Navbar>
        )
    }
}

export default NoteHeader;