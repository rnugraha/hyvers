import { Component, OnInit } from '@angular/core';
import { Hyver } from '../hyver';
import { HyverService } from '../hyver.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-hyver-editor',
    templateUrl: './hyver-editor.component.html',
    styleUrls: ['./hyver-editor.component.css']
})
export class HyverEditorComponent implements OnInit {

    hyver: Hyver;

    constructor(private hyverService: HyverService,
                private route: ActivatedRoute,
                private location: Location) {
    }

    ngOnInit(): void {
        // we want to get the id of hyver and then get the
        this.route.paramMap
            .switchMap((params: ParamMap) => this.hyverService.getHyver(+params.get('id')))
            .subscribe(hyver => this.hyver = hyver);
    }

    goBack(): void {
        this.location.back();
    }
}
