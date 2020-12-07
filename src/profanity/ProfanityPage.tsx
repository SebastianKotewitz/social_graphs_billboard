import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import ProfanityIntro from '../resources/text/profanityIntro';
import Text1 from '../resources/text/profanityText1';
import Text2 from '../resources/text/profanityText2';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class ProfanityPage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {ProfanityIntro}
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
                                    src={process.env.PUBLIC_URL + '/profanity1.png'}
                                    alt="profanity1"
                                    className="halfPageImage" />
                            </div>
                        }
                    />
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text2}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <img
                            src={process.env.PUBLIC_URL + '/profanity2.png'}
                            alt="profanity2"
                            className="halfPageImage"
                        />
                    </div>
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default ProfanityPage;