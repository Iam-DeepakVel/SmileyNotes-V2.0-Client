export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  });
};

export const formatDateForAllQuotes = (dateString: string): string => {
  return new Date(dateString).toLocaleString("en-US", {
    year: "2-digit",
    month: "short",
    day: "2-digit",
  });
};
