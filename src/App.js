import React from 'react';
import ReactGridLayout from './ReactGridLayout';
import _ from 'lodash';
import './App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';


export default class ToolboxLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentBreakpoint: 'lg',
            compactType: 'vertical',
            mounted: false,
            layouts: {lg: []},
        }
    }

    componentDidMount() {
        this.setState({layouts: {lg: generateLayout()}});
    }

    updateLayouts = (layouts) => {
        this.setState({layouts});
    };

    onBreakpointChange = breakpoint => {
        this.setState(prevState => ({
            currentBreakpoint: breakpoint,
        }));
    };

    generateDOM() {
        return _.map(this.state.layouts[this.state.currentBreakpoint], l => {
            return (
                <div key={l.i} className={l.static ? "static" : ""}>
                    <span className="text">{l.i}</span>
                </div>
            );
        });
    }

    render() {
        console.log("22222222222222222222222222222222222")
        const newProps = {
            currentBreakpoint: this.state.currentBreakpoint,
            compactType: this.state.compactType,

            className: 'layout',
            rowHeight: 30,
            cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
            layouts: this.state.layouts,

            updateLayouts: this.updateLayouts,
            onBreakpointChange: this.onBreakpointChange
        }
        return (
            <>
                <div>HELLO 2222</div>
                <ReactGridLayout {...newProps} >
                    {this.generateDOM()}
                </ReactGridLayout>
            </>
        )
    }
}

function generateLayout() {
    return _.map(_.range(0, 25), function (item, idx) {
        let y = Math.ceil(Math.random() * 4) + 1;
        return {
            x: (_.random(0, 5) * 2) % 12,
            y: Math.floor(idx / 6) * y,
            w: 2,
            h: y,
            i: idx.toString(),
            static: Math.random() < 0.05
        };
    });
}


