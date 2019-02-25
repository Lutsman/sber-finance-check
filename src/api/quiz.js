import axios from 'axios';
import {postData, baseUrl} from "./common";
import {steps} from "../fixtures";

export const loadSteps = () => postData(null, null, steps);

export const postStep = data => {
    // const post = axios.post('https://scanapi.likebot.app/api/scan/step?sessionId=111001&Id=21&step=1&value=securities_7,securities_5');
    const {step, sessionId, id, value} = data;
    //TODO change this hotfix
    // const post = axios.post(`${baseUrl}/step?sessionId=${sessionId}&Id=${id}&step=${step}&value=${JSON.stringify(value)}`);
    // const post = axios(url, {
    //     method: 'post',
    //     utl: url,
    //     // params: data,
    //     data: data,
    // });
    return axios.post(`${baseUrl}/step?sessionId=${sessionId}&Id=${id}&step=${step}&value=${JSON.stringify(value)}`);
};
