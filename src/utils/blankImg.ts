export function blankImg(length: any) {
  if (length % 3 === 0) {
    return 3;
  } else if (length > 3) {
    return length % 3;
  } else {
    return length;
  }
}
