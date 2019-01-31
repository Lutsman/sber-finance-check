import {postData} from "./common";

export const sendPhone = phone => postData('url', {phone});
