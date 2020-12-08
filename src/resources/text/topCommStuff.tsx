const text: string = `
----------- Community 8 -----------

---- Top 10 artists by degree ----

{'Drake': 72, 'Future': 64, 'Metro Boomin': 56, 'Travis Scott': 55, '21 Savage': 49, 'Lil Baby': 47, 'Young Thug': 47, 'Gunna': 35, 'Juice WRLD': 32, 'Lil Uzi Vert': 28}

---- Top 10 artists by songs ----

{'Drake': 151, 'Future': 73, 'The Weeknd': 56, 'Lil Uzi Vert': 48, 'Meek Mill': 42, 'YoungBoy Never Broke Again': 41, 'Post Malone': 39, 'Lil Baby': 38, 'Juice WRLD': 36, 'Travis Scott': 34}

----------- Community 2 -----------

---- Top 10 artists by degree ----

{'Fat Joe': 14, 'Ja Rule': 11, 'Mary J. Blige': 7, 'Case': 6, 'Fabolous': 6, 'Kelly Price': 6, 'Ashanti': 6, 'Artists Stand Up to Cancer': 5, 'Dre': 4, 'Remy Ma': 4}

---- Top 10 artists by songs ----

{'Mary J. Blige': 31, 'Sheryl Crow': 16, 'Fabolous': 12, 'Fat Joe': 12, 'Ja Rule': 11, 'Jodeci': 11, 'Joe': 10, 'Dru Hill': 10, 'No Doubt': 8, 'Ashanti': 7}

----------- Community 1 -----------

---- Top 10 artists by degree ----

{'Lil Wayne': 82, 'DJ Khaled': 54, 'Chris Brown': 46, 'Nicki Minaj': 40, 'Big Sean': 31, 'Rick Ross': 29, 'Justin Bieber': 24, 'Ariana Grande': 21, 'T-Pain': 21, 'Wale': 18}

---- Top 10 artists by songs ----

{'Lil Wayne': 70, 'Justin Bieber': 65, 'Ariana Grande': 58, 'Chris Brown': 50, 'Nicki Minaj': 43, 'Usher': 35, 'DJ Khaled': 34, 'T.I.': 34, 'Big Sean': 30, 'Trey Songz': 22}

----------- Community 0 -----------

---- Top 10 artists by degree ----

{'Smokey Robinson': 52, 'The Miracles': 50, 'Artists United Against Apartheid': 48, 'Marvin Gaye': 29, 'Tammi Terrell': 15, 'Diana Ross': 10, 'Peabo Bryson': 10, 'Babyface': 7, 'Roberta Flack': 7, 'Kenny G': 6}

---- Top 10 artists by songs ----

{'Marvin Gaye': 48, 'The Temptations': 45, 'The Beach Boys': 43, 'Rod Stewart': 42, 'Diana Ross': 38, 'Smokey Robinson': 34, 'The Miracles': 31, 'Aerosmith': 26, 'Bruce Springsteen': 24, 'Céline Dion': 21}

----------- Community 10 -----------

---- Top 10 artists by degree ----

{'Gladys Knight': 58, 'The Pips': 56, 'Chaka Khan': 12, 'Quincy Jones': 10, 'Rufus': 8, 'Dionne Warwick': 5, 'Brandy': 5, 'James Ingram': 4, 'Johnny Mathis': 3, 'Linda Ronstadt': 3}

---- Top 10 artists by songs ----

{'Billy Joel': 42, 'Gladys Knight': 29, 'Linda Ronstadt': 28, 'The Pips': 28, 'Dionne Warwick': 20, 'Brandy': 15, 'Barry White': 14, 'Monica': 12, 'SWV': 11, 'Jeffrey Osborne': 10}

----------- Community 16 -----------

---- Top 10 artists by degree ----

{'Blake Shelton': 9, 'A$AP Rocky': 8, 'Major Lazer': 8, 'Iyaz': 5, 'Hannah Montana': 4, 'Miley Cyrus': 4, 'Bruno Mars': 4, 'MØ': 3, 'Tracy Byrd': 3, 'Skrillex': 3}

---- Top 10 artists by songs ----

{'Blake Shelton': 37, 'Miley Cyrus': 23, 'Hannah Montana': 20, 'Trace Adkins': 18, 'Train': 14, 'Bruno Mars': 13, 'Gwen Stefani': 12, 'Montgomery Gentry': 10, 'Tyler, The Creator': 10, 'A$AP Rocky': 9}

----------- Community 17 -----------

---- Top 10 artists by degree ----

{'Kenny Rogers': 5, 'Alison Krauss': 4, 'The Crooklyn Dodgers': 3, 'Prince': 3, 'Sheena Easton': 3, 'O.C.': 2, 'Tevin Campbell': 2, 'Chubb Rock': 2, 'Union Station': 2, 'The First Edition': 2}

---- Top 10 artists by songs ----

{'Prince': 27, 'Kenny Rogers': 18, 'Tevin Campbell': 12, 'Sheena Easton': 8, 'John Michael Montgomery': 6, 'The Crooklyn Dodgers': 2, 'O.C.': 1, 'Yvette Michele': 1, 'Alison Krauss': 1, 'Chubb Rock': 1}

----------- Community 7 -----------

---- Top 10 artists by degree ----

{'Brooks': 43, 'Dunn': 43, 'Forever': 31, 'Artists Of Then, Now': 31, 'Tim McGraw': 10, 'Faith Hill': 9, 'Thomas Rhett': 7, 'Vince Gill': 7, 'Waylon Jennings': 6, 'Kenny Chesney': 6}

---- Top 10 artists by songs ----

{'Kenny Chesney': 50, 'Tim McGraw': 49, 'Keith Urban': 40, 'Jason Aldean': 35, 'Rascal Flatts': 34, 'George Strait': 34, 'Brad Paisley': 33, 'Carrie Underwood': 31, 'Luke Bryan': 28, 'Alan Jackson': 25}

----------- Community 4 -----------

---- Top 10 artists by degree ----

{'Paul McCartney': 48, 'Wings': 40, 'John Lennon': 11, 'JID': 10, 'Heavy D': 9, 'Dreamville, Bas': 9, 'Michael Jackson': 8, 'Yoko Ono': 8, 'J. Cole': 6, 'The Rolling Stones': 6}

---- Top 10 artists by songs ----

{'Stevie Wonder': 56, 'The Rolling Stones': 52, 'Michael Jackson': 46, 'Paul McCartney': 39, 'J. Cole': 38, 'Wings': 20, 'Tom Petty and the Heartbreakers': 19, 'TLC': 15, 'Kenny Loggins': 15, 'Jermaine Jackson': 13}

----------- Community 11 -----------

---- Top 10 artists by degree ----

{'JAY-Z': 48, 'Kanye West': 43, 'Eminem': 28, 'Calvin Harris': 18, 'Khalid': 16, 'Beyoncé': 15, 'Pharrell Williams': 15, 'Ed Sheeran': 10, 'Otis Redding': 10, 'Rihanna': 10}

---- Top 10 artists by songs ----

{'Taylor Swift': 105, 'Eminem': 70, 'Kanye West': 65, 'JAY-Z': 50, 'Beyoncé': 48, 'Rihanna': 41, 'Mariah Carey': 40, 'Ed Sheeran': 30, 'Katy Perry': 29, 'P!nk': 28}
`;

export default text;