import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-infinite';
import './CatchesLayout.css';

let Util = require('./util');
let log = require('console-log-level')({ level: 'debug' });

class CatchesLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
        hasMore: true,
        elements: []
      };
  }

  componentDidMount() {
    this.getData().then((elements) => {
      this.setState(state => ({
        elements: elements
      }));
    })
  }

  loadMore = () => {
    this.getData().then((elements) => {
      this.setState(state => ({
        elements: state.elements.concat(elements),
      }))
    })
    log.debug(`loadMore::new elements size? ${this.state.elements.length}`);
    if(this.state.elements.length > 100) {
      log.debug('loadMore::more than 100 elements, so set hasMore to false');
      this.setState(state => {
        hasMore: false
      });
    }
  }

  async getData() {
    var d = await Util.ajax('http://localhost:8000/api/catches');
    // variable 'd' is an array-like object - but not an array per se, so use
    // Function.prototype.[func].call()
    var elements = Array.prototype.slice.call(d.data);
    elements.forEach((element) => {
      element.formattedDate = new Date(element.date).toLocaleDateString();
    });
    return elements;
  }

  render() {
    if (this.state.elements.length === 0) {
      return <div>loading...</div>;
    }

    const height = 200;

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
            this.state.elements.map(({ image, species, tags, formattedDate }, i) => (
              <div className="picture" key={i}>
                <img src={image} style={{height}}></img>
                <p className="a-layer">
                  <span className="al-angler"><strong>[{i}] {formattedDate}  </strong>
                    {tags.reduce((a, b) => {
                      return b.type === "angler" ? a.concat(b.value) : a.concat("");
                    } , "")}</span>
                  <span className="al-species">{species}</span>
                  <span className="al-location"><strong>[{i}]  </strong>
                    {tags.reduce((a, b) => {
                      return b.type === "location" ? a.concat(b.value, " ") : a.concat("");
                    } , "")}</span>
                </p>
              </div>
            ))
          }
        </Masonry>
      </div>
    );
  }

}

export default CatchesLayout;
