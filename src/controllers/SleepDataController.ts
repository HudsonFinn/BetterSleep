import ErrorHandler from "../models/ErrorHandler";

class SleepDataController {
    defaultMethod() {
        /*
        return {
            text: `You've reached the ${this.constructor.name} default method`
        };
        */
        throw new ErrorHandler(501, 'Not implemented method');
    }
}

export = new SleepDataController();