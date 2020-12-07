import { Divider, Grid, Typography } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import SentimentalIntroductionText from '../resources/text/sentIntroduction';
import Text1 from '../resources/text/sentText1';
import Text2 from '../resources/text/sentText2';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class SentimentalPage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {SentimentalIntroductionText}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <Divider />
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
                                    src={process.env.PUBLIC_URL + '/sentimentPerYear.png'}
                                    alt="network"
                                    className="halfPageImage" />
                            </div>
                        }
                    />
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <img
                                    src={process.env.PUBLIC_URL + '/sentimentPerQ.png'}
                                    alt="network"
                                    className="halfPageImage" />
                            </div>
                        }
                        right={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {Text2}
                            </ReactMarkdown>
                        }
                    />
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default SentimentalPage;