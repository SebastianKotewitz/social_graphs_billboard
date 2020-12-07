import { Button, Grid } from '@material-ui/core';
import React from 'react';

interface Props {
}

interface State {
}

class BottomBar extends React.Component<Props, State>{

    render() {
        return (
            <div style={{ position: "fixed", bottom: 0, width: "100%", backgroundColor: "grey"}}>
                <Grid container direction="row" justify="flex-end">
                    <Grid item>
                        <Button target="_blank" href="https://github.com/SebastianKotewitz/social_graphs_billboard/raw/main/downloadFiles/fullNetworkSentiment.gpickle" variant="contained" style={{marginRight: "24px"}}>
                            Download Network
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button target="_blank" href="http://www.google.com/" variant="contained" style={{marginRight: "24px"}}>
                            Download ipynb
                        </Button>
                    </Grid>
                </Grid>
            </div >
        );
    }
}

export default BottomBar;