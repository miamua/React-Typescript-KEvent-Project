async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cloud't fetch data");
  }
  const jsonResult = (await response.json()) as unknown;
  return jsonResult as T;
}

async function post<T>(url: string, data: object): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const jsonResult = (await response.json()) as unknown;
  return jsonResult as T;
}

export { get, post };
