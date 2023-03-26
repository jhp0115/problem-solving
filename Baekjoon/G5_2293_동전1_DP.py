n, k = map(int, input().split())

dp = [0 for _ in range(k + 1)]

for _ in range(n):
    kind = int(input())
    if (0 <= kind <= k) == False:
        continue
    dp[kind] += 1
    for i in range(kind + 1, k + 1):
        if i - kind >= 0:
            dp[i] += dp[i - kind]

print(dp[k])