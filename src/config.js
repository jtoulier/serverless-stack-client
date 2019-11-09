export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_SOZAfiftSorh3brhoYDFGFgT00oeY7GUs0",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-uploads-25"
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://i3oybxujnb.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_v15aggVzn",
        APP_CLIENT_ID: "kdndrp1rf1hahsbn8ojd17ltk",
        IDENTITY_POOL_ID: "us-east-1:de6bd255-0ca1-48b1-a055-cab2f426ec54"
    }
};