import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './core/editor/editor.component';
import { DocumentEditorContainerModule } from '@syncfusion/ej2-angular-documenteditor';
import { DialogModule, TooltipModule } from '@syncfusion/ej2-angular-popups';

import {
  DropDownButtonModule,
  SplitButtonModule
} from '@syncfusion/ej2-angular-splitbuttons';

import { CheckBoxModule, ButtonModule } from '@syncfusion/ej2-angular-buttons';

import {
  SliderModule,
  NumericTextBoxModule,
  ColorPickerModule
} from '@syncfusion/ej2-angular-inputs';

import { ListViewAllModule } from '@syncfusion/ej2-angular-lists';

import {
  DropDownListModule,
  ComboBoxModule,
  DropDownListAllModule,
  MultiSelectAllModule
} from '@syncfusion/ej2-angular-dropdowns';

import {
  DocumentEditorAllModule,
  DocumentEditorContainerAllModule
} from '@syncfusion/ej2-angular-documenteditor';

import { ToolbarModule, TabModule } from '@syncfusion/ej2-angular-navigations';
@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DocumentEditorContainerModule,
    DialogModule,
    ToolbarModule,
    TabModule,
    DocumentEditorAllModule,
    DocumentEditorContainerAllModule,
    DropDownListModule,
    ComboBoxModule,
    DropDownListAllModule,
    MultiSelectAllModule,
    SliderModule,
    NumericTextBoxModule,
    ColorPickerModule,
    ListViewAllModule,
    DropDownButtonModule,
    SplitButtonModule,
    CheckBoxModule, ButtonModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
