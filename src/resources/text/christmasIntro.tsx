const text: string = `
## Christmas Special
As a supplement to the sentiment analysis we would like take a closer look on the most popular Christmas songs in our network. Our assumption is that Christmas songs generally have a high sentimental value, since it's the most wonderful time of year.

The way we identify and separate Christmas songs amongst the rest, is by going through the network discarding all the songs that have been on the hot 100 chart in the weeks from 5 to 44, which correlates to all months with November, December and January excluded. We assume that Christmas songs becomes popular on a yearly basis, therefore we make sure that it can only be a Christmas song if it appears on the chart multiple years.
`;

export default text;