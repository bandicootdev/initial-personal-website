import {BASE_PATH, API_VERSION} from './config';
import {notification} from "antd";


export function signUpApi(data) {
    console.log(JSON.stringify(data))
    const url = `${BASE_PATH}/${API_VERSION}/sign-up`;
    const params = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    return fetch(url, params)
        .then(responseFetch)
        .catch(() => {
            notification.error({
                message: 'internal error'
            });
        })
}


function responseFetch(response) {
    if (response.ok) {
        response.json()
            .then((res) => {
                notification.success({
                    message: res.message
                });
            })
    } else {
        if (response.status === 500 || response.status === 400) {
            response.json().then((res) => {
                notification.error({
                    message: response.statusText,
                    description: res.message
                });
            })
        }
    }
}
