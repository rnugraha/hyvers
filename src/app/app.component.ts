import { Component, OnInit } from '@angular/core';
import { Hyver } from './hyver';

const HYVERS: Hyver[] = [
    new Hyver(4, 'Frank Bijlsma', 'Zoo Keeper', 'http://thehyve.nl/wp-content/uploads/Ditta-van-Gent-fotografie-50-1.jpg'),
    new Hyver(2, 'Carolyn Langen', 'Potluck Organisator', 'http://thehyve.nl/wp-content/uploads/Ditta-van-Gent-fotografie-22-2.jpg'),
    new Hyver(1, 'Huub Kant', 'Overseas Traveller', 'http://thehyve.nl/wp-content/uploads/Ditta-van-Gent-fotografie-60-1.jpg'),
    new Hyver(3, 'Barteld Klasens', 'Story Teller', 'http://thehyve.nl/wp-content/uploads/Ditta-van-Gent-fotografie-40-1.png'),
    new Hyver(5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://thehyve.nl/wp-content/uploads/Ditta-van-Gent-fotografie-24.png')
];

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'Hyvers';
    hyvers = HYVERS;

    constructor() {
    }

    private sortAscending() {
        return this.hyvers.sort( (hyverX, hyverY) => {
            return hyverX.rank - hyverY.rank;
        });
    }

    ngOnInit(): void {
        this.sortAscending();
    }

}
