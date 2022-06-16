import { client } from "./auth";

export async function getUserInfo() {
  console.log("response");

  const response = await client.get("/user/userInfo");
  console.log(response);
  return response;
}
