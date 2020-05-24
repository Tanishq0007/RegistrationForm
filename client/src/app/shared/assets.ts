import { environment } from '../../environments/environment';
export let DOMAIN: any;
export let ASSETS: any;

if (!environment['production']) {
  DOMAIN = 'http://localhost:8000';
} else {
  DOMAIN = '.';
}