import heapq
import sys

'''
[최소 신장 트리]
1. 간선을 낮은 비용 순으로 정렬하고,
2. 각 간선을 방문하면서 다음을 수행한다.
    2-1. 해당 간선을 새 마을의 길로써 추가하면 사이클이 발생할지 판단해서 안 생기면 추가.

'''


def union(house1: int, house2: int, which_town: list):
    parent_h1: int = find_root_parent(house1, which_town)
    parent_h2: int = find_root_parent(house2, which_town)

    if parent_h1 < parent_h2:
        which_town[parent_h2] = parent_h1
    else:
        which_town[parent_h1] = parent_h2


def check_same_parent(house1: int, house2: int, which_town: list):
    if find_root_parent(house1, which_town) == find_root_parent(house2, which_town):
        return True
    else:
        return False


def find_root_parent(house: int, which_town: list):
    if which_town[house] != house:
        which_town[house] = find_root_parent(which_town[house], which_town)
    return which_town[house]


N, M = map(int, input().split())
which_town: list = [i for i in range(N + 1)]  # 0번 인덱스는 사용하지 않는다.

edges: list = []
for _ in range(M):
    A, B, C = map(int, input().split())
    edges.append((C, A, B))

edges.sort()

last_cost: int = 0
total_cost: int = 0

for edge in edges:
    cost, house1, house2 = edge

    if check_same_parent(house1, house2, which_town):
        continue

    union(house1, house2, which_town)
    total_cost += cost
    last_cost = cost

print(total_cost - last_cost)
