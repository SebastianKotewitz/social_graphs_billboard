import { Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import Intro from '../resources/text/wordCloud';
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