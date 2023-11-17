async function get<T>(url: string) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Cloud't fetch data");
  }
  const jsonResult = (await response.json()) as unknown;
  return jsonResult as T;
}

export { get };
