import React from 'react';
import Hornedbeasts from './hornedbeast';
import FormInfo from './FormInfo';
import Horned from './Horned.json';





class Main extends React.Component {
   
    constructor(props){
        super(props)
        this.state={
            chosen:Horned
        }
    }
// function cased one choose the selected horn beast 
 ChoosingHorns = (event) =>{
    event.preventDefault();
     let Horns = parseInt(event.target.value)
      console.log(Horns);
          let chosenHorns =[];
          chosenHorns = Horned.filter(element => {
              if (element.horns === Horns){
                  return element
              }
              
          })
          this.setState({
              chosen:chosenHorns
          })
          if (chosenHorns.length === 0){
              this.setState({
                  chosen:Horned
              })
          }
          console.log(chosenHorns);
      }

       

   
 
   
  
  


    render() {
        return (
            <> 
              <FormInfo ChoosingHorns={this.ChoosingHorns} />
            {

                this.state.chosen.map((item, index) => {
                    return (

                        <Hornedbeasts title={item.title} 
                        description={item.description}
                        image_url={item.image_url} 
                         key={index} 
                         selectedCard={this.props.selectedCard}/>

                    )
                }
                )
            }

            </>

        )
    }
}

export default Main;