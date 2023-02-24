N: int = int(input())
words: list = []

# ord: str -> int, chr: int -> str
char_importances: dict = dict()
for cc in range(ord('A'), ord('Z') + 1):
    char_importances[chr(cc)] = 0

for _ in range(N):
    words.append(input())

for word in words:
    for i in range(-1, -len(word) - 1, -1):
        char_importances[word[i]] += 10 ** (-i - 1)
    

char_digit: dict = dict()
digit_to_assign: int = 9
# cf: 딕셔너리.item()은 튜플들의 리스트이다.
for char, importance in sorted(char_importances.items(), key=lambda t: t[1], reverse=True):
    if importance == 0:
        break    
    char_digit[char] = digit_to_assign
    digit_to_assign -= 1


total: int = 0
for word in words:
    cur: int = 0
    for i in range(len(word)):
        cur = 10 * cur + char_digit[word[i]]
    total += cur

print(total)
