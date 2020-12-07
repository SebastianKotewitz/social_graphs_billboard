import { Grid } from '@material-ui/core';
import React from 'react';

interface Props {
    left: any;
    right: any;
    minHeight?: number;
}

interface State {

}

class ImageFigure extends React.Component<Props, State>{
    render() {
        return (
            <div style={{minHeight: this.props.minHeight ?? "256px"}}>
                <Grid container direction="row" justify="space-around">
                    <div style={{ width: "48%" }}>
                        {this.props.left}
                    </div>
                    <div style={{ width: "48%" }}>
                        {this.props.right}
                    </div>
                </Grid>
            </div>
        );
    }
}

export default ImageFigure;