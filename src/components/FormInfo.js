import React from 'react';
import Form from 'react-bootstrap/Form';




class FormInfo extends React.Component {
   constructor(props){
       super(props);
       this.state = {
           Horns:'',



       }
   } 
    
 

    
    render() {
        return (
            
                 <>
                 <Form>
                     <Form.Group aria-label="Default select example">
                         <Form.Label>  Filter By Numbers Of Horns: </Form.Label>
                         <Form.Control as="select" onChange={this.props.ChoosingHorns} name="Horns" >
                             <option value="0">All</option>
                             <option value="1">One</option>
                             <option value="2">Two</option>
                            <option value="3">Three</option>
                             <option value="100">WOW</option>

                         </Form.Control>
                     </Form.Group>
                 </Form>
                 </>
            
        )
    }




 }

export default FormInfo;