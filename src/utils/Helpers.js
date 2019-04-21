export const secToTimeString = input => {
  let mm = Math.floor(+input / 60);
  let ss = +input - mm * 60;

  return `${mm < 10 ? "0" + mm : mm.toString()}:${
    ss < 10 ? "0" + ss : ss.toString()
  }`;
};

export const roundEfficiency = ({right, time}) => {
  return (right/(time/60)).toFixed(2);
}
