const text: string = `
By looking at the most connected artists appearing on the Billboard chart in relation to others, you get a clear indication of who music listeners enjoys to see the most in collaborations, and if there exist a particular pattern in this behaviour.

By analysing these top connected artists, it is clear that most artists belong to the music genre **rap**. The different artists can overall be categorized like so:

**Rappers (Hip Hop)**:
* Drake
* Kanye West
* Lil Wayne
* Travis Scott
* JAY-Z (10)
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

It is worth noting that multiple rappers like "**Nicki Minaj**" for instance, also reckognises as singers. However, as rap is her primary performing form, she and others have been grouped like so.

The artist gathering "**Artists United Against Apartheid**" is a collection of artist who gathered together as one group to produce a single song called "Sun City". As 58 artists featured on this track, this one-time artist group is due to the implemented algorithm ranked as one of the highest valued primary artists.

It is also important to note that "**Earth, Wind**" refers to "**Earth, Wind & Fire**". The band name has been split up into two artists by the implemented algorithm (as & usually refers to different primary artists on Genius). If you were to investigate the network, you would see that "**Fire**" is as expected ranked as number 11 with the exact same number of featured artist connections. This is one example of where the algorithm isn't optimal, but it is extremely hard to prepare for every possible real world scenario, and as "&" most often means seperation of main artists on Genius' api, it was decided not to change the chosen approach.

You can download the network your self and play around with it, and see if you can find other cool patterns/implementation specific attributes. "Artist of then now and forever" is for instance another cool atist group gathering pretty hihgly ranked. Try and see if you can figure out their specific rank!
`;

export default text;