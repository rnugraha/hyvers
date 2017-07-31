import { Component, OnInit } from '@angular/core';
import { Hyver } from '../hyver';
import { HyverService } from '../hyver.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hyvers',
  templateUrl: './hyvers.component.html',
  styleUrls: ['./hyvers.component.css']
})
export class HyversComponent implements OnInit {

    hyvers: Hyver[];
    selectedHyver: Hyver;

    constructor(private hyverService: HyverService,
                private router: Router) {
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

    gotoDetail(hyver): void {
        this.router.navigate(['/edit', hyver.id]);
    }

    ngOnInit(): void {
        this.hyverService.getHyversSlowly().then( hyvers => {
            this.hyvers = hyvers;
            this.sortAscending();
        });

    }

}
