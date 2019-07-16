import {postData} from "./common";

export const getUserName = id => postData(`https://scanapi.likebot.app/api/scan/name?id=${id}`, {id}, {data: {name: 'Игорь'}});

// import {baseUrl} from "./common";
// import axios from 'axios';
// export const getUserName = id => axios.get(baseUrl + '/name', {
//     params: {id},
// });
