import React from 'react';
import './Feature.css'

class Feature extends React.Component {

  render() {
    return (
      <div>
        {this.props.isClicked ?
          <div className="selectedphone">
            <img src={this.props.selection} alt="" className="selectedimg"/>
            <div className="selectedphoneinfo">
              <div className="selectedname">
                <h2>{this.props.title}</h2>
                <h3>{this.props.semi}</h3>
                <p className="selectedphonename">{this.props.name}</p>
                <p className="selectedphonename2">{this.props.info}</p>
              </div>
            </div>
          </div>

          :

          <div className="fixedphone">
            <img src="./N5310.png" alt="" className="fixedimg"/>
            <div className="fixedphoneinfo">
              <div className="fixedname">
                <h2>Never miss a beat</h2>
                <h3>FM radio and MP3 player</h3>
                <p className="fixedphonename">Nokia 5310</p>
                <p className="fixedphonename2">Mix it up, anytime, anywhere, thanks to the MP3 player and wireless FM radio with dedicated music buttons and powerful dual front-facing speakers.</p>
                </div>
            </div>
          </div>

        }

      </div>
    )
  }
}


export default Feature;