import {ModalController} from './modalController';
export class Modal  implements ng.IComponentOptions {

  public controller: any;
  public templateUrl: any;

  constructor() {
    this.controller = ModalController;
    this.templateUrl = 'modal/modal.html';
  }

}
