import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./Map.css";
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJpeWFkYXJzaGktYW1hbiIsImEiOiJja3B0bTdpNjYwM2RqMnFwYXBlcXh6OHhnIn0.AvnjsRrV6uWKX4IHTB5Z6A";
// 28.640956881115947, 77.3222678204435
// mapboxgl.accessToken = 'pk.eyJ1Ijoic2h1Ymh2YXNoaXNodCIsImEiOiJja3JmMGJkbW8yNTJ6MnBwOHVyMTNxNnQ4In0.WzWIYsLpYp5Yg-kRdHXdGQ';

class MapComp extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      lng: 77.3222678204435,
      lat: 28.640956881115947,
      zoom: 12,
    };
    this.mapContainer = React.createRef();
  }
  componentDidMount() {
    const { lng, lat, zoom } = this.state;
    let map = new mapboxgl.Map({
      //   container: "map", // container ID
      container: "map",
      style: "mapbox://styles/priyadarshi-aman/ckptmoxcb0f4p17pe1rwvlzw1", // style URL
      center: [lng, lat], // starting position [lng, lat]
      zoom: zoom, // starting zoom
    });
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="map-container">
          <div
            className="mapcontact"
            id="map"
            style={{ width: "100%", height: "400px" }}
          ></div>
        </div>
      </>
    );
  }
}

export default MapComp;
