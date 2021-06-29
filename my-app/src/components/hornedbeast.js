import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class hornedbeasts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            votes: 0
        }
    }
    countingVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    render() {
        return (
            //     <div className="beast">

            //     <h3>
            //         {this.props.title}
            //     </h3>
            //     <img  src={this.props.image_url}  alt={this.props.title}/>
            //     <p>
            //         {this.props.description}
            //     </p>

            //     <p> Number of Votes: {this.state.votes}</p>

            //     <button onClick={this.countingVotes}>
            //         Vote
            //     </button>

            // </div>

            <div className="beast">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>Number Of Votes:{this.state.votes} </Card.Text>
                    <Button onClick={this.countingVotes} >Vote</Button>
                </Card.Body>
            </Card>
            </div>
        )

    }
}


export default hornedbeasts;