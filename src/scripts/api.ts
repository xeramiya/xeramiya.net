export const formatDate = (data: Date) => {
  const year = data.getFullYear();
  const month = data.getMonth() + 1;
  const date = data.getDate();

  return `${year}年${month}月${date}日`;
};
