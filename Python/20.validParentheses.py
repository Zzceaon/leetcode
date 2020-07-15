class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {")": "(", "}": "{", "]": "["}
        for char in s:
            if char in mapping:
                top_element = stack.pop() if stack else '#'
                if top_element != mapping[char]:
                    return False
            else:
                stack.append(char)
        return not stack

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        lookup = {"(" : ")", "{" : "}", "[" : "]"}
        for parenthese in s:
            if parenthese in lookup:
                stack.append(parenthese)
            elif len(stack) == 0 or lookup[stack.pop()] != parenthese:
                return False
        return len(stack) == 0

class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        paren_map = {')': '(', ']': '[', '}': '{'}
        for c in s:
            if c not in paren_map:
                stack.append(c)
            elif not stack or paren_map[c] != stack.pop():
                return False
        return not stack