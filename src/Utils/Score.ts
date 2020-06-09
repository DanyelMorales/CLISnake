import {Actor} from "../Actor/Actor";

export class Score {

    private _actorBehavior = {
        "Snake": {
            points: (current) => current + 10

        }
    };

    addPoints(actor: Actor) {

    }
}