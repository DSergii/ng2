import { Component, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/fromPromise';
import 'whatwg-fetch';

@Component({
    selector: 'app-repos',
    templateUrl: './repos.component.html',
    styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {



    private search: string = '';

    public sequence$: Subject<KeyboardEvent> = new Subject<KeyboardEvent>();

    getSearch( $event: KeyboardEvent ) {
    	
        this.sequence$.next($event);

    }

    public ngOnInit() {
    	this.sequence$
        	.debounceTime(500)
        	.map( (event: KeyboardEvent) => (event.target as HTMLInputElement).value )
        	.switchMap( (inputEl: string) => Observable
        		.fromPromise(fetch(`https://api.github.com/search/repositories?q=${inputEl}`)
        		.then(res => res.json())))
        	.subscribe( res => {
        		
        		console.log(res);
        	})
    }

}

