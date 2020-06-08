import { Actor } from "./Actor/Actor";
import { Coordinate } from "./Game";
import { Collision } from "./Collision";
export declare class ActorCollision extends Collision {
    detectActorCollisions(mainActor: Actor, secondaryActor: Actor, useMainActorHead?: boolean): Coordinate[];
    detectActorCollision(mainActor: Actor, secondaryActor: Actor): boolean;
    willActorHasACollision(mainActor: Actor, secondaryActor: Actor, coordinate: Coordinate): boolean;
}
