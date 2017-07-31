import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyversComponent } from './hyvers.component';
import { Hyver } from '../hyver';
import { HyverEditorComponent } from '../hyver-editor/hyver-editor.component';
import { HyverService } from '../hyver.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MockRouter } from '../mock-route.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('HyversComponent', () => {

    const hyver = new Hyver(100, 5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://x');
    const hyver2 = new Hyver(200, 4, 'Riza Nugraha', 'Dancer', 'http://y');

    let component: HyversComponent;
    let fixture: ComponentFixture<HyversComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            providers: [
                HyverService,
                {provide: Router, useClass: MockRouter}
            ],
            declarations: [
                HyversComponent,
                HyverEditorComponent
            ],        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HyversComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    // FIXME : Hitting CORS error
    xit('should render 5 hyvers', async(() => {
        const app = fixture.debugElement.componentInstance;
        app.ngOnInit();
        expect(app.hyvers.length).toEqual(5);
    }));

    it('should return true when checking right selected hyver', async(() => {
        const app = fixture.debugElement.componentInstance;
        app.selectedHyver = hyver;
        const isSelected = app.isSelected(hyver);
        expect(isSelected).toEqual(true);
    }));

    it('should select a hyver', async(() => {
        const app = fixture.debugElement.componentInstance;
        app.selectedHyver = hyver;
        app.selectHyver(hyver2);
        expect(app.selectedHyver.name).toEqual('Riza Nugraha');
    }));
});
