from sys import stdin
import itertools
import math

N = int(stdin.readline().rstrip())
A = list(map(int, stdin.readline().rstrip().split()))

tuples = itertools.permutations(A, N)

largest = 0

for item in tuples:
    sum = 0
    for i in range(0, (N - 2) + 1):
        sum += int(math.fabs(item[i] - item[i + 1]))
    largest = max(largest, sum)

print(largest)