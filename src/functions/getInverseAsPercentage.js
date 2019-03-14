export function getInverseAsPercentage(value) {
  const stringified = String(100 / value);
  if (stringified.length > 4) {
    return `${stringified.slice(0, 4)}%`;
  }

  return `${stringified}%`;
}
