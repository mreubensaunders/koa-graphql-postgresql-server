const Koa = require('koa');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const schema = require('./schema');

const server = new Koa();
const port = 3000;

// server.use(async ctx => {
//   ctx.body = 'Hello World';
// });



server.use(mount('/', graphqlHTTP({
  schema: schema,
  graphiql: true
})));

console.log("server running on " + port);
server.listen(port);