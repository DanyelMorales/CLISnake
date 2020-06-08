import {Debug, debug} from "./Utils/Debug";
import {Actor} from "./Actor/Actor";
import {Coordinate} from "./Game";
import {Collision} from "./Collision";

export class ActorCollision extends Collision {

    @debug()
    detectActorCollisions(mainActor: Actor, secondaryActor: Actor, useMainActorHead?: boolean): Coordinate[] {
        if (useMainActorHead) {
            return mainActor.head ? this.searchCoordinateInCoordinates(mainActor.head, secondaryActor.coordinates) : [];
        }
        return mainActor.coordinates.flatMap((c) => this.searchCoordinateInCoordinates(c, secondaryActor.coordinates));
    }

    @debug()
    detectActorCollision(mainActor: Actor, secondaryActor: Actor): boolean {
        if (!mainActor.head) {
            Debug.build().debug("NOT HEAD , NO COLLISION");
            return false;
        }
        return this.detectActorCollisions(mainActor, secondaryActor, true).length > 0;
    }

    @debug()
    willActorHasACollision(mainActor: Actor, secondaryActor: Actor, coordinate: Coordinate) {
        let x = mainActor.sumCoordinates(mainActor.head, coordinate);
        return this.isCoordinateInCoordinates(x, secondaryActor.coordinates);
    }
}