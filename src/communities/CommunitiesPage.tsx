import { Divider, Grid } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import Text1 from '../resources/text/comm1';
import Text2 from '../resources/text/comm2';
import Text3 from '../resources/text/comm3';
import Text4 from '../resources/text/comm4';
import Text5 from '../resources/text/comm5';
import TopCommStuff1 from '../resources/text/topCommStuff1';
import TopCommStuff2 from '../resources/text/topCommStuff2';
import TopCommStuff3 from '../resources/text/topCommStuff3';
import TopCommStuff4 from '../resources/text/topCommStuff4';
import TopCommStuff5 from '../resources/text/topCommStuff5';
import TopCommStuff6 from '../resources/text/topCommStuff6';
import TopCommStuff7 from '../resources/text/topCommStuff7';
import TopCommStuff8 from '../resources/text/topCommStuff8';
import TopCommStuff9 from '../resources/text/topCommStuff9';
import TopCommStuff10 from '../resources/text/topCommStuff10';
import WordIntro from '../resources/text/wordIntro';
import WordAna from '../resources/text/wordAna';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import '../markdown.css';

interface Props {

}

interface State {

}

class CommunitiesPage extends React.Component<Props, State>{

    topCommStuffList1: string[] = [
        TopCommStuff1,
        TopCommStuff2,
        TopCommStuff3,
        TopCommStuff4,
        TopCommStuff5,
    ];

    topCommStuffList2: string[] = [
        TopCommStuff6,
        TopCommStuff7,
        TopCommStuff8,
        TopCommStuff9,
        TopCommStuff10,
    ];

    cImgs1: string[] = [
        "c8.png",
        "c2.png",
        "c1.png",
        "c0.png",
        "c10.png",
    ];

    cImgs2: string[] = [
        "c16.png",
        "c17.png",
        "c7.png",
        "c4.png",
        "c11.png",
    ];

    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text1}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {Text2}
                            </ReactMarkdown>
                        }
                        right={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <img
                                    src={process.env.PUBLIC_URL + '/connect.png'}
                                    alt="connect"
                                    className="halfPageImage" />
                            </div>
                        }
                    />
                </Grid>
                <Grid item>
                    <ImageFigure
                        left={
                            <div style={{ height: "100%", display: "flex", justifyContent: "center", alignContent: "center" }}>
                                <Grid container direction="column" justify="center">
                                    <Grid item>
                                        <img
                                            src={process.env.PUBLIC_URL + '/cBar.png'}
                                            alt="cBar"
                                            className="halfPageImage" />
                                    </Grid>
                                    <Grid item>
                                        <img
                                            src={process.env.PUBLIC_URL + '/cSize.png'}
                                            alt="cSize"
                                            className="halfPageImage" />
                                    </Grid>
                                </Grid>
                            </div>
                        }
                        right={
                            <ReactMarkdown plugins={[gfm]} className="MDbody">
                                {Text3}
                            </ReactMarkdown>
                        }
                    />
                </Grid>
                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text4}
                        </ReactMarkdown>
                    </div>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        {this.topCommStuffList1.map((n, i) =>
                            <div style={{ width: "19.9%", borderLeft: i === 0 ? "0px solid black" : "1px solid black" }}>
                                <Grid item>
                                    <ReactMarkdown plugins={[gfm]} className="MDbody">
                                        {n}
                                    </ReactMarkdown>
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>

                <Divider />

                <Grid item>
                    <Grid container direction="row">
                        {this.topCommStuffList2.map((n, i) =>
                            <div style={{ width: "19.9%", borderLeft: i === 0 ? "0px solid black" : "1px solid black" }}>
                                <Grid item>
                                    <ReactMarkdown plugins={[gfm]} className="MDbody">
                                        {n}
                                    </ReactMarkdown>
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>

                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {Text5}
                        </ReactMarkdown>
                    </div>
                </Grid>

                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {WordIntro}
                        </ReactMarkdown>
                    </div>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        {this.cImgs1.map((n, i) =>
                            <div style={{ width: "20%" }}>
                                <Grid item>
                                    <img
                                        src={process.env.PUBLIC_URL + '/' + n}
                                        alt={n}
                                        className="halfPageImage" />
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid container direction="row">
                        {this.cImgs2.map((n, i) =>
                            <div style={{ width: "20%" }}>
                                <Grid item>
                                    <img
                                        src={process.env.PUBLIC_URL + '/' + n}
                                        alt={n}
                                        className="halfPageImage" />
                                </Grid>
                            </div>
                        )}
                    </Grid>
                </Grid>

                <Grid item>
                    <div className="centerBodyTextDiv">
                        <ReactMarkdown plugins={[gfm]} className="MDbody">
                            {WordAna}
                        </ReactMarkdown>
                    </div>
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default CommunitiesPage;