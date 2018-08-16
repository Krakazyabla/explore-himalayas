import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'
import './../style/App.css'
import './../style/media.css'
import * as everest from './../icons/goal.svg'

// Map component built with react-google-maps
const Map = withScriptjs(withGoogleMap((props) => {
  return(
    <GoogleMap
        mapTypeId='terrain'
        ref={(map) => {
          if (map && props.locations.length > 3) {
            const bounds = new window.google.maps.LatLngBounds();
            props.locations.forEach(location => {
              const latLng = new window.google.maps.LatLng(location.coords);
              bounds.extend(latLng);
            });
            map.fitBounds(bounds, 10);
          }
        }}>
      {props.locations.map(location =>
        <Marker
            key={ location.title }
            position={ location.coords }
            title={ location.title }
            icon={ location.title === 'Everest' ? everest : null }
            animation={ props.active === location.title ? window.google.maps.Animation.BOUNCE : null}
            onClick={ () => { props.onMarkerClick(location.title) } }
            >
        {props.active === location.title &&
          (<InfoWindow onCloseClick={ props.onInfoClose }>
            <p>{ location.title }</p>
          </InfoWindow>)
        }
        </Marker>
        )}
    </GoogleMap>
  )
}))

export default Map
