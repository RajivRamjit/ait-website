import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.styles.scss';
//import pin from "../../assets/pngegg.png";
const AnyReactComponent = ({ text }) => (
    <div className='testing' >
        {text}
    </div>
);
var trinidad = { lat: 10.323152, lng: -61.202008 };
class SimpleMap extends React.Component {

    static defaultProps = {

        center: trinidad,
        zoom: 17
    };

    render() {

        return (
            <div className='mapcont' >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyARYfBxyNi0FPG_ubOt2ckgLsIUDS2MI-E" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => {
                        map.mapTypeId = "satellite";
                        map.mapTypeControl = true;
                        console.log(maps);
                    }}

                // { map.mapTypeId = "satellite"; map.mapTypeControl = true; }
                >
                    <AnyReactComponent
                        lat={10.323152}
                        lng={-61.202008}
                        text={'Advance Information Technologies'}
                    />
                </GoogleMapReact>
            </div>

        );
    }
}

export default SimpleMap;