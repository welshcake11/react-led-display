import React from 'react';

class ReactLEDDisplay extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value:props.displayValue,
            lookUpValues:[123, 10, 55, 31, 78, 93, 125, 11, 127, 95],
            foregroundCol:props.foregroundCol,
            backgroundCol:props.backgroundCol,
            borderCol:props.borderCol,
            skew:props.skew,
            ledSize:+props.ledSize,
            width:+props.width
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps);
    }

    render() {
        const value = +this.state.lookUpValues[this.state.value];
        const foregroundCol = this.state.foregroundCol;
        const backgroundCol = this.state.backgroundCol;
        const borderCol = this.state.borderCol;
        const skew = "skewX(" + this.state.skew + ")";
        const width = +this.state.width;
        const ledSize = +this.state.ledSize;
        const height = (width * 2) + (ledSize * 3);
        const barSize = width - (ledSize * 2);

        return (
            <div style={{display: 'inline-block', position: 'relative'}}>
                <svg width={+width + 4} height={+height} transform={skew}>

                    <rect x={ledSize} y="0" rx="2" ry="2" width={barSize} height={ledSize} style={{fill: `${ (value & 1) === 1 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x={barSize + ledSize} y={ledSize} rx="2" ry="2" width={ledSize} height={barSize} style={{fill: `${ (value & 2) === 2 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x={ledSize} y={barSize + (ledSize)} rx="2" ry="2" width={barSize} height={ledSize} style={{fill: `${ (value & 4) === 4 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x={barSize + ledSize} y={barSize + (ledSize * 2)} rx="2" ry="2" width={ledSize} height={barSize} style={{fill: `${ (value & 8) === 8 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x={ledSize} y={(barSize * 2) + (ledSize * 2)} rx="2" ry="2" width={barSize} height={ledSize} style={{fill:`${ (value & 16) === 16 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x="0" y={barSize + (ledSize * 2)} rx="2" ry="2" width={ledSize} height={barSize} style={{fill:`${ (value & 32) === 32 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    <rect x="0" y={ledSize} rx="2" ry="2" width={ledSize} height={barSize} style={{fill:`${ (value & 64) === 64 ? foregroundCol : backgroundCol}`, stroke:borderCol, opacity:'0.8'}}  />

                    Sorry, your browser does not support inline SVG.
                </svg>
            </div>
        );
    }

}

ReactLEDDisplay.defaultProps = {
    displayValue: 0,
    foregroundCol: '#ff0000',
    backgroundCol: '#330000',
    borderCol: '',
    skew:-0,
    ledSize:3,
    width:64
};

export default ReactLEDDisplay;