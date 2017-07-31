import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HyverEditorComponent } from './hyver-editor/hyver-editor.component';
import { HyverService } from './hyver.service';
import { RouterModule } from '@angular/router';
import { HyversComponent } from './hyvers/hyvers.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    declarations: [
        AppComponent,
        HyverEditorComponent,
        HyversComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'hyvers',
                component: HyversComponent
            },
            {
                path: 'edit/:id',
                component: HyverEditorComponent
            }
        ])
    ],
    providers: [HyverService],
    bootstrap: [AppComponent]
})
export class AppModule {}
