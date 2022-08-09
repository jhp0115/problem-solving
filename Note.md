# Note
[브루트 포스](##브루트-포스)  
[최단경로 - 다익스트라](##최단경로-다익스트라)


## 브루트 포스
- itertools.permutations(iterable, n)  
-> iterable에서 n개의 원소를 순서를 고려하여 뽑아 만든 tuple들을 반환한다.  
cf: [백준 10819 차이를 최대로](./Baekjoon/BruteForce/brute_10819_%EC%B0%A8%EC%9D%B4%EB%A5%BC%EC%B5%9C%EB%8C%80%EB%A1%9C.py)

## 최단경로-다익스트라  
- 최소힙에 새 튜플('거리', 노드번호)을 넣을 때, '거리'는 기존 것이 아닌 갱신된 것을 넣어야 한다.  
cf: [백준 1753 최단경로](./Baekjoon/ShortestPath/dijkstra_1753_%EC%B5%9C%EB%8B%A8%EA%B2%BD%EB%A1%9C.py)

