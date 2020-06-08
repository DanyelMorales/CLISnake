import { Canvas } from "../Canvas";
export interface View {
    render(matrix: Canvas): any;
}
