import  S3Client  from 'aws-sdk/clients/s3';

export const s3Config = new S3Client({
    region: process.env.AWS_BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.AWS_PUBLIC_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,    
    }
});
