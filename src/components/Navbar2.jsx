import React, { useState } from 'react'
import { Navbar,Container,Nav,Form,Button } from 'react-bootstrap'
import { AiFillGithub } from 'react-icons/ai'; 

const Navbar2 = (props) => {
  const [search,setSearch] = useState("")

  const onChange = (e) => {
  setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search===""){
      props.displayAlert('Enter Keyword', 'warning')
    }else{

      props.searchUsers(search)
      setSearch("")
    }
  }
  
  return (
    <Navbar style={{  position: "fixed",
      top: "0",
      left: "0",
      width: "100%"}} bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">
        <AiFillGithub style={{fontSize:"2rem"}}/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">{props.title}</Nav.Link>
         
         
            
          </Nav>
          <Form onSubmit={handleSubmit} className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={onChange}
              value={search}
            />
            <Button className="me-2" type='submit' variant="outline-light">Search</Button>
            {
              props.showClearButton && <Button onClick={props.clearResults}  variant="danger">Clear</Button>
            }
            
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

Navbar2.defaultProps={
  title:"Githup"
}

export default Navbar2
