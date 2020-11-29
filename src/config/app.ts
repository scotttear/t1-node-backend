import express, { Application, json } from 'express';
import cors from 'cors';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(json());
  }
}

export default App;
