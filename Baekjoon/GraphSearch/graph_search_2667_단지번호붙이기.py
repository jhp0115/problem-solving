import collections

N = int(input())

map_ = []
line = []

cnt_complex = 0
cnt_houses = []


def bfs(i, j):
    count = 0

    queue = collections.deque()
    queue.append((i, j))
    map_[i][j] = 2

    while queue:
        node = queue.popleft()
        count += 1

        delta = ((-1, 0), (1, 0), (0, -1), (0, 1))
        for k in range(4):
            x, y = node[0] + delta[k][0], node[1] + delta[k][1]
            if N > x >= 0 and N > y >= 0:
                if map_[x][y] == 1:
                    queue.append((x, y))
                    map_[x][y] = 2

    return count


for i in range(N):
    line = input()
    map_.append(list(map(int, list(line))))

for i in range(N):
    for j in range(N):
        if map_[i][j] == 1:
            cnt_complex += 1
            cnt_houses.append(bfs(i, j))

print(cnt_complex)
cnt_houses.sort()
for num in cnt_houses:
    print(num)
