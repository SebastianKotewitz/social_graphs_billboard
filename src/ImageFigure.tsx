import { Grid } from '@material-ui/core';
import React from 'react';

interface Props {
    left: any;
    right: any;
}

interface State {

}

class ImageFigure extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="row" justify="space-around">
                <div style={{ width: "48%" }}>
                    {this.props.left}
                </div>
                <div style={{ width: "48%" }}>
                    {this.props.right}
                </div>
            </Grid>
        );
    }
}

export default ImageFigure;