import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HyverEditorComponent } from './hyver-editor/hyver-editor.component';
import { Hyver } from './hyver';
import { HyverService } from './hyver.service';

describe('AppComponent', () => {

    const hyver = new Hyver(5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://x');
    const hyver2 = new Hyver(4, 'Riza Nugraha', 'Dancer', 'http://y');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
            ],
            providers: [
                HyverService
            ],
            declarations: [
                AppComponent,
                HyverEditorComponent
            ],
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it(`should have as title 'Hyvers'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('Hyvers');
    }));

    xit('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('My favourite Hyvers!');
    }));

    xit('should render 5 hyvers', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        app.ngOnInit();
        expect(app.hyvers.length).toEqual(5);
    }));

    it('should return true when checking right selected hyver', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        app.selectedHyver = hyver;
        const isSelected = app.isSelected(hyver);
        expect(isSelected).toEqual(true);
    }));

    it('should select a hyver', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        app.selectedHyver = hyver;
        app.selectHyver(hyver2);
        expect(app.selectedHyver.name).toEqual('Riza Nugraha');
    }));
});
