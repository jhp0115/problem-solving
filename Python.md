# Python Note
- Python이 아닌 다른 언어나 프레임워크, 라이브러리 등을 오랫동안 공부하다보면, python의 문법이나 내장 함수들을 조금씩 까먹게 될 것이다.
- 나중에, 오랜만에 python을 사용하게 될 때를 위해 잘 잊거나 헷갈려서 구글링했던 것들을 요약 정리해둔다.

----
## Python의 특징
- 파이썬의 변수는 모두 객체이다(reference type).
- int, float같은 원시 값이나 tuple, string같은 immutable 객체의 값에 변화를 주면 재할당이 되면서 메모리 주소가 변경된다.
- list같은 mutable 객체의 값에 변화를 주면, 값에는 변화가 생기지만 메모리 주소는 그대로이다.  


## 문법과 내장 함수
[String](###String)  
[List](###List)  
[Tuple](###Tuple)  
[Set](###Set)  
[Dict](###Dict)  
[Built-in Functions](###Built-in-Functions)  

### String

#### 문자열 -> 각 문자들의 리스트
```python
string_ = input()
list_ = list(string_)
list_ = string_[:len(string_)]
```


### List

#### List Comprehension
```python
list1 = [1, 2, 3, 4, 5]

list2 = [num * 3 for num in list1]
print(list2)
# 결과: [3, 6, 9, 12, 15]

list3 = [num * 2 for num in range(0, 6, 2)]    
print(list3)
# 결과: [0, 4, 8]    
```
```python
[[0] * 4 for _ in range(3)]  # 이차원 배열 초기화.
# [[0] * 4] * 3  <- 이렇게 하면 안 됨.
```
```python
a = [1, 2, 3, 4, 5, 5, 5]
remove_set = [3, 5]
result = [i for i in a if i not in remove_set]  # [1, 2, 4]
```

#### List 메소드
```python
list1.sort(reverse=True)
list1.insert(인덱스, 원소)
list1.count(값)  # 특정 값의 개수 세기. O(n).
list1.remove(값)  # 특정 값을 가진 원소를 왼쪽부터 하나만 제거.
```

### Tuple

### Set
```python
set1 = set([1, 2, 3])  # {1, 2, 3}
set2 = set("Hello")  # {'l', 'H, 'e', 'o'}
set3 = {1, 5, 6}  # {1, 5, 6}

set1_intersection_set3 = set1 & set3  # {1}
set1_intersection_set3 = set1.intersection(set3)  # {1}

set1_union_set3 = set1 | set3  # {1, 2, 3, 5, 6}
set1_union_set3 = set1.union(set3)  # {1, 2, 3, 5, 6}

set3_difference_set1 = set3 - set1  # {5, 6}
set3_difference_set1 = set3.difference(set1)  # {5, 6}

set4 = set([1, 2, 3, 4])
set4.add(5)  # {1, 2, 3, 4, 5}
set4.update([6, 7, 8])  # {1, 2, 3, 4, 5, 6, 7, 8}
set4.update((9, 10))  # {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
set4.remove(2)  # {1, 3, 4, 5, 6, 7, 8}

if 70 not in set4:
    print('70 is not in set4.')
if 3 in set4:
    print('3 is in set4.')
```

### Dict
```python
# dictionary = {
#     immutable: immutable|mutable
# }

dict1 = {'name': 'JIHO PARK', 'birth': '010115'}
# {'name': 'JIHO PARK', 'birth': '010115'}

dict1[10] = 'ten'
# {'name': 'JIHO PARK', 'birth': '010115', 10: 'ten'}

dict1['10'] = list("another")
# {'name': 'JIHO PARK', 'birth': '010115', 10: 'ten', '10': ['a', 'n', 'o', 't', 'h', 'e', 'r']}

print(dict1['birth'])  # 010115. 만약 key 'birth'가 존재하지 않을 경우 오류.
print(dict1.get('birth'))  # 010115. key 'birth'가 없다면 None을 반환.
print(dict1.get('nothing', 'substitute'))  # key 'nothing'이 없다면 두 번째 인자를 대신 반환.

del dict1[10], dict1['10']
# {'name': 'JIHO PARK', 'birth': '010115'}

# dict_keys, dict_values, dict_items: iterable.
keys = dict1.keys()  # dict_keys(['name', 'birth'])
values = dict1.values()  # dict_values(['JIHO PARK', '010115'])
items = dict1.items(
)  # dict_items([('name', 'JIHO PARK'), ('birth', '010115')])

# key가 dict에 있는지 확인.
print('name' in dict1)  # True
print(10 in dict1)  # False

dict1.clear()

dict2, set1 = {}, {'a', 'b'}  # <class 'dict'> <class 'set'>
```

### Built-in Funcitons

#### dir(obj)
- obj가 갖고 있는 변수나 메소드 목록을 리스트로 반환한다.

#### enumerate(iterable)
```python
list1 = ['A', 'B', 'C', 'D']

for i, e in enumerate(list1):
    print(i, e)

# 0 A
# 1 B
# 2 C
# 3 D
```

#### map(function, iterable)
- iterable의 각 원소들을 function에 인자로 넣어 실행한다.
```python
def square(x):
    return x**2


list_ = [1, 2, 3, 4]
list_another = list(map(square, list_))

print(list_, list_another)
# 결과: [1, 2, 3, 4] [1, 4, 9, 16]
```
```python
def no_return(x):
    print(f"(x: {x})", end=", ")
    pass


list_ = [1, 2, 3, 4]
list_another = list(map(no_return, list_))

print(list_, list_another)
# 결과: (x: 1), (x: 2), (x: 3), (x: 4), [1, 2, 3, 4] [None, None, None, None]
```