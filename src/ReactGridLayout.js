import React from 'react';
import {Responsive, WidthProvider} from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

class ReactGridLayout extends React.Component {
    static defaultProps = {
        className: 'layout',
        rowHeight: 30,
        onLayoutChange: function () {},
        cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
        layouts: {}
    };

    constructor(props) {
        super(props);
        this.state = {
            mounted: false,
        }
    }

    componentDidMount() {
        this.setState({mounted: true});
    }

    onLayoutChange = (layout, layouts) => {
        this.props.onLayoutChange(layout, layouts);
        this.props.updateLayouts(layouts)
    };

    render() {
        const {layouts, compactType} = this.props;
        return (
            <div>
                <ResponsiveReactGridLayout
                    {...this.props}
                    layouts={layouts}
                    onBreakpointChange={this.props.onBreakpointChange}
                    onLayoutChange={this.onLayoutChange}
                    measureBeforeMount={false}
                    useCSSTransforms={this.state.mounted}
                    compactType={compactType}
                    preventCollision={!compactType}
                >
                    {this.props.children}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default ReactGridLayout;

