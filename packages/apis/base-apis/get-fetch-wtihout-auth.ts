export default async function fetchGetAPIWithoutAuth(
    url: string,
  ) {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
  
    return response
  }