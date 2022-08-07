from sys import stdin

N = int(stdin.readline().rstrip())
cards = list(map(int, stdin.readline().rstrip().split()))
M = int(stdin.readline().rstrip())
array = list(map(int, stdin.readline().rstrip().split()))

def binary_search(target):
    left, right = 0, N - 1
    while left <= right:
        center = (left + right) // 2
        if cards[center] == target:
            return 1
        elif cards[center] < target:
            left = center + 1
        else:
            right = center - 1
    return 0


cards.sort()

for num in array:
    print(binary_search(num), end=' ')