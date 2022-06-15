import { client } from "./auth";

export async function getUserInfo() {
  const response = await client.get("/user/userInfo");
  return response;
}
