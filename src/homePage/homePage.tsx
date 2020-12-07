import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import NetworkConstructionText from '../resources/text/networkConstruction';
import IntroductionText from '../resources/text/introduction';
import DataSetText from '../resources/text/dataset';
import GoalText from '../resources/text/goal';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class HomePage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <ReactMarkdown plugins={[gfm]} className="MDtitle">
                        Billboard Top 100 analysis
                    </ReactMarkdown>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {IntroductionText}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {DataSetText}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {GoalText}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <img
                                    src={process.env.PUBLIC_URL + '/network.png'}
                                    alt="network"
                                    className="halfPageImage" />
                            </div>
                        }
                        right={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {NetworkConstructionText}
                            </ReactMarkdown>
                        }
                    />
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default HomePage;