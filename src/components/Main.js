import React from 'react';
import Hornedbeasts from './hornedbeast';

class Main extends React.Component {
   

    render() {
        return (
            <> {

                this.props.data.map((item, index) => {
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