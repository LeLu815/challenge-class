export const GET = async () => {
  return new Response("쿠키쿠키", {
    headers: {
      "Set-Cookie":
        "accessToken=addgdgewgqcascqqepopozx; Max-Age=20000; Path=/;",
    },
  });
};
