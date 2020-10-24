import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Counter, Rate } from 'k6/metrics';

var myErrorCounter = new Counter('my_error_counter');
var myFailRate = new Rate('failed requests');

export let options = {
  stages: [
    { duration: '30s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '30s', target: 300 },
    { duration: '1m', target: 300 },
    { duration: '30s', target: 500 },
    { duration: '1m', target: 500 },
    { duration: '30s', target: 700 },
    { duration: '1m', target: 700 },
    { duration: '30s', target: 900 },
    { duration: '3m', target: 900 },
    { duration: '2m', target: 0 },
  ],
  thresholds: {
    'failed requests': ['rate<0.1'],
  }
};

export default function() {
  let res = http.get('http://localhost:8001/entry?search=Congolese+q');
  check(res, { 'status was 200': r => r.status === 200 });
  myFailRate.add(res.status !== 200);
  if (res.status === 404) {
    myErrorCounter.add(1);
  }
  sleep(1);
};