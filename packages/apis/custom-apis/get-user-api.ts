import fetchGetAPIWithoutAuth from "../base-apis/get-fetch-wtihout-auth";

export async function getUser() {
  const response = await fetchGetAPIWithoutAuth(`user`);
  const responseBody = await response.json();
  if (response.ok) {
    return {
      isFailed: false,
      data: responseBody,
    };
  }
  return {
    isFailed: true,
    data: responseBody,
  };
}
