import heapq

def solution():
    N: int = int(input())
    numbers: list = []
    for _ in range(N):
        numbers.append(int(input()))
    
    numbers.sort()

    if N == 1:
        print(0)
        return
    
    total: int = 0
    while len(numbers) != 1:
        a: int = heapq.heappop(numbers)
        b: int = heapq.heappop(numbers)

        sum_: int = a + b
        
        total += sum_
        heapq.heappush(numbers, sum_)
    
    print(total)


solution()
