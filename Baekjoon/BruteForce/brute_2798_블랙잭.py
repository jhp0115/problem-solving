from sys import stdin

N, M = map(int, stdin.readline().rstrip().split())
cards = list(map(int, stdin.readline().rstrip().split()))

largest = -1

for i in range(0, N):
    for j in range(0, N):
        for k in range(0, N):
            # 세 변수 i, j, k가 서로 다르게 만들기 위해서는..
            # i != j, j != k, i != k 세 조건을 모두 써야 한다.
            if i != j and j != k and i != k:
                summ = cards[i] + cards[j] + cards[k]
                if largest < summ <= M:
                    largest = summ

print(largest)