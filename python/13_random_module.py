import random

# randint(a, b)
# a <= N <= b를 만족하는 정수 N 반환
print('*** randint 함수 ***') 
for i in range(10):
    # 1~5 사이의 난수 생성
    print(random.randint(1, 5), end=' ') 

# randrange(start, stop, step)
# range(start, stop, step) 에서 임의로 선택된 요소 반환
print('\n\n*** randrange 함수1 ***') 
for i in range(10):
    # 1~6 사이의 난수 생성
    print(random.randrange(1, 7), end=' ')
    
print('\n\n*** randrange 함수2 ***') 
for i in range(10):
    # 1, 3, 5 중에서 난수 생성
    print(random.randrange(1, 7, 2), end=' ') 

# choice(list)
# 리스트에서 랜덤으로 요소 반환
print('\n\n*** choice 함수 ***')
mylist = ["apple", "banana", "cherry"]
for i in range(5):
    print(random.choice(mylist), end=' ')
