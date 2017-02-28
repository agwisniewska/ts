'use strict';
import * as angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';
import { modalModule } from './modal/modalModule';
import './index.scss';

export const app = angular.module('app', [ 'modalModule', 'ui.router'])
  .config(routesConfig);



