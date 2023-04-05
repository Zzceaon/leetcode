var countVowelStrings = function(n) {
  a = e = i = o = u = 1
  for (let k = 1; k < n; k++) {
      a = a + e + i + o + u
      e = e + i + o + u
      i = i + o + u
      o = o + u
  }
  return a + e + i + o + u
};

// 找规律： n = 1 ans = 1 + 1 + 1 + 1 + 1 n = 2 ans = 5 + 4 + 3 + 2 + 1 n = 3 ans = (5 + 4 + 3 + 2 + 1) + (4 + 3 + 2 + 1) + (3 + 2 + 1) + (2 + 1) + (1) .... n = n ans = (上一步后五项和) + (后四项和) + (后三项和) + (后两项和) + (后一项和)