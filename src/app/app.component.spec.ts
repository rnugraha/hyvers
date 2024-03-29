import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HyverEditorComponent } from './hyver-editor/hyver-editor.component';
import { Hyver } from './hyver';
import { HyverService } from './hyver.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http, HttpModule, Response, ResponseOptions } from '@angular/http';

describe('AppComponent', () => {

    const hyver = new Hyver(100, 5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://x');
    const hyver2 = new Hyver(200, 4, 'Riza Nugraha', 'Dancer', 'http://y');

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                RouterTestingModule
            ],
            providers: [
                HyverService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    useFactory: (backend, options) => new Http(backend, options),
                    deps: [MockBackend, BaseRequestOptions]
                }
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

    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('My favourite Hyvers!');
    }));
});
