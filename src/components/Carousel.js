import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import rain from '../assets/images/Rain event.jpg';
import University from '../assets/images/BlackBoard.jpg';
import ChocoPizza from '../assets/images/ChocoPizza.jpg';
class Carousel extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            items: [
                {
                    id: 0,
                    title: 'Rain On My Parade',
                    subTitle: 'Event Planner With Weather Prediction',
                    imgSrc: rain,
                    link: ' https://adamantwarriortime.github.io/rainParade-client/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'BlackBoard',
                    subTitle: 'University Management System',
                    imgSrc: University ,
                    link: 'https://github.com/riaagnes',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Ria\'s Kitchen',
                    subTitle: 'Website to Publish Food Recipe',
                    imgSrc: ChocoPizza,
                    link: 'https://riaagnes.github.io/choco-pizza/',
                    selected: false
                },
            ]
         }
    }
 
    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }
    render() { 
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
 
export default Carousel;