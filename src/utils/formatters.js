// Format Date into "MMM DD, YYYY"
export const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

// Convert HTTP appIcon URL to HTTPS (custom rule)
export const getSecureAppIcon = (iconUrl) => {
  if (!iconUrl) return "";
  return iconUrl.replace(
    "http://mailserver.sukkurbeverages.net:689",
    "https://mailserver.sukkurbeverages.net:589"
  );
};
