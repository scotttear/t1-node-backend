import express, { Application, json, urlencoded } from 'express';
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
    this.app.use(urlencoded({ extended:true }));
  }
}

export default App;
