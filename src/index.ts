import app from './app';
import { env } from './config/env';

app.listen(env.port, () => {
  console.log(`Servidor corriendo en el puerto ${env.port} (${env.nodeEnv})`);
});