export const fullFormat = (timestamp) => {
  const now = new Date(timestamp);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("ko-KR", options).format(now);
};

export const timeFormat = (timestamp) => {
  const now = new Date(timestamp);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("ko-KR", options).format(now);
};
