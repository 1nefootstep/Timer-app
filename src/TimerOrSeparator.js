import Timer from "./Timer";

const TimerOrSeparator = ({
  isSeparator = false,
  index,
  id,
  duration,
  title,
  colorChangeThreshold,
}) => {
  if (isSeparator) {
    return (
      <div
        key={`separator-${index}`}
        className="w-full h-px bg-gray-400 col-span-full"
      ></div>
    );
  }

  return (
    <Timer
      key={`${id}_${title}`}
      duration={duration}
      title={title}
      colorChangeThreshold={colorChangeThreshold}
    />
  );
};

export default TimerOrSeparator;
