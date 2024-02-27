export const auth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await fetch("https://domain.com/api/auth", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
};
