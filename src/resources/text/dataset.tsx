const text: string = `
## Dataset
For our dataset, we knew that we wanted to look at musical hits. To limit our data to a manageable size, we chose to only gather data from top songs over the years. This way we limited the amount of data to a smaller size, but we still kept the data as representative of the time period. We chose 'The Billboard Hot 100' published by The Billboard Magazine as our song dataset, and although this list focuses on popularity in USA, we felt it represented global musical interest well enough for our purpose.  
This dataset was not enough, however, as it only included information about *song title*, *artist* and *rank*. We knew that we would need the lyrics of the songs as well, so we had to find an additional source of data.  
We turned to the Genius website by Genius Media Group inc and found that they had an API which allowed us to query their database by song title and artist. This second dataset allowed us to make sure our formatting of primary and featuring artists were consistent, and also allowed us to get the lyrics of the song.  
It was the combination of these two dataset which allowed us to analyze musical trends ranging from 1963 to today.  
The final network contained data from 5161 artists.
`;

export default text;