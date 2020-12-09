const text: string = `
It feels like a lot of the popular music nowadays uses a lot of profanity, but is this feeling subjective? Or can we observe a general trend?

To explore this, we will look at how big a part profanity is of music though time and which slurs are the most commonly used. 

We use a blacklist as an indicator of which words should be categorized as profanity. The blacklist is created with the help of the swearing dictionary “noswearing” with can be found through [this link](https://www.noswearing.com/dictionary/).

To get an idea of how much profanity and specifically which words are used in a song lyrics, we define a function which takes a song lyric, tokenizes it and checks whether a token matches any word in the blacklist. For every matched word a dictionary is updated with the word as key and the number of matches as the value.
`;

export default text;