'''
while True: # 무한 반복
	try:
		num = int(input('정수 입력: ')) 
		break # 정수 입력시 반복문 탈출
	except ValueError: # 예외 발생시 
		print('정수가 아님!')

print('SUCCESS!!')
'''
'''
try:
    color = ['purple', 'yellow', 'green', 'blue']
    for x in color:
        print(color.index(x))
    print(color.index('orange')) # 에러가 발생하는 문장
except ValueError as message:
    print(message)
'''
try:
    num = [1, 2, 3, 4]
    print('START')
    print(who) # 존재하지 않는 변수 -> NameError
    print(num[3]/0) # 0으로 나눌 수 없음 -> ZeroDivisionError
    print(num[100]) # 인덱스 범위를 넘어감 -> IndexError 
    print('END') 
except NameError: 
    print("존재하지 않는 변수 호출") # NameError에 대한 예외 처리만 출력
except IndexError:
    print("인덱스 에러 발생")
except ZeroDivisionError:
    print("0으로 나눌 수 없음!")
