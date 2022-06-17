import { client } from "./auth";

export async function getUserInfo() {
  const { data } = await client.get("/user/userInfo");
  console.log(data);
  return data;
}
