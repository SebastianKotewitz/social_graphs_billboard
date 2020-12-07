(this.webpackJsonpsocial_graphs_billboard=this.webpackJsonpsocial_graphs_billboard||[]).push([[0],{178:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),s=n.n(a),o=n(25),r=n.n(o),l=(n(78),n(8)),c=n(9),d=n(40),h=n(11),u=n(10),j=(n(79),n(193)),b=n(194),p=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e;return Object(i.jsx)("div",{style:{minHeight:null!==(e=this.props.minHeight)&&void 0!==e?e:"256px"},children:Object(i.jsxs)(j.a,{container:!0,direction:"row",justify:"space-around",children:[Object(i.jsx)("div",{style:{width:"48%"},children:this.props.left}),Object(i.jsx)("div",{style:{width:"48%"},children:this.props.right})]})})}}]),n}(s.a.Component),g=n(14),m=n.n(g),w=n(15),f=n.n(w),y=(n(48),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(j.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDtitle",children:"Billboard Top 100 analysis"})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{className:"centerBodyTextDiv",children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nMusic plays a part in the daily lives of almost everyone and is one of the most widely used media of entertainment. \nOn average an individual listens to music up to 18 hours a week which corresponds to 52 minutes daily. \nMusic generally gathers inspiration from current trends and topics, which means that it can be quite significant in \ndetermining a popular trend in a specific period. In this project we look at the most popular songs thought history \n(From 1963) and analyze period defining tendencies. What we want to investigate is whether we can observe a generally \ndecrease in sentimental value and an increase in the use of strong language as well as determine whether this is a \ngeneral trend or if it\u2019s based on isolated events.\n"})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{className:"centerBodyTextDiv",children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\n## Dataset\nFor our dataset, we knew that we wanted to look at musical hits. To limit our data to a manageable size, we have chosen to limit our dataset to top songs over the years. This way we limit the amount of data to a smaller size, while still choosing data which represents the time period. We chose 'The Billboard Hot 100' published by The Billboard Magazine as our song dataset, and although this list focuses on popularity in USA, we felt it represented global musical interest well enough for our purpose.  \nThis dataset was not enough, however, as it only included information about *song title*, *artist* and *rank*. We knew that we would need the lyrics of the songs as well, so we had to find an additional source of data.  \nWe turned to the Genius website by Genius Media Group inc and found that they had an API which allowed us to query their database by song title and artist. This second dataset allowed us to make sure our formatting of primary and featuring artists were consistent, as well as allowing us to get the lyrics of the song.  \nIt is the combination of these two dataset which allows us to analyze musical trends ranging from 1965 to today.  \nThe final network contained data from 5161 artists.\n"})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{className:"centerBodyTextDiv",children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\n## Goals\n\nOur project aims to find whether or not there is a negative trend in current music concerning negativity. We want to find out if the general trend of sentimental values in lyrics have been negative, and whether or not the negativity is contained in smaller communities or not. In short, we want to answer the following questions:\n\n- Is there a general negative trend when it comes to the average sentimental values of lyrics over the years?\n- Can we, via communities, find local interconnected groups of artists that line up with our understanding of genres and collaborating artists?\n- Is there a contained lower sentimental average within recent communities?\n"})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(b.a,{})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(p,{left:Object(i.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignContent:"center"},children:Object(i.jsx)("img",{src:"/social_graphs_billboard/network.png",alt:"network",className:"halfPageImage"})}),right:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nThe network was constructed using python.  \nWe initially scraped data from the Top 100 Billboard website to get the title, artist and placement of \nevery hit song on the list for every week dating back to 1963.  \nThis information was processed by our network constructor class. The constructor would use the simple information \nfrom the html scraping, in order to query and retreive more in depth information, such as lyrics and featuring artists, \nfrom the Genius API.  \n\nThe result of the API allowed us to place the song on a node corresponding with the primary artist, or multiple nodes \nif multiple artists are credited as the primary artist, while also constructing edges from the featured \nartists to the primary artist(s) with the song title as a label.  \nThe song is put in a dictionary attribute of the artist node with the song title as key. The values of the \nsong entries are *lyrics*, *placements* and *sVal*.  \nThe lyrics are scraped directly off the Genius website using the URL provided by the API. The placements are a \nlist of objects, each representing a placement on the top 100 Billboards with their respective year, week and position.  \n  \nThe sVal, or sentimental value, is calculated based on the lyrics by tokenizing, removing stop words, and \ntaking the average sentimental value of the words based on the wordlist from [this link](https://journals.plos.org/plosone/article/file?type=supplementary&id=info:doi/10.1371/journal.pone.0026752.s001). \n"})})}),Object(i.jsx)("div",{style:{minHeight:"128px"}})]})}}]),n}(s.a.Component)),v=n(198),O=n(196),x=n(197),k=n(195),W=n.p+"static/media/wreath.9d27b775.png",T=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e,t,n,a=this;return Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(x.a,{color:"inherit",onClick:function(){return a.props.setWindow(a.props.window)},children:Object(i.jsxs)(j.a,{container:!0,direction:"row",spacing:4,justify:"center",alignItems:"center",children:[this.props.christmasMode&&Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("img",{src:W,style:{width:"32px",height:"32px"}})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{style:{alignContent:"center"},children:Object(i.jsx)(k.a,{variant:null!==(e=this.props.typographyVariant)&&void 0!==e?e:"body1",color:null===(t=this.props.selected)||void 0===t||t?"secondary":"inherit",children:null!==(n=this.props.label)&&void 0!==n?n:""})})}),this.props.christmasMode&&Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("img",{src:W,style:{width:"32px",height:"32px"}})})]})})})}}]),n}(s.a.Component),C=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsx)(v.a,{position:"sticky",children:Object(i.jsx)(O.a,{children:Object(i.jsxs)(j.a,{container:!0,direction:"row",alignItems:"center",justify:"space-between",children:[Object(i.jsx)(T,{label:"Home",typographyVariant:"h5",setWindow:this.props.setWindow,window:0,selected:0==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Collaborations",setWindow:this.props.setWindow,window:1,selected:1==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Word Clouds",setWindow:this.props.setWindow,window:2,selected:2==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Communities",setWindow:this.props.setWindow,window:3,selected:3==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Sentimental Analysis",setWindow:this.props.setWindow,window:4,selected:4==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Profanity",setWindow:this.props.setWindow,window:5,selected:5==this.props.selectedWindow}),Object(i.jsx)(T,{label:"Christmas",setWindow:this.props.setWindow,window:6,selected:6==this.props.selectedWindow,christmasMode:!0})]})})})}}]),n}(s.a.Component),I=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{style:{position:"fixed",bottom:0,width:"100%",backgroundColor:"grey"},children:Object(i.jsxs)(j.a,{container:!0,direction:"row",justify:"flex-end",children:[Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(x.a,{target:"_blank",href:"https://github.com/SebastianKotewitz/social_graphs_billboard/raw/main/downloadFiles/fullNetworkSentiment.gpickle",variant:"contained",style:{marginRight:"24px"},children:"Download Network"})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(x.a,{target:"_blank",href:"http://www.google.com/",variant:"contained",style:{marginRight:"24px"},children:"Download ipynb"})})]})})}}]),n}(s.a.Component),N=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(j.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{className:"centerBodyTextDiv",children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nFor sentimental values we went through all lyrics in the network. Using the happines_average \nvalues of the wordlist from \n[this link](https://journals.plos.org/plosone/article/file?type=supplementary&id=info:doi/10.1371/journal.pone.0026752.s001), \nwe took all non-stop words in a songs lyrics and calculated the average score. This one value is used as the sentimental \nvalue of the lyrics for that song.\n"})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(b.a,{})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(p,{left:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nInterested in how the trend in average sentimental value over time looked, we looked at the average sentimental \nvalue of songs for every year since 1965. We plotted the data points in a bar graph to visualize the evolution over \ntime. This visualization revealed a negative trend in the average sentimental value of lyrics for each year. \nOur graph is shown zoomed in to highlight the trend, and it is only meant to show the fact that such a trend \nexists. It is not necessarily meant to show the magnitude of the change over time.  \nThe findings of this analysis aligns with our initial hypothesis and marks completion of one of our core goals. \nMusic has indeed become more negatively charged over time if we consider the sentimental value of lyrics as an indicator.\n"}),right:Object(i.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignContent:"center"},children:Object(i.jsx)("img",{src:"/social_graphs_billboard/sentimentPerYear.png",alt:"network",className:"halfPageImage"})})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(p,{left:Object(i.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignContent:"center"},children:Object(i.jsx)("img",{src:"/social_graphs_billboard/sentimentPerQ.png",alt:"network",className:"halfPageImage"})}),right:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nOut of curiosity, we also made a visualization of the average sentimental value of songs within quarters of the year. \nEvery song had its sentimental value attached to the quarter of the year in which it first appeared, and the average \nsentimental value for each of the four yearly quarters was calculated. These averages are presented as a bar graph, \nand it is shown that the average sentimental value of songs per quarter is *very* similar. The graph shows no significant \nrelation between quarter and sentimental value. The data is independent of release year.\n"})})}),Object(i.jsx)("div",{style:{minHeight:"128px"}})]})}}]),n}(s.a.Component),D=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(j.a,{container:!0,direction:"column",alignItems:"stretch",children:[Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)("div",{className:"centerBodyTextDiv",children:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nWe wanted to see the trend in collaborations over the years. To do this, we looked at all edges in the dataset. \nWe wanted the data to be normalized, so we also had to count the amount of songs for each year. \nThe year of a song is determined by the first time it appears on the Billboard list.  \n\nWe hypothesized that the amount of collaborations have grown over time, so we figured out a way of visualizing \nthe trend of collaborations when compared to the total amount of songs for each year.\n"})})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(b.a,{})}),Object(i.jsx)(j.a,{item:!0,children:Object(i.jsx)(p,{left:Object(i.jsx)(m.a,{plugins:[f.a],className:"MDbody",children:"\nThe graph shows the relation between total songs and the amount of songs which have been collaboratory work, where \n0 is if no songs are collaborative works, and a value of 1 is if every song is a collaboration.  \nThe results show a considerable trend towards more collaboration. It is also interesting to see how some \nof the earlier years appear to have more collaboration between artists than the years 1970-1989. \n"}),right:Object(i.jsx)("div",{style:{height:"100%",display:"flex",justifyContent:"center",alignContent:"center"},children:Object(i.jsx)("img",{src:"/social_graphs_billboard/collabsPerSongPerYear.png",alt:"network",className:"halfPageImage"})})})}),Object(i.jsx)("div",{style:{minHeight:"128px"}})]})}}]),n}(s.a.Component),M=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).setWindow=i.setWindow.bind(Object(d.a)(i)),i.state={selectedWindow:0},i}return Object(c.a)(n,[{key:"setWindow",value:function(e){this.setState({selectedWindow:e})}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(C,{setWindow:this.setWindow,selectedWindow:this.state.selectedWindow}),Object(i.jsxs)("header",{className:"App-header",children:[0===this.state.selectedWindow?Object(i.jsx)(y,{}):Object(i.jsx)("div",{}),1===this.state.selectedWindow?Object(i.jsx)(D,{}):Object(i.jsx)("div",{}),4===this.state.selectedWindow?Object(i.jsx)(N,{}):Object(i.jsx)("div",{})]}),Object(i.jsx)(I,{})]})}}]),n}(s.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,199)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(M,{})}),document.getElementById("root")),_()},48:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){}},[[178,1,2]]]);
//# sourceMappingURL=main.b0c2756b.chunk.js.map