const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type'
};

exports.handler = async (event, context) => {
    if (!event.body || event.httpMethod !== 'POST') {
        return {
            statusCode: 400,
            headers,
            body: JSON.stringify({
                status: 'invalid http method'
            })
        }
    }

    const data = JSON.parse(event.body)

    return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
            data
        })
    };
};
