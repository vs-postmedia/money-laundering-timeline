import React from 'react';
import Timeline from '../Timeline/Timeline';
import './App.css';


const timelineUrl = 'https://docs.google.com/spreadsheets/d/1-LPtF2D5Y8760Xch3zxBrkXoli0MIfaFQ7_nhAByOP8/edit?usp=sharing';

function App() {
	return (
	  	<div className="App">
	  		<h1>A brief history of money laundering in B.C. real estate</h1>
	  		<Timeline url={timelineUrl}></Timeline>
	  		<footer><p className="source">Source: U.S., B.C. and federal Canadian court documents; B.C. property and corporate records; archived Postmedia news reports; interviews.</p></footer>
	  	</div>
	);
}

export default App;
