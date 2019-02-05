import {postData} from "./common";
import {steps} from "../fixtures";

export const loadSteps = () => postData(null, null, steps);
