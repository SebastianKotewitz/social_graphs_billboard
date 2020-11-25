import { AppBar, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import TopBarButton from './TopBarButton';

interface Props {
    setWindow: (window: number) => void;
}

interface State {

}

class TopBar extends React.Component<Props, State>{
    render() {
        return (
            <AppBar position="static">
                <Toolbar>
                    <Grid container direction="row" alignItems="center" justify="space-between">
                        <TopBarButton label="Home" typographyVariant="h5" setWindow={this.props.setWindow} window={0} />
                        <TopBarButton label="Collaborations" setWindow={this.props.setWindow} window={1} />
                        <TopBarButton label="Word Clouds" setWindow={this.props.setWindow} window={2} />
                        <TopBarButton label="Communities" setWindow={this.props.setWindow} window={3} />
                        <TopBarButton label="Semantic analysis" setWindow={this.props.setWindow} window={4} />
                        <TopBarButton label="Christmas" setWindow={this.props.setWindow} window={5} christmasMode={true} />
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;