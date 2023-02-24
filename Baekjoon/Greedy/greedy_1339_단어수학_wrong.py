from collections import deque

N: int = int(input())
words: list = []

max_length: int = 0
for _ in range(N):
    input_line = input()
    max_length = max(max_length, len(input_line))
    words.append(input_line)

already_assigned: set = set()
q = deque()

for i in range(-max_length, -1 + 1):  # 양수인덱스는 0부터, 음수인덱스는 -1부터라.. for문 경계 범위를 length로 설정 시 주의하자.
    for word in words:
        if len(word) >= -i and word[i] not in already_assigned:
            already_assigned.add(word[i])
            q.append(word[i])


char_to_digit: dict = dict()
digit_to_assign: int = 9

while q:
    char = q.popleft()
    char_to_digit[char] = digit_to_assign
    digit_to_assign -= 1

total: int = 0
for word in words:
    number: int = 0
    for j in range(len(word)):
        number = 10 * number + char_to_digit[word[j]]
    total += number

print(total) 