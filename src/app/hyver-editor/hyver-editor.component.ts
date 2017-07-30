import { Component, Input, OnInit } from '@angular/core';
import { Hyver } from '../hyver';

@Component({
    selector: 'app-hyver-editor',
    templateUrl: './hyver-editor.component.html',
    styleUrls: ['./hyver-editor.component.css']
})
export class HyverEditorComponent implements OnInit {

    @Input()
    hyver: Hyver;

    constructor() {
    }

    ngOnInit() {
    }
}
