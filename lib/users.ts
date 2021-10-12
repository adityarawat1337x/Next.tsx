import useSWR from "swr";

export async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = JSON.stringify(res);
  return data;
}

export async function useGetRandomUser() {
  const { data, error } = useSWR("https://randomuser.me/api/", fetch);
  const res = JSON.stringify(data);
  if (error) return error;
  return res;
}
