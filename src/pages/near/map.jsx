import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import Head from 'next/head';

class GoogleMap extends Component {
  state = {
    lat: null,
    lng: null,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
      console.log(position.coords);
    },
      (err) => {
        console.log(err);
      })
  }
  // onMarkerClick = (props, marker) =>
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });

  render() {
    return (
      <>
        <Head>
          <title>近場の映画館検索</title></Head>
        <Map
          google={this.props.google}
          zoom={14}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
        // onClick={this.onMarkerClick}
        >
          <Marker
            title={"現在地"}
            position={{ lat: this.state.lat, lng: this.state.lng }}
          // onClick={this.onMarkerClick}
          // name={'current location'}
          />
          <Marker
            title={"TOHOシネマズ伊丹"}
            position={{ lat: 34.781692, lng: 135.4235953 }}
          />
          <Marker
            title={"TOHOシネマズ西宮"}
            position={{ lat: 34.743932, lng: 135.359945 }}
          />
          <Marker
            title={"TOHOシネマズ梅田"}
            position={{ lat: 34.703324, lng: 135.5007 }}
          />
          <Marker
            title={"梅田ブルク7"}
            position={{ lat: 34.700595, lng: 135.498535 }}
          />
          <Marker
            title={"TOHOシネマズなんば"}
            position={{ lat: 34.665497, lng: 135.500991 }}
          />
          <Marker
            title={"塚口サンサンタウン劇場"}
            position={{ lat: 34.752261, lng: 135.416412 }}
          />
        </Map>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.API_KEY)
})(GoogleMap);