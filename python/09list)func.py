num = [3, 2, 5, 4, 1]
korean = ['강', '이', '정', '박', '최']
english = ['b', 'c', 'a', 'd', 'e']

# 리스트 정렬하기
num.sort()
korean.sort()
english.sort()

# 정렬 확인
print(num)
print(korean)
print(english)



name = ['강', '정', '이', '박', '정', '최', '오', '윤']

# 리스트 삭제하기
# 1. pop(인덱스)
print("pop - 리스트 요소 삭제")
print("전: ", name)
name.pop(0)
print("후: ", name)
print()

# 참고) 인덱스 생략 가능 - 마지막 요소 삭제
print("전: ", name)
name.pop()
print("후: ", name)
print()


# 2. del 리스트명[인덱스]
print("del - 리스트 요소 삭제")
print("전: ", name)
del name[2]
print("후: ", name)
print()

# 참고) 슬라이싱 사용해 여러 요소 삭제 가능
print("전: ", name)
del name[3:]
print("후: ", name)
print()
