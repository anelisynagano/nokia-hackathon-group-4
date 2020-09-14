import React, {Component} from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./Carousel.css"



 
class Carousel extends Component {

  items = [1,2,3,4,5]

  state = {
    responsive:{1024: { items: 3 } },
  }

  handleOnDragStart = (e) => e.preventDefault()



  render() {
    const { responsive } = this.state
    return(
      <div className="carousel">
        <AliceCarousel 
          mouseTrackingEnabled 
          buttonsDisabled={true} 
          responsive={responsive}
          autoPlay={true}
          autoPlayInterval={2000}
        >
         
          <img src="./N5310.png" onDragStart={this.handleOnDragStart} className="phone 5310" />          
            <img src="./N106.png"  onDragStart={this.handleOnDragStart} className="phone 106" />
            <div onClick={this.props.handleClick}><img src="./N105.png"  onDragStart={this.handleOnDragStart} className="phone 105"  /></div>
            <img src="./N110.png"  onDragStart={this.handleOnDragStart} className="phone 110" />
            <img src="./N130.png"  onDragStart={this.handleOnDragStart} className="phone 130" />
            <img src="./N210.png"  onDragStart={this.handleOnDragStart} className="phone 210" />
            <img src="./N216.png"  onDragStart={this.handleOnDragStart} className="phone 216" />
            <img src="./N800.png"  onDragStart={this.handleOnDragStart} className="phone 800" />
            <img src="./N2720.png"  onDragStart={this.handleOnDragStart} className="phone 2720" />
            <img src="./N3310.png"  onDragStart={this.handleOnDragStart} className="phone 3310" />
            <img src="./N8110.png"  onDragStart={this.handleOnDragStart} className="phone 8110" />
        </AliceCarousel>
      </div>
    )
  }
}

export default Carousel;