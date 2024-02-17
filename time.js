let start, end;

export function startTime() {
  start = new Date();
};

export function endTime() {
  end = new Date();
  let timeDiff = end - start;
  timeDiff /= 1000;
  return Math.round(timeDiff);
}