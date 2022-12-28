print('Type1. 입력값 x, 결과값 x')
def say_hello3(): # 정의
  print('hello')
  print('hello')
  print('hello')
  
say_hello3() # 호출


print('Type2. 입력값 o (매개변수 1개), 결과값 x')
def say_hello(n): # 정의
  for i in range(n): 
    print('hello')
    
say_hello(3) # 호출


print('Type2. 입력값 o (매개변수 2개), 결과값 x')
def what_is_bigger(x, y): # 정의
    if x > y:
        print(x, '가 더 크다')
    elif y > x:
        print(y, '가 더 크다')
    else:
        print(x, '=', y, '서로 같다')

what_is_bigger(2, 4) # 호출 
what_is_bigger(3, 1)
what_is_bigger(7, 7)

print('Type3. 입력값 x, 결과값 o')
def say_yes():
	return 'Yes!'

print(say_yes()) 


print('주의. 결과값을 반환하지 않으면?')
def func_return():
	return

print(func_return())


print('Type4. 입력값 o, 결과값 o')
def square_area(width, height): # 매개변수
    return width * height

square_width = 3
square_height = 4

print(square_area(square_width, square_height)) # 인자


print('추가. 함수 내부에서 함수 호출하기')
def first(n):
    return n * 2
def second():
    x= first(3) + 5 # second() 함수 내부에서 first() 함수 호출
    return x

print(second()) # second() 함수 호출 
