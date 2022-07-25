import data from "data/heroes";
export async function get() {
  return {
    body: JSON.stringify(data),
  };
}
