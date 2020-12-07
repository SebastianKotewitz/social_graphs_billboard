import { AppBar, Grid, Toolbar } from '@material-ui/core';
import React from 'react';
import TopBarButton from './TopBarButton';

interface Props {
    setWindow: (window: number) => void;
    selectedWindow: number;
}

interface State {

}

class TopBar extends React.Component<Props, State>{
    render() {
        return (
            <AppBar position="sticky">
                <Toolbar>
                    <Grid container direction="row" alignItems="center" justify="space-between">
                        <TopBarButton
                            label="Home"
                            typographyVariant="h5"
                            setWindow={this.props.setWindow}
                            window={0}
                            selected={0 == this.props.selectedWindow}
                        />
                        <TopBarButton
                            label="Collaborations"
                            setWindow={this.props.setWindow}
                            window={1}
                            selected={1 == this.props.selectedWindow}
                        />
                        <TopBarButton
                            label="Word Clouds"
                            setWindow={this.props.setWindow}
                            window={2}
                            selected={2 == this.props.selectedWindow}
                        />
                        <TopBarButton
                            label="Communities"
                            setWindow={this.props.setWindow}
                            window={3}
                            selected={3 == this.props.selectedWindow}
                        />
                        <TopBarButton
                            label="Sentimental Analysis"
                            setWindow={this.props.setWindow}
                            window={4}
                            selected={4 == this.props.selectedWindow}
                        />
                        <TopBarButton label="Christmas"
                            setWindow={this.props.setWindow}
                            window={5}
                            selected={5 == this.props.selectedWindow}
                            christmasMode={true}
                        />
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

export default TopBar;