num = 5

print("START!")

while num >= 0:
	print(num) 
	num = num - 1

print("END!") 

while True:
	launch = input("오늘 점심 후보? (그만 치면 종료)")
	if launch == "그만":
		break # 반복문 흐름을 깨다 = 탈출	

	# 입력값의 글자수 비교
	if len(launch) <= 3:
		print("그건 안돼")
		continue # 이후 문장을 실행하지 않고 while 선언문으로 넘어감

	print(launch)
print("done")
