import { Component, OnInit } from '@angular/core';
import { HyverService } from '../hyver.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    numberOfHyvers: number;

    constructor(private service: HyverService) {
    }

    ngOnInit() {
       this.service.getHyversAsPromise()
           .then( hyvers => this.numberOfHyvers = hyvers.length);
    }
}
