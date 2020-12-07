import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import CollabIntro from '../resources/text/collabIntro';
import Text1 from '../resources/text/collabText1';
import TopArtists from '../resources/text/topArtists';
import TopArtistsL1 from '../resources/text/topArtistsList1';
import TopArtistsL2 from '../resources/text/topArtistsList2';
import TopArtistsL3 from '../resources/text/topArtistsList3';
import TopArtistsEnd from '../resources/text/topArtistsEnd';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class CollaborationsPage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {TopArtists}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <Grid container direction="row" justify="space-around">
                        <Grid item>
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {TopArtistsL1}
                            </ReactMarkdown>
                        </Grid>
                        <Grid item>
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {TopArtistsL2}
                            </ReactMarkdown>
                        </Grid>
                        <Grid item>
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {TopArtistsL3}
                            </ReactMarkdown>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {TopArtistsEnd}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {CollabIntro}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {Text1}
                            </ReactMarkdown>
                        }
                        right={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <img
                                    src={process.env.PUBLIC_URL + '/collabsPerSongPerYear.png'}
                                    alt="collabsPerSongPerYear"
                                    className="halfPageImage" />
                            </div>
                        }
                    />
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default CollaborationsPage;