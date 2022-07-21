export async function getCategories() {
  let files = {};
  await fetch("http://localhost:4000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query {
        categories {
            name
        }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => (files = res.data.categories));
  return files;
}

export async function getCurrencies() {
  let files = {};
  await fetch("http://localhost:4000", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
      query {
        currencies {
            label
            symbol
        }
    }`,
    }),
  })
    .then((res) => res.json())
    .then((res) => (files = res.data.currencies));
  return files;
}
