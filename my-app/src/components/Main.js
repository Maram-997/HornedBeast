import React from 'react';
import Horned from './Horned.json';
import Hornedbeasts from './hornedbeast';


class Main extends React.Component{
    render(){  
        return(
  <div> {
     
    Horned.map((item) => {
        return (
            <Hornedbeasts title={item.title} image_url={item.image_url} description= {item.description} />
        )
      } 
      )
      }         
  </div>
        )
    }
}

export default Main