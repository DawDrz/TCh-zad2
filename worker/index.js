const keys = require('./keys');
const redis = require('redis');
const Math = require('mathjs');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

const n = 5;
const a1 = 1;

function fib(q) {
  return a1 * Math.pow(q,  (n - 1));
}

sub.on('message', (channel, message) => {
  const timestamp = + new Date();
  redisClient.zadd(
      'results',
      timestamp,
      JSON.stringify({
        key: message,
        value: fib(parseInt(message))
      })
  );
});
sub.subscribe('insert');
