import { Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import wreath from '../resources/wreath.png'; // Tell webpack this JS file uses this image
// import Sparkle from 'react-sparkle';

interface Props {
    label?: String;
    typographyVariant?: "inherit" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "button" | "overline" | "srOnly" | undefined;
    setWindow: (window: number) => void;
    window: number;
    christmasMode?: boolean;
    selected?: boolean;
}

interface State {

}

class TopBarButton extends React.Component<Props, State>{
    render() {
        return (
            <Grid item>
                <Button color="inherit" onClick={() => this.props.setWindow(this.props.window)}>
                    <Grid container direction="row" spacing={4} justify="center" alignItems="center">
                        {this.props.christmasMode &&
                            <Grid item>
                                <img src={wreath} style={{ width: "32px", height: "32px" }} />
                            </Grid>
                        }
                        <Grid item>
                            <div style={{ alignContent: "center" }} >
                                {/* {this.props.christmasMode && <Sparkle />} */}
                                <Typography variant={this.props.typographyVariant ?? "body1"} color={this.props.selected ?? "false" ? "secondary" : "inherit"}>
                                    {this.props.label ?? ""}
                                </Typography>
                            </div>
                        </Grid>
                        {this.props.christmasMode &&
                            <Grid item>
                                <img src={wreath} style={{ width: "32px", height: "32px" }} />
                            </Grid>
                        }
                    </Grid>
                </Button>
            </Grid>
        );
    }
}

export default TopBarButton;