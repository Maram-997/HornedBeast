import React from 'react';

class hornedbeasts extends React.Component{
 constructor(props){
 super(props)
 this.state={
  votes:0
 }
 }
countingVotes = () =>{
    this.setState ({
        votes: this.state.votes +1
    })
}

    render(){
        return(
            <div className="beast">
                
            <h3>
                {this.props.title}
            </h3>
            <img  src={this.props.image_url}  alt={this.props.title}/>
            <p>
                {this.props.description}
            </p>

            <p> Number of Votes: {this.state.votes}</p>

            <button onClick={this.countingVotes}>
                Vote
            </button>
            
        </div>
        )

    }
}


export default hornedbeasts;