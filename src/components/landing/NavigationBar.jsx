import {Container, Nav, Navbar, NavbarBrand, NavLink} from 'react-bootstrap';
const NavigationBar = () =>{
    return (
        <div>
            <Navbar variant={"light"}>
                <Container>
                    <NavbarBrand >Ripto Tour</NavbarBrand>
                    <Nav>
                        <NavLink "">Beach</NavLink>
                        <NavLink>Mountains</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default  NavigationBar