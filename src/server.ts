import app from './app';
import { env } from './config/env';

app.get('/', (req, res) => {
  res.send('Hai ');
});

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});
