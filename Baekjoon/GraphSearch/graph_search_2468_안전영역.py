import sys
import collections

N: int = int(sys.stdin.readline().rstrip())

graph = [
    list(map(int,
             sys.stdin.readline().rstrip().split())) for _ in range(N)
]


# 새로운 안전 좌표를 발견하면 해당 좌표와 인접한 안전 좌표들도 모두 방문 처리하고 1을 반환한다.
def bfs(graph_bool: list, level_water: int, N: int, x: int, y: int):
    if graph_bool[x][y] != 1:
        return 0

    delta: tuple = ((-1, 0), (1, 0), (0, -1), (0, 1))

    queue = collections.deque()
    queue.append((x, y))
    while queue:
        node: tuple = queue.popleft()
        if graph_bool[node[0]][node[1]] == 1:
            graph_bool[node[0]][node[1]] = 2  # 2: 이미 방문한 안전 좌표.
            for dx, dy in delta:
                x_new, y_new = node[0] + dx, node[1] + dy
                if (0 <= x_new < N and 0 <= y_new < N
                        and graph_bool[x_new][y_new] == 1):
                    queue.append((x_new, y_new))

    return 1


# 물의 수위(level_water: int)에 따른 안전 지역 개수를 반환한다.
def count_safes_of_this_level(graph, level_water: int, N: int):
    cnt: int = 0

    # graph_bool에서 위험 좌표는 0, 안전 좌표는 1.
    graph_bool: list = [[
        0 if element <= level_water else 1 for element in graph[i]
    ] for i in range(N)]

    # graph_bool: list = []
    # for i in range(N):
    #     graph_bool.append(
    #         [0 if element <= level_water else 1 for element in graph[i]])

    for x in range(N):
        for y in range(N):
            cnt += bfs(graph_bool, level_water, N, x, y)

    return cnt


def solve(graph: list, N: int):
    result: int = 0

    max_to_check: int = 1  # graph의 높이 정보 중 가장 높은 곳의 높이.
    for i in range(N):
        max_to_check = max(max_to_check, max(graph[i]))

    for level in range(0, max_to_check + 1):
        result = max(result, count_safes_of_this_level(graph, level, N))

    return result


print(solve(graph, N))
