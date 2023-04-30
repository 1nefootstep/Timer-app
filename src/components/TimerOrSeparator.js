import Timer from "./Timer";

const TimerOrSeparator = ({
  isSeparator = false,
  index,
  duration,
  title,
  colorChangeThreshold,
}) => {
  if (isSeparator) {
    return <div className="w-full h-px bg-gray-400 col-span-full"></div>;
  }

  return (
    <Timer
      duration={duration}
      title={title}
      colorChangeThreshold={colorChangeThreshold}
    />
  );
};

export default TimerOrSeparator;
