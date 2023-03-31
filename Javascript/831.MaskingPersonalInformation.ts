// 模拟
function maskPII(s: string): string {
    const country = ["", "+*-", "+**-", "+***-"]
    let at = s.indexOf("@")
    if (at > 0) {
        s = s.toLowerCase()
        return `${s[0]}*****${s.substring(at - 1)}`
    }
    let sb = ""
    for (let i = 0; i < s.length; ++i) {
        let code = s.charAt(i)
        if("0" <= code && code <= "9") {
            sb += s[i]
        }
    }
    return `${country[sb.length - 10]}***-***-${sb.substring(sb.length - 4)}`
};
// 空间复杂度 O(n)
// 时间复杂度 O(n)
