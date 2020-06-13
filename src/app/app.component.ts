import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
     {
      type: 'dropdown-dev',
      templateOptions: {
        label: 'Additional analysis options',
      },
      fieldGroup: [
        {
            
      key: 'Radio',
      type: 'radio',
      templateOptions: {
     //   label: 'Radio',
         inline: true,
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 8' },
        ],
      },
    },
         {
            
      key: 'Radio2',
      type: 'radio',
      templateOptions: {
      //  label: 'Radio',
         inline: true,
        required: true,
        options: [
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 8' },
        ],
      },
    },
      ]
    }
  ];
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */