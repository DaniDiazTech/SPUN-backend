const { S3Client } = require('@aws-sdk/client-s3')

const region = process.env.AWS_BUCKET_REGION??"us-east-1";
const key = process.env.AWS_PUBLIC_KEY??"";
const secret = process.env.AWS_SECRET_KEY??"";

export const s3Config = new S3Client({
  region,
  credentials: {
    accessKeyId: key,
    secretAccessKey: secret,
  },
});
