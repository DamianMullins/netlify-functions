const axios = require('axios');

const isProd = process.env.NODE_ENV === 'production';

const callFunction = async () => {
    try {
        const endpoint = isProd
            ? 'https://dreamy-carson-3c8055.netlify.app/.netlify/functions/test'
            : 'http://localhost:8888/.netlify/functions/test';

        const { data } = await axios
            .post(endpoint, {
                test1: 1,
                test2: 2
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        console.log({ data });
    } catch (err) {
        console.error(err.message, err);
    }
};

callFunction();
