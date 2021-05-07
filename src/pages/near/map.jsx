import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    lat: null,
    lng: null
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

  render() {
    return (
      <>
        <title>近場の映画館検索</title>
        <Map
          google={this.props.google}
          zoom={14}
          center={{ lat: this.state.lat, lng: this.state.lng }}
          initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
        >
          <Marker
            title={"現在地"}
            position={{ lat: this.state.lat, lng: this.state.lng }} />
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
            position={{ lat: 34.421197, lng: 135.30026 }}
          />
          <Marker
            title={"梅田ブルク7"}
            position={{ lat: 34.700595, lng: 135.498535 }}
          />
          <Marker
            title={"TOHOシネマズなんば"}
            position={{ lat: 34.395604, lng: 135.30373 }}
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
  apiKey: ("AIzaSyCYVUp5jiIRxE8sB5x0YmrGzFnBP22gMGI")
})(GoogleMap);