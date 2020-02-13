import React from 'react'
import {Nav,Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function uppertab(){
    
    return (    

        <Navbar  bg="dark" variant="dark">

            <Navbar.Brand  >KisaanToGraahak</Navbar.Brand>

            <Nav className="mr-auto">
                <Nav.Link href="products">Products</Nav.Link>
                <Nav.Link href="addpost">  Create post  </Nav.Link>
                <Nav.Link href="register">Register</Nav.Link>
            </Nav>
            
        </Navbar>
        
        
        
    );

}
export default uppertab