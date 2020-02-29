import React from "react"
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
function Header({submitSearch,getSearchData,error}) {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Nav className="mr-auto">
                    <Nav.Link href="/" style={{"color":"white","fontWeight":"6000"}}><b>TED<sub>X</sub></b></Nav.Link>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" onChange={getSearchData} placeholder="Search-Mainspeaker/Event" className="mr-sm-2" />
                    <Button variant="info" onClick={submitSearch}>Search</Button>
                </Form>
            </Navbar>
        </React.Fragment>
    )
}

export default Header