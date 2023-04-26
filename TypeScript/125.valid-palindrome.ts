function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, "").replace(/\s/g, "").toLocaleLowerCase()
  return s === [...s].reverse().join("")
};