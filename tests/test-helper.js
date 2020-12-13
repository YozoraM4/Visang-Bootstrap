import Application from 'visang-bootstrap/app';
import config from 'visang-bootstrap/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
