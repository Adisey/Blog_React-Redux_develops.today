// Instruments

import { ROOT_URL } from './config';

export const api = {
    posts: {
        fetch () {
            return fetch(`${ROOT_URL}/posts`, {
                method:  'GET',
                headers: {
                },
            });
        },
        create (comment) {
            return fetch(`${ROOT_URL}/posts`, {
                method:  'POST',
                headers: {
                },
                body: JSON.stringify({ comment }),
            });
        },
    },
};
