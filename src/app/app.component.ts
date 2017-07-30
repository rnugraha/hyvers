import { Component, OnInit } from '@angular/core';
import { Hyver } from './hyver';
import { HyverService } from './hyver.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Hyvers';
    hyvers: Hyver[];
    selectedHyver: Hyver;

    constructor(private hyverService: HyverService) {
    }

    private sortAscending(): Array<Hyver> {
        return this.hyvers.sort( (hyverX, hyverY) => {
            return hyverX.rank - hyverY.rank;
        });
    }

    isSelected(hyver: Hyver): boolean {
        return this.selectedHyver ? hyver.name === this.selectedHyver.name : false;
    }

    selectHyver(hyver: Hyver): void {
        this.selectedHyver = hyver;
    }

    ngOnInit(): void {
        this.hyverService.getHyversSlowly().then( hyvers => {
            this.hyvers = hyvers;
            this.sortAscending();
        });

    }

}
