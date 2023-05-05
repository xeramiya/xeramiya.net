export const DateFormatter = ({ date }: { date: string }) => {
  const arrayDate = date.split(".");
  const machineDate = arrayDate[0] + "-" + arrayDate[1] + "-" + arrayDate[2];
  const jpDate =
    arrayDate[0] + "年" + arrayDate[1] + "月" + arrayDate[2] + "日";

  return <time dateTime={machineDate}>{jpDate}</time>;
};

export default DateFormatter;
