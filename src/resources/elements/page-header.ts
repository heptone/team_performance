import { Router } from 'aurelia-router';
import {bindable} from 'aurelia-framework';

export class PageHeader {
  @bindable value;

  valueChanged(newValue, oldValue) {
    console.log(newValue);

  }
}

