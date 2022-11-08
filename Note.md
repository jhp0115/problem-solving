# Note
[브루트 포스](##브루트-포스)  
[최단경로 - 다익스트라](##최단경로-다익스트라)


## 브루트 포스
- itertools.permutations(iterable, n)  
   - iterable에서 n개의 원소를 순서를 고려하여 뽑아 만든 tuple들을 반환한다.  
   - cf: [백준 10819 차이를 최대로](./Baekjoon/BruteForce/brute_10819_%EC%B0%A8%EC%9D%B4%EB%A5%BC%EC%B5%9C%EB%8C%80%EB%A1%9C.py)
- i, j, k 세 변수가 서로 달라야 할 때:  
   - i != j and j != k and i != k로 작성해야 한다.  
   - i != j and j != k 두 조건문으로만 작성하면 i랑 k는 같을 수도 있다.
   - cf: [백준 2798 블랙잭](./Baekjoon/BruteForce/brute_2798_%EB%B8%94%EB%9E%99%EC%9E%AD.py)

## 그래프 탐색
- 2차원 배열에서, 원소의 인덱스를 십자 모양 방향으로 이동하려면 dx 또는 dy에 0이 포함되어야 한다.
   - delta = (-1, 1)
   - delta = ((-1, 0), (1, 0), (0, -1), (0, 1))
   - cf: [백준 2667 단지번호붙이기](./Baekjoon/GraphSearch/graph_search_2667_%EB%8B%A8%EC%A7%80%EB%B2%88%ED%98%B8%EB%B6%99%EC%9D%B4%EA%B8%B0.py)


## 최단경로-다익스트라  
- 최소힙에 새 튜플('거리', 노드번호)을 넣을 때, '거리'는 기존 것이 아닌 갱신된 것을 넣어야 한다.  
   - cf: [백준 1753 최단경로](./Baekjoon/ShortestPath/dijkstra_1753_%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C.py)

