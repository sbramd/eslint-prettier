export const login = async () => {
  console.log(await sleep(3000));
  return {
    id: 4,
    username: "bob",
    email: "bob@bob.com",
  };
};

export const sleep = async (ms) => {
  return new Promise((res) => setTimeout(() => res("woke up"), ms));
};
