import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HyverEditorComponent } from './hyver-editor/hyver-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HyverEditorComponent
  ],
  imports: [
      BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
