import { Grid, Typography } from '@material-ui/core';
import ImageFigure from '../ImageFigure';
import React from 'react';
import NetworkConstructionText from '../resources/text/networkConstruction';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './HomePage.css';

interface Props {

}

interface State {

}

class HomePage extends React.Component<Props, State>{
    render() {
        return (
            <Grid container direction="column" alignItems="stretch">
                <Grid item>
                    <ImageFigure left={<Typography> Image </Typography>} right={
                        <p style={{ textAlign: 'left', fontSize: 18 }}>
                            <ReactMarkdown plugins={[gfm]} className="markdown">
                                {NetworkConstructionText}
                            </ReactMarkdown>
                        </p>
                    } />
                </Grid>
                <Grid item>
                    <ImageFigure left={<Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis laoreet nunc blandit efficitur. Nunc feugiat sagittis arcu vel varius. Sed diam arcu, malesuada at ultricies ac, consectetur id tellus. Duis nec congue dui. Curabitur efficitur quam in elementum bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer turpis dolor, laoreet vel lacus id, rhoncus ultricies enim. Curabitur vehicula hendrerit purus, sed sagittis leo consectetur nec. Ut tincidunt eget purus ac ornare. Vestibulum ut ipsum porttitor eros pulvinar semper at in eros. Integer vulputate, velit at dapibus tempus, erat ex lacinia mi, eu auctor nisl risus vel purus. Curabitur a ante lorem. Praesent efficitur nibh ligula, vel semper turpis imperdiet ac.
                        Nunc sed nisi diam. Sed id pretium leo. Etiam consectetur, ligula nec condimentum dictum, eros mi venenatis magna, at molestie ligula odio in nunc. Sed interdum enim nisi, vel placerat ante facilisis in. Donec at dui sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum consequat nisi quis tempus ornare. Sed facilisis scelerisque convallis. Nunc congue est a neque malesuada aliquet. Etiam id justo turpis. Suspendisse nisi quam, ornare eu malesuada a, maximus nec nunc. Mauris at interdum nulla.
                        Duis augue mauris, ultricies non mauris sit amet, fermentum fermentum erat. Sed magna sapien, accumsan nec mauris a, accumsan blandit diam. Curabitur aliquam ligula vitae lacus pulvinar, quis cursus felis ultricies. Aliquam pulvinar libero ex, eu elementum velit efficitur id. Etiam vestibulum velit erat, et semper enim sollicitudin non. In feugiat lorem eu dignissim aliquam. Suspendisse non eros orci. Proin fringilla ligula ornare urna cursus pretium. Donec molestie pharetra volutpat.
                        </Typography>} right={<Typography> Image </Typography>
                        } />
                </Grid>
                <div style={{ minHeight: "128px" }} />
            </Grid>
        );
    }
}

export default HomePage;