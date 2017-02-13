import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackBy'
})
export class TrackByPipe implements PipeTransform {

  transform(value: any, searchTerm: string): any {

  	if (!searchTerm) {
      return value;
    }

    if(searchTerm.toLowerCase() === 'sea'){
    	return value.filter(function(searchTerm){
	    	return searchTerm.sea === true;
	    });
    }

    if(searchTerm.toLowerCase() === 'clubs'){
	    return value.sort(function(a, b) {
		    return a.clubs < b.clubs;
		});
    }

    if(searchTerm.toLowerCase() === 'hotels'){
	    return value.sort(function(a, b) {
		    return a.hotels < b.hotels;
		});
    }
    

  }


}
