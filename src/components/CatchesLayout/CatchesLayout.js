import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-infinite';

let Util = require('./util');

class CatchesLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
        hasMore: true,
        elements: []
      };
    }

  componentDidMount() {
    this.getData();
  }

  loadMore = () => setTimeout(() => this.setState(state => ({
    elements: state.elements.concat(this.getData()),
  })), 2500);

  getData() {
    Util.ajax('http://localhost:8000/api/catches', d => {
      var elements = JSON.parse(d).data;
      console.log("elements size? " + elements.length);
      this.setState(
        {
          elements: elements,
          hasMore: false
        }
      )
      // ... ???
      },
      () => {
        alert("ajax call failed")
      }
    );
  }

  render() {
    if (this.state.elements.length === 0) {
      return <div>loading...</div>;
    }

    return (
      <div className="albumPanel">
        <Masonry
          className="masonry"
          hasMore={this.state.hasMore}
          loader={
            <div className="sk-folding-cube">
              <div className="sk-cube1 sk-cube" />
              <div className="sk-cube2 sk-cube" />
              <div className="sk-cube4 sk-cube" />
              <div className="sk-cube3 sk-cube" />
            </div>
          }
          loadMore={this.loadMore}
        >
          {
            this.state.elements.map(({ image }, i) => (
              <div className="picture">
                <img src={image}></img>
              </div>
            ))
          }
        </Masonry>
      </div>
    );
  }

}

export default CatchesLayout;
