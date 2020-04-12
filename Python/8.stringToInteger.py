class Solution:
    def myAtoi(self, str: str) -> int:
        stripS = str.strip()
        if stripS == "" or stripS == "-" or stripS == "+":
            return 0
        s = re.match('[^\d]+', (stripS.lstrip("-")).lstrip("+"))
        if s != None:
            return 0
        else:
            s = re.search('\-*\+*\d+', stripS).group()
        if s[0:2] == "--" or s[0:2] == "-+" or s[0:2] == "++":
            return 0
        res = int(s)
        if res > 0:
            return 2147483647 if res > 2147483647 else res
        else:
            return -2147483648 if res < -2147483648 else res