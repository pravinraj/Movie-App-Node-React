'use strict';

let getSectionsData=(movieData)=>{
	let section = {}, 
		firstSection=[],
		secondSection=[],
		thirdSection=[],
		fourthSection=[],
		sectionIndex=0;
	if(movieData.results.length >=0){
		for(sectionIndex=0;sectionIndex<6;sectionIndex++){
			if(movieData.results[sectionIndex]){
				firstSection.push(movieData.results[sectionIndex]);
			} else {
				break;
			}
		}
	}
	if(movieData.results.length >=6){
		for(sectionIndex=6;sectionIndex<12;sectionIndex++){
			if(movieData.results[sectionIndex]){
				secondSection.push(movieData.results[sectionIndex]);
			} else {
				break;
			}
		}
	}
	if(movieData.results.length >=12){
		for(sectionIndex=12;sectionIndex<18;sectionIndex++){
			if(movieData.results[sectionIndex]){
				thirdSection.push(movieData.results[sectionIndex]);
			} else {
				break;
			}
		}
	}
	if(movieData.results.length >=18){
		for(sectionIndex=18;sectionIndex<24;sectionIndex++){
			if(movieData.results[sectionIndex]){
				fourthSection.push(movieData.results[sectionIndex]);
			} else {
				break;
			}
		}
	}
	section = {
		firstSection,
		secondSection,
		thirdSection,
		fourthSection
	};
	return section;
};

export {getSectionsData};