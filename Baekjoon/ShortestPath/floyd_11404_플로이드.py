from sys import stdin

INF = 10e9

n = int(stdin.readline().rstrip())  # 도시 개수.
m = int(stdin.readline().rstrip())  # 버스 개수.

graph = [[INF] * (n + 1) for _ in range(n + 1)]
for _ in range(m):
    a, b, c = map(int, stdin.readline().rstrip().split())
    if graph[a][b] > c:
        graph[a][b] = c

# 플로이드 워셜 알고리즘.
for node in range(1, n + 1):
    for start in range(1, n + 1):
        for end in range(1, n + 1):
            if start != end:
                new_cost = graph[start][node] + graph[node][end]
                if new_cost < graph[start][end]:
                    graph[start][end] = new_cost

# 출력.
for i in range(1, n + 1):
    for j in range(1, n + 1):
        if graph[i][j] != INF:
            print(graph[i][j], end=' ')
        else:
            print(0, end=' ')
    print()
