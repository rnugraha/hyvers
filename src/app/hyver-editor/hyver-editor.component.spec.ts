import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyverEditorComponent } from './hyver-editor.component';
import { FormsModule } from '@angular/forms';
import { Hyver } from '../hyver';
import { HyverService } from '../hyver.service';
import { ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';

xdescribe('HyverEditorComponent', () => {

    const hyver = new Hyver(100, 5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://x');

    let component: HyverEditorComponent;
    let fixture: ComponentFixture<HyverEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                HyverService,
                {
                    provide: ActivatedRoute, useValue: Observable.of({'id': 100})
                },
                Location,
                LocationStrategy,
            ],
            imports: [
                FormsModule,
                RouterTestingModule
            ],
            declarations: [HyverEditorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HyverEditorComponent);
        component = fixture.componentInstance;
        component.hyver = hyver;
        fixture.detectChanges();
    });

    xit('should be created', () => {
        expect(component).toBeTruthy();
    });

    xit('should should render title in a h2 tag', () => {
        expect(fixture.nativeElement.querySelector('h2').innerHTML).toContain('Hyver Editor');
    });
});
