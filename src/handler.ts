import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda";
import * as UtlFunctions from "@src/functions";
import { scanDynamo } from "./scanTable";

export const workHandler: Handler = async (event: APIGatewayEvent, context: Context, callback?: Callback) => {
  try {
    const tableName = "your-tableName-goes-here";
    const result = await scanDynamo(tableName);
    console.log("result from scanTable call: ", result);
    const response = UtlFunctions.createSuccessResponse(200, result);
    return response;
  } catch (error) {
    console.log("Try/Catch exception. Error: ", error);
    const errorMessage = "Unable to take request at this time. Message -809"
    const response = UtlFunctions.createErrorResponse(500, errorMessage);
    return response;
  }
}
