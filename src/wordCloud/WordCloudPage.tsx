import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import Intro from '../resources/text/wordCloud';
import PopIntro from '../resources/text/popSongsIntro';
import PopIntroPre from '../resources/text/popIntro';
import PopText1 from '../resources/text/popSongsText1';
import PopText2 from '../resources/text/popSongsText2';
import PopFig1 from '../resources/text/popSongsFig1';
import PopFig2 from '../resources/text/popSongsFig2';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class WordCloudPage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {PopIntroPre}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {PopIntro}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {PopText1}
                            </ReactMarkdown>
                        }
                        right={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {PopFig1}
                            </ReactMarkdown>
                        }
                    />
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {PopText2}
                            </ReactMarkdown>
                        }
                        right={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {PopFig2}
                            </ReactMarkdown>
                        }
                    />
                </Grid>
                <Grid item>
                    <Divider />
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {Intro}
                            </ReactMarkdown>
                        }
                        right={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <img
                                    src={process.env.PUBLIC_URL + '/mostPop.png'}
                                    alt="mostPop"
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

export default WordCloudPage;