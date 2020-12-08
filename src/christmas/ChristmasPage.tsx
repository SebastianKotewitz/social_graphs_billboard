import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import Intro from '../resources/text/christmasIntro';
import Text1 from '../resources/text/christmas1';
import Text2 from '../resources/text/christmas2';
import Fig1 from '../resources/text/christmasFig1';
import Fig2 from '../resources/text/christmasFig2';
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
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Intro}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <ImageFigure
                    left={
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text1}
                        </ReactMarkdown>
                    }
                    right={
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Fig1}
                        </ReactMarkdown>
                    }
                />
                <ImageFigure
                    left={
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text2}
                        </ReactMarkdown>
                    }
                    right={
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Fig2}
                        </ReactMarkdown>
                    }
                />
                <div style={{ minHeight: "128px" }} />
            </Grid >
        );
    }
}

export default HomePage;