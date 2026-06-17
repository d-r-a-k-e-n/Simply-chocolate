import express from 'express';
import { connectDb } from './config/db.js';
import mailerModule from './modules/mailer/mailer.controller.js';
import productModule from './modules/product/product.controller';
import responseModule from './modules/response/response.controller';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3333;
const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error('MONGODB_URI is not defined in apps/api/.env');
  process.exit(1);
}

const dbUri = mongoUri;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use('/api/mailer', mailerModule);
app.use('/api/product', productModule);
app.use('/api/response', responseModule);

async function bootstrap() {
  try {
    await connectDb(dbUri);
    app.listen(port, host, () => {
      console.log(`[ ready ] http://${host}:${port}`);
    });
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
}

bootstrap();
