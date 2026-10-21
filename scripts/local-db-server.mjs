// Local development DB server script
import { createServer } from '@electric-sql/pglite'

const server = createServer({
  port: 5432,
  database: 'pizzacut',
});

server.listen().then(() => {
  console.log('PGlite server running on port 5432');
});
