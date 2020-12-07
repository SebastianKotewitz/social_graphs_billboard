const text: string =
    `The network was constructed using python.  
We used a network constructor class which took an input of start and end year in order to create the network.  
The constructor would read through dictionary files consisting of every weeks Billboard top 100 list of music, 
with one dictionary file per year. This data was scraped from the html of the Billboard top 100 for every week 
dating back to 1963.  
  
The network constructor would take each of these top 100 listings and look them up in 
the Genius API. From this API we could get the details of the primary artist(s), as well as any featuring artists. 
If the API did not return a resulting song with a release year at or before the listing, nothing was recorded.  
  
The result of the API allowed us to place the song on a node corresponding with the primary artist(s), while also 
constructing edges from the featured artists to the primary artist(s) with the song title as a label. The song 
is put in a dictionary attribute of the artist node with the song title as key. The values of the song entries are 
*lyrics*, *placements* and *sVal*.  
The lyrics are scraped directly off of Genius using the URL provided by the API. The placements are a list of objects, 
representing a placement on the top 100 Billboards with their respective year, week and position.  
  
The sVal, or semantics value, is calculated based on the lyrics by tokenizing, removing stop words, and 
taking the average sentimental value of the words based on the wordlist from [this link](https://journals.plos.org/plosone/article/file?type=supplementary&id=info:doi/10.1371/journal.pone.0026752.s001)
`;

export default text;