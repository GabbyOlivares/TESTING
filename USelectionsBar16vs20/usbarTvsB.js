
/*function makeplot() {
  Plotly.d3.csv("US_Elections.csv", function(data){ processData(data) } );
};

function processData(allRows){

  console.log(allRows);
}*/

//function buildCharts() {

    // Use `d3.json` to fetch the data for the plots
 //d3.csv("US_Elections.csv").then((data) => { 

   
//});


/* DATA FUNCTIONS: Import and Retrieve Data from the data.csv file & execute
Everything Below */
d3.csv("US_Elections.csv")
  .then(function(demoData, err) {
      if (err) throw err;
  
// Format/Parse the Data (convert data as Numbers)
    demoData.forEach(function(data) {
      data.total_votes16 = +data.total_votes16;
      data.total_votes20 = +data.total_votes20;
      data.votes16_Donald_Trump = +data.votes16_Donald_Trump;
      data.votes20_Donald_Trump = +data.votes20_Donald_Trump;
      data.votes16_Hillary_Clinton = +data.votes16_Hillary_Clinton;
      data.votes20_Joe_Biden = +data.votes20_Joe_Biden;
      data.percentage16_Donald_Trump = +data.percentage16_Donald_Trump;
      data.percentage16_Hillary_Clinton = +data.percentage16_Hillary_Clinton;
      data.percentage20_Donald_Trump = +data.percentage20_Donald_Trump;
      data.percentage20_Joe_Biden = +data.percentage20_Joe_Biden;
 
  });   

  //console.log(demoData)
   //TRACE REPUBLICANS
// Trace1 for the Republicans Data
var trace1 = 
{
x: demoData.map(row => row.state),
y: demoData.map(row => row.total_votes16),
//y:demoData.map(row => Math.add(row.total_votes16)),
text: demoData.map(row => row.state),
name: "TotalVotes 16",
type: "bar"
};
console.log(trace1)


// Trace 2 for the Republicans Data
var trace2 = {
x: demoData.map(row => row.state),
y: demoData.map(row => row.total_votes20),
//y:demoData.map(row => Math.add(row.total_votes20)),
text: demoData.map(row => row.state),
name: "TotalVotes 20",
type: "bar"
};


// Combining both traces
var bar_data = [trace1,trace2];

// Apply the group barmode to the layout
var barlayout={
title: " Total votes Republicans & Democrats 2016 vs 2020 search results",
barmode: "group",
xaxis:{title:"State name", automargin:true},
yaxis: {title: "Search Results"}
};


// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot0", bar_data, barlayout);

  


  //TRACE REPUBLICANS
// Trace1 for the Republicans Data
var trace1 = 
  {
  x: demoData.map(row => row.state),
  y: demoData.map(row => row.votes16_Donald_Trump),
  text: demoData.map(row => row.state),
  name: "RepVotes 16",
  type: "bar"
};
  console.log(trace1)
  

// Trace 2 for the Republicans Data
var trace2 = {
  x: demoData.map(row => row.state),
  y: demoData.map(row => row.votes20_Donald_Trump),
  text: demoData.map(row => row.state),
  name: "RepVotes 20",
  type: "bar"
};

 
// Combining both traces
var bar_data = [trace1,trace2];

// Apply the group barmode to the layout
var barlayout={
  title: "Republicans 2016 vs 2020 search results",
  barmode: "group",
  xaxis:{title:"State name", automargin:true},
  yaxis: {title: "Search Results"}
};

 
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot1", bar_data, barlayout);

  

//});

 

// --------------------------------------
 //TRACE DEMOCRATS

// Trace1 for the Democrats Data
var trace1 = 
  {
  x: demoData.map(row => row.state),
  y: demoData.map(row => row.votes16_Hillary_Clinton),
  text: demoData.map(row => row.state),
  name: "DemVotes 16",
  type: "bar"
};
  console.log(trace1)
  

// Trace 2 for the Republicans Data
var trace2 = {
  x: demoData.map(row => row.state),
  y: demoData.map(row => row.votes20_Joe_Biden),
  text: demoData.map(row => row.state),
  name: "DemVotes 20",
  type: "bar"
};

 
// Combining both traces
var bar_data = [trace1,trace2];

// Apply the group barmode to the layout
var barlayout={
  title: "Democrats 2016 vs 2020 search results",
  barmode: "group",
  xaxis:{title:"State name", automargin:true},
  yaxis: {title: "Search Results"}
};

 
// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot2", bar_data, barlayout);



});






