import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



class hornedbeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }
    countingVotes = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }
    showTheCard =()=>{
        this.props.selectedCard(this.props.title)
    }


  

    render() {
        return (


            <div className="beast">
            <Card onClick={this.showTheCard} style={{ width: '18rem' }}>
                <Card.Img  variant="top" src={this.props.image_url} alt={this.props.title} />
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