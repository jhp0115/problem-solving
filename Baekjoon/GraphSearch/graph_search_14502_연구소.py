import sys
import collections
import itertools

N, M = map(int, sys.stdin.readline().rstrip().split())
graph = []
empties = []  # 빈 곳의 좌표들.
viruses = []  # 바이러스가 존재하는 좌표들.
max_safe = 0  # 출력할 정답 변수.

for _ in range(N):
    graph.append(list(map(int, sys.stdin.readline().rstrip().split())))

for i in range(N):
    for j in range(M):
        if graph[i][j] == 2:
            viruses.append((i, j))
        if graph[i][j] == 0:
            empties.append((i, j))


def set_walls(graph, coordinates):
    for i in range(3):
        graph[coordinates[i][0]][coordinates[i][1]] = 3  # 원소 값 3은 새로 설치한 벽을 의미한다.


def revert_changes(graph):
    for i in range(N):
        graph[i] = [0 if 2 <= e <= 3 else e for e in graph[i]]
    for i, j in viruses:
        graph[i][j] = 2


def contaminate(graph, viruses):
    for point in viruses:
        bfs(graph, point)


def bfs(graph, start_point):
    delta = ((-1, 0), (1, 0), (0, -1), (0, 1))

    queue = collections.deque()
    queue.append(start_point)

    while queue:
        source = queue.popleft()
        for i in range(4):
            x, y = source[0] + delta[i][0], source[1] + delta[i][1]
            if 0 <= x < N and 0 <= y < M and graph[x][y] == 0:
                if graph[x][y] == 2:
                    continue
                queue.append((x, y))
                graph[x][y] = 2


def count_safe(graph):
    cnt = 0
    for i in range(N):
        cnt += graph[i].count(0)
    return cnt


def solve(graph, viruses):
    global max_safe

    # 벽을 세울 좌표 3개의 조합을 itertools.combinations 함수를 통해 빠르게 얻을 수 있었다.
    for coord_combinations in itertools.combinations(empties, 3):
        set_walls(graph, tuple(coord_combinations))
        contaminate(graph, viruses)
        max_safe = max(max_safe, count_safe(graph))
        revert_changes(graph)

    # pypy3로는 정답이지만, python3로는 시간초과가 뜬 풀이이다(8초 정도).
    # for coord1 in empties:
    #     for coord2 in empties:
    #         for coord3 in empties:
    #             if coord1 != coord2 and coord2 != coord3 and coord3 != coord1:
    #                 set_walls(graph, (coord1, coord2, coord3))
    #                 contaminate(graph, viruses)
    #                 max_safe = max(max_safe, count_safe(graph))
    #                 revert_changes(graph)


solve(graph, viruses)
print(max_safe)