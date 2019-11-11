const dev = {
    STRIPE_KEY: "pk_test_SOZAfiftSorh3brhoYDFGFgT00oeY7GUs0",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-25"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://notes-2-app-api.joseph-toulier-pighi.com/dev"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_YzVlM4hBJ",
      APP_CLIENT_ID: "2vsjrjb2e6hu3oni2d5fmee8ro",
      IDENTITY_POOL_ID: "us-east-1:71ea0314-c644-4968-9fb2-2d54e79d8edd"
    }
  };
  
  const prod = {
    STRIPE_KEY: "pk_test_SOZAfiftSorh3brhoYDFGFgT00oeY7GUs0",
    s3: {
      REGION: "us-east-1",
      BUCKET: "notes-app-uploads-25"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://notes-2-app-api.joseph-toulier-pighi.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_x3Of2nd1q",
      APP_CLIENT_ID: "48fjkjq5nun3mu3ajtsj8g7c7q",
      IDENTITY_POOL_ID: "us-east-1:00b4457e-3086-4fae-83bd-91bacadbfa10 "
    }
  };
  
  // Default to dev if not set
  const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;
    
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