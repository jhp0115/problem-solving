# Python Note
- Python이 아닌 다른 언어나 프레임워크, 라이브러리 등을 오랫동안 공부하다보면, python의 문법이나 내장 함수들을 조금씩 까먹게 될 것이다.
- 나중에, 오랜만에 python을 사용하게 될 때를 위해 잘 잊거나 헷갈려서 구글링했던 것들을 요약 정리해둔다.

----
## Python의 특징
- 파이썬의 변수는 모두 객체이다.
- int, float같은 원시 값이나 tuple, string같은 immutable 객체의 값에 변화를 주면 재할당이 되면서 메모리 주소가 변경된다.
- list같은 mutable 객체의 값에 변화를 주면, 값에는 변화가 생기지만 메모리 주소는 그대로이다.  


## 문법과 내장 함수

- List, Tuple, Set, Dict, String

- 문자열 -> 각 문자들의 리스트
    ```python
    string_ = input()
    list_ = list(string_)
    list_ = string_[:len(string_)]
    ```

- map(function, iterable)
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

- List Comprehension
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
- List 메소드
    ```python
    list1.sort(reverse=True)
    list1.insert(인덱스, 원소)
    list1.count(값)  # 특정 값의 개수 세기. O(n).
    list1.remove(값)  # 특정 값을 가진 원소를 왼쪽부터 하나만 제거.
    ```
