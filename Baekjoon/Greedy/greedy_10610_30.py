def solution():
    N: str = input()
    numbers: list = list(map(int, N))

    if 0 not in numbers:
        print('-1')
        return
    
    zero_index: int = numbers.index(0)
    numbers[zero_index], numbers[-1] = numbers[-1], numbers[zero_index]

    if sum(numbers[:-1]) % 3 != 0:
        print('-1')
        return

    print(''.join(sorted(list(map(str, numbers))[:-1], reverse=True) + ['0']))


solution()
