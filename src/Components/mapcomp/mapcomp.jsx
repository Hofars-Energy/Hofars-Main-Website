import React, { Component } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoicHJpeWFkYXJzaGktYW1hbiIsImEiOiJja3B0bTdpNjYwM2RqMnFwYXBlcXh6OHhnIn0.AvnjsRrV6uWKX4IHTB5Z6A";

class mapComp extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      lng: -118.19,
      lat: 33.77,
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
        <div
          className="mapcontact"
          id="map"
          style={{ width: "95%", height: "400px" }}
        ></div>
      </>
    );
  }
}

export default mapComp;
