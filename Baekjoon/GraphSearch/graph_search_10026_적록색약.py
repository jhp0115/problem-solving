import sys
import collections

N = int(input())

graph_normal = [list(input()) for _ in range(N)]
graph_rg = [[
    'R' if element == 'G' else element for element in graph_normal[i]
] for i in range(N)]


def bfs(graph: list, N: int, x_start: int, y_start: int):
    if graph[x_start][y_start] not in {'R', 'G', 'B'}:
        return 0

    color: str = graph[x_start][y_start]

    delta = ((-1, 0), (1, 0), (0, -1), (0, 1))
    queue = collections.deque()
    queue.append((x_start, y_start))
    while queue:
        node_current = queue.pop()
        for dx, dy in delta:
            x_new, y_new = node_current[0] + dx, node_current[1] + dy
            if not (0 <= x_new < N and 0 <= y_new < N):
                continue

            if graph[x_new][y_new] == color:
                queue.append((x_new, y_new))
                graph[x_new][y_new] = color.lower()

    return 1


def solve(graph_normal: list, graph_rg: list, N: int):
    cnt_normal: int = 0
    for i in range(N):
        for j in range(N):
            cnt_normal += bfs(graph_normal, N, i, j)
    cnt_rg: int = 0
    for i in range(N):
        for j in range(N):
            cnt_rg += bfs(graph_rg, N, i, j)

    print(str(cnt_normal), str(cnt_rg))


solve(graph_normal, graph_rg, N)
