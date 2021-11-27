export const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "red";
    case "approved":
      return "green";
    default:
      return "green";
  }
};

export const currencyFormatter = (amount, currency) => {
  return currency
    ? amount.toLocaleString("en-NG", {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
      })
    : amount.toLocaleString(2);
};

export const getSlugAbbrev = (slug) => {
  slug = slug.split("-");
  return slug[0];
};

export const ellipsis = (str, num) => {
  let temp = "";
  if (num < str.length) {
    temp = str.slice(0, num) + "...";
  } else {
    temp = str;
  }
  return temp;
};
