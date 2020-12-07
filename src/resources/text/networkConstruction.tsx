const text: string = `
The network was constructed using python.  
We initially scraped data from the Top 100 Billboard website to get the title, artist and placement of 
every hit song on the list for every week dating back to 1963.  
This information was processed by our network constructor class. The constructor would use the simple information 
from the html scraping, in order to query and retreive more in depth information, such as lyrics and featuring artists, 
from the Genius API.  

The result of the API allowed us to place the song on a node corresponding with the primary artist, or multiple nodes 
if multiple artists are credited as the primary artist, while also constructing edges from the featured 
artists to the primary artist(s) with the song title as a label.  
The song is put in a dictionary attribute of the artist node with the song title as key. The values of the 
song entries are *lyrics*, *placements* and *sVal*.  
The lyrics are scraped directly off the Genius website using the URL provided by the API. The placements are a 
list of objects, each representing a placement on the top 100 Billboards with their respective year, week and position.  
  
The sVal, or sentimental value, is calculated based on the lyrics by tokenizing, removing stop words, and 
taking the average sentimental value of the words based on the wordlist from [this link](https://journals.plos.org/plosone/article/file?type=supplementary&id=info:doi/10.1371/journal.pone.0026752.s001). 
`;

export default text;