const text:string = `
Popularity can be both easy and hard to measure - it all depends on what type of popularity you're measuring. The three popularity lists shown above all measure popularity by connectedness, either to one self, to others or in total.
By looking at the most popular artists who appear often the Billboard chart in relation to others, you also get a clear indication of who music listeners enjoys to see the most in collaborations, and if there exist a pattern in this behaviour.

By analysing these popular artists regarding the type of connectedness, it is clear that most artists belong to the music genre **rap**. The different artists can overall be categorized like so:

**Rappers (Hip Hop)**:
* Drake
* Kanye West
* Lil Wayne
* Travis Scott
* JAY-Z
* Nicki Minaj
* Future
* Young Thug
* Lil Baby

**DJ's (Hip Hop + songwriters)**:
* DJ Khaled
* Metro Booming

**Regular singers (R&B + Pop + hiphop)**:
* Chris Brown

**Artists gatherings**:
* Artists United Against Apartheid
* Artist of then now and forever

The two artist gatherings "**Artists United Against Apartheid**" and "**Artist of then now & forever**" is a collection of artist who gathered together as one group to produce a single song each, "Sun City" and "Forever Country" respectively. As 58 artists featured on the first and 31 on the latter, these one-time artist groups are due to the implemented algorithm ranked as some of the highest valued artists.

It is important to notice that "**Artist of then now & forever**" has been split up into two artists by the algorithm (as explained earlier), and therefore rank as number 8 and 9 respectively with the exact same number of ingoing artists (as both "artists" have ingoing edges from all featuring artitst). This is one example of where the algorithm isn't optimal, but it is extremely hard to prepare for every possible real world scenario, and as the symbol "&" in the title the most often means seperation of main artists on Genius' api, it was decided not to change the chosen approach.
`;

export default text;