import React from 'react'
import {Form,Button, FormGroup,Col,Row} from 'react-bootstrap'


class addpost extends React.Component{

    render(){

      return (
      <div align='center'>
      <Form style={{width : 1000 , margin : 25, textAlign: "left"}} >
      
        <FormGroup >

            <h4 style={{margin : 10}}>Item Details :</h4>

            <Row style = {{margin : 8}}>
                <Col>
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type= "text"/> 
                </Col>

                <Col>
                    <Form.Label>Category</Form.Label>
                    <Form.Control as = "select">
                    <option>Vegetable</option>
                    <option>Fruits</option>
                    <option>grains</option>
                    <option>pulses</option>
                     </Form.Control>
                </Col>

                <Col>
                    <Form.Label>Item</Form.Label>
                    <Form.Control as = "select">
                    <option>Item1</option>
                    <option>Item2</option>
                    <option>Other</option>
                    </Form.Control>
                </Col>
                
                <Col>
                    <Form.Label>Quantity in Kgs</Form.Label>
                    <Form.Control type= "text"/>
                </Col>
            
            
            </Row>
            
            <Row style = {{margin : 8}}>
                <FormGroup as = {Col}  md = "6">
                    <Form.Label >Description</Form.Label>
                    <Form.Control  style ={{height : 100}} type= "textarea" />
                </FormGroup>

                
                

                <FormGroup as = {Col}  md = "4">
                    <Form.Label >Image</Form.Label>
                    <Form.Control style ={{height : 100}} type= "Image"  />
                
                </FormGroup>
                <FormGroup as = {Col}  md = "2">
                    <Form.Label >Prize</Form.Label>
                    <Form.Control  type= "text"  />
                
                </FormGroup>
                
                
                

            </Row>
        </FormGroup>

        <FormGroup>

        <h4 style={{margin : 10}}>Location Details :</h4>
    
            <Row style = {{margin : 8}}>
                

                <Col>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type= "textarea" />
                </Col>

                <Col>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control placeholder=""/>            
                </Col>
            </Row>   

               
            <Row style = {{margin : 8}}>
                <Col>
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select">
                    <option>Uttarakhand</option>
                    <option>Haryana</option>
                    <option>Punjab</option>
                    <option>Madhya Pradesh</option>
                    </Form.Control>
                </Col>

                <Col>
                    <Form.Label>City</Form.Label>
                    <Form.Control placeholder=""/>            
                </Col>

                
                
            </Row>    

            </FormGroup>
           
   
        
        <FormGroup >
            <Button  style={{margin: 10}} variant="primary" type="submit">
            Submit
            </Button>
            
            <Button style={{margin : 10}} variant="secondary" type="submit">
            Cancel
            </Button>
        </FormGroup>
        
      </Form>
      </div>
      );

    }
     


}

export default addpost