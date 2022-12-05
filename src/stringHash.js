/**
 * Hash a string into a number of given digits, using djb2 algorithm.
 * 
 * todo: solve the problem of collisions
 * @param {string} str
 * @param {number} digits
 * @returns number
 */
 export function stringToIngeterHash(str, digits = 9) {
  const upperLimit = Math.pow(10, digits);
  const lowerLimit = Math.pow(10, digits - 1);
  let hash = 5381;

  for (let i = 0; i < str.length; i++) {
    hash = hash * 33 + str.charCodeAt(i);
    hash = hash % upperLimit;
  }

  return hash < lowerLimit ? lowerLimit + hash : hash;
}

console.log(`"hello world" hash:`,stringToIngeterHash('hello world'));