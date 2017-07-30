import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HyverEditorComponent } from './hyver-editor.component';
import { FormsModule } from '@angular/forms';
import { Hyver } from '../hyver';

describe('HyverEditorComponent', () => {

    const hyver = new Hyver(5, 'Nivetika Mahasivam', 'Milk Tea Superintendent', 'http://x');

    let component: HyverEditorComponent;
    let fixture: ComponentFixture<HyverEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                FormsModule
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

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should should render title in a h2 tag', () => {
        expect(fixture.nativeElement.querySelector('h2').innerHTML).toContain('Hyver Editor');
    });
});
