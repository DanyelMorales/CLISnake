import {View} from "./View";
import {Canvas} from "../Canvas";
import {Debug, debug} from "../Utils/Debug";

export class CliSnake implements View {
    @debug()
    render(matrix: Canvas) {
        let rendered = matrix.matrix.map((e) => e.join(" ")).join("\n");
        Debug.build().debug("\n" + rendered);
        console.log('\x1Bc' + rendered);
    }
}