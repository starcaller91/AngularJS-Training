"use strict";
const AsyncScheduler_1 = require('./AsyncScheduler');
class AsapScheduler extends AsyncScheduler_1.AsyncScheduler {
    flush() {
        this.active = true;
        this.scheduled = undefined;
        const { actions } = this;
        let error;
        let index = -1;
        let count = actions.length;
        let action = actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (++index < count && (action = actions.shift()));
        this.active = false;
        if (error) {
            while (++index < count && (action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}
exports.AsapScheduler = AsapScheduler;
//# sourceMappingURL=AsapScheduler.js.map