export function divider(a, b) {
  let temp_a = a;
  let temp_b = b;
  while (temp_a - temp_b >= 0) {
    temp_a = temp_a - temp_b;
  }
  return temp_a;
}