fruits = ['딸기', '오렌지', '복숭아', '수박', ['그린키위', '골드키위']]

# 리스트 인덱싱
print(fruits[0])
print(fruits[4])
print(fruits[-1])

# 리스트 안의 리스트 요소에 접근
print(fruits[-1][0]) # 그린키위
print(fruits[-1][1]) # 골드키위


# 리스트 슬라이싱
print(fruits[0:3])
print(fruits[:2])
print(fruits[-3:])
# 리스트 안에 리스트 슬라이싱
print(fruits[-1][0:1])
