'use strict';
import * as angular from 'angular';
import {Modal} from './modal'
import {ModalController} from './modalController';
import IModule = angular.IModule;

export const modalModule: IModule = angular.module('modalModule', [])
  .component('modal', new Modal())
  .controller('ModalController', ModalController);

// angular.module('agula', [])
//   .component('modal', new Modal)
//   .controller('ModalController', ModalController);
