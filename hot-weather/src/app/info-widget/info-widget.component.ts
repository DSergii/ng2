import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-widget',
  templateUrl: './info-widget.component.html',
  styleUrls: ['./info-widget.component.css']
})
export class InfoWidgetComponent implements OnInit {

	@Input()
	public info:any = {title:'SHTA',img:'../../images/1.jpg'};

	constructor() { 

	}

	ngOnInit() {
	}

}
