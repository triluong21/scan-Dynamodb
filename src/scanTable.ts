import * as AWS from "aws-sdk";


const docClient = new AWS.DynamoDB.DocumentClient();

export const scanDynamo = ((tableName: string) => {
  return new Promise<any>((resolve, reject) => {
    const params = {
      TableName: tableName,
      Limit: 100
    };
    docClient.scan(params).promise()
      .then((data: any) => {
        console.log("data: ", data);
        resolve(data);
      })
      .catch((error: any) => {
        console.log("error: ", error);
        reject(error);
      });
  });
});
