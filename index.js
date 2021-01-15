const axios = require('axios');

const callFunction = async () => {
    try {
        const { data } = await axios
            .post('http://localhost:8888/.netlify/functions/test', {
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
