import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { routerUser } from './routes/user.routes';
import { routerHairCut } from './routes/haircut.routes';

const app = express();

app.use(express.json());

app.use(cors());

app.use("/users", routerUser);

app.use("/haircut", routerHairCut);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    })
  }

  return res.status(500).json({
    status: 'Error',
    message: 'Internal Server Error'

  })


})

app.listen(3333, () => console.log('Server on'));