import sys
import heapq

input = sys.stdin.readline

def cycle():
    N: int = int(input())
    scores: list = []  # [][0]: paper, [][1]: interview
    for i in range(N):
        scores.append(list(map(int, input().split())))
    scores.sort(reverse=True)

    interview_best_ranks: list = mapBestRanks([scores[i][1] for i in range(N)])
    
    winner_count: int = 1
    for i in range(N - 1):
        if (scores[i][1] < interview_best_ranks[i]):
            winner_count += 1
    
    print(winner_count)


# min(best_rank[i+1:])을 여러 번 실행하기보다, 다음과 같은 방법으로 숫자를 쓸어내려서 연산 횟수를 줄였다.
def mapBestRanks(interview_scores):
    for i in range(len(interview_scores) - 2, 0 - 1, -1):
        if interview_scores[i] > interview_scores[i + 1]:
            interview_scores[i] = interview_scores[i + 1]

    return interview_scores[1:] + [interview_scores[-1]]


T: int = int(input())
for _ in range(T):
    cycle()