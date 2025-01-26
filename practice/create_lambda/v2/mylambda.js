exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Koma Lambda(S3)!'),
    };
    console.log(response);
    return response;
};