from sys import stdin
import heapq

INF = int(10e9)

V, e = map(int, stdin.readline().rstrip().split())
k = int(stdin.readline().rstrip())
distances = [INF] * (V + 1)
graph = [[] for _ in range(0, V + 1)]
for _ in range(e):
    u, v, w = map(int, stdin.readline().rstrip().split())  # u -> v의 거리: w.
    graph[u].append((w, v))

def dijkstra(start):
    heap = []
    distances[start] = 0
    heapq.heappush(heap, (0, start))
    while heap:
        now = heapq.heappop(heap)
        if now[0] > distances[now[1]]:
            continue
        for node in graph[now[1]]:
            new_distance = distances[now[1]] + node[0]
            if new_distance < distances[node[1]]:
                # 아래 heapq.heappush의 두 번째 인자는 new_distance를 넣은 새 튜플로 넣어줘야, 업데이트된 최단 거리 정보가 힙에 들어갈 수 있다..!
                #heapq.heappush(heap, node)  # wrong.
                heapq.heappush(heap, (new_distance, node[1]))  # right.
                distances[node[1]] = new_distance

dijkstra(k)

for i in range(1, V + 1):
    if distances[i] != INF:
        print(distances[i])
    else:
        print('INF')