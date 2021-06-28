import React from 'react';


class hornedbeasts extends React.Component{
    render(){
        return(
            <div>
                
            <h3>
                {this.props.title}
            </h3>
            <img src={this.props.image_url}/>
            <p>
                {this.props.description}
            </p>
            
        </div>
        )

    }
}

export default hornedbeasts