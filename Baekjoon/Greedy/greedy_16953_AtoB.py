# 가능한 연산을 역순으로 수행하면서 연산 횟수를 센다.
def solution():
    A, B = map(int, input().split())

    count: int = 0

    while B > A:
        # B의 마지막 숫자가 1이 아닌 홀수인 경우 return.
        if B % 2 != 0 and str(B)[-1] != '1':
            print('-1')
            return
        
        # B의 마지막 숫자가 1이거나 짝수인 경우.
        if str(B)[-1] == '1':
            B = int(str(B)[:-1])  # B //= 10이 더 빨랐을 것이다..!
        elif B % 2 == 0:
            B //= 2
            
        count += 1

    if B == A:
        print(count + 1)
    else:
        print('-1')

solution()