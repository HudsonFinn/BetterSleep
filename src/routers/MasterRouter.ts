import { Router } from 'express';
import SleepDataRouter from './SleepDataRoutes/SleepDataRouter';
import UserRouter from './UserRoutes/UserRouter';

class MasterRouter {
    private _router = Router();
    private _subrouterSleepData = SleepDataRouter;
    private _subrouterUser = UserRouter;

    get router() {
        return this._router;
    }
     
    constructor() {
        this._configure();
    }


    private _configure() {
        this._router.use('/user', this._subrouterUser);
        this._router.use('/sleep', this._subrouterSleepData);
    }
}

export = new MasterRouter().router;