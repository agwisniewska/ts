import {ModalContentController} from './modalContentController';

export class ModalContent implements ng.IComponentOptions {

  public bindings: any;
  public controller: any;
  public templateUrl: string;

  constructor() {
    this.bindings = {
      functionBinding: '&',
    };
    this.controller = ModalContentController;
    this.templateUrl = require('modal_content.html');
  }
}

