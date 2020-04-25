class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        slen = len(s)
        plen = len(p)
        if plen == 0:
            return slen == 0
        schar = s[0] if slen > 0 else None
        pchar = p[0]
        many = p[1] == '*' if plen > 1 else False
        match = schar == pchar or (pchar == '.' and schar is not None)
        if many:
            if match:
                return self.isMatch(s[1:], p[2:]) or self.isMatch(s[1:], p)
            else:
                return self.isMatch(s, p[2:])
        else:
            return match and self.isMatch(p[1:], p[1:])