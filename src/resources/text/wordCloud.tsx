const text: string = `
Some terms are naturally a lot more common in songs than others. As the billboard chart only contains the most popular songs, it is assumed that the most common terms relates to the most basic subject of all: romance.

If this is true, and/or if other subjects top the list, is investigated by firstly aggregating lyrics from every song defined in the collected network of artists to one long list of words.

Secondly, commonly used undescriptive words like "and", "or", "that" etc., usually referred to as **stopwords**, have been removed from the list to make the result more relevant.

Finally, the occurances of the remaining words within the list are counted together and plotted in relation to their frequency. This type of plot is referred to as a word cloud.

Not surprisingly, "love" is the most used term in popular songs. Plenty other romantic words like baby, girl, heart are all common as well. Expression words like "oh", "yeah" and "na" top the list to, as does "know" and "like" itself. Ultimately, the most popular words are, well, very basic.

A few swear words like "nigga" and "bitch" does make the cut. This is assumed to be due to more recent releases, which is investigated further in the Sentiment and Profanity sections.
`;

export default text;