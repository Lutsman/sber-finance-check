import axios from 'axios';
import {postData, baseUrl} from "./common";
import {steps} from "../fixtures";

export const loadSteps = () => postData(null, null, steps);

export const sendStep = data => axios.post(baseUrl + '/step', {}, {params: data});
