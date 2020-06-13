import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { AppComponent } from './app.component';
import { PanelDropdownDevType } from './radiobutton-dev-type';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
         types: [
        { name: 'dropdown-dev', component: PanelDropdownDevType }
      ],
      validationMessages: [{ name: 'required', message: 'This field is required' }],
    }),
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent,PanelDropdownDevType],
})
export class AppModule {}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */