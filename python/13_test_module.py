'''
# 계산기 모듈 불러와 사용하기
# 모듈 불러오기: import 모듈명
import calc_module

print("**** 두 수 입력 ****")
x = int(input('x 값 입력 > '))
y = int(input('y 값 입력 > '))

print("\n**** 결과 출력 ****")
# 모듈의 함수 사용하기: 모듈명.함수명
print(x, "+", y, "=", calc_module.add(x, y))
print(x, "-", y, "=", calc_module.sub(x, y))
print(x, "*", y, "=", calc_module.multiply(x, y))
print(x, "/", y, "=", calc_module.divide(x, y))
'''

# 계산기 모듈 불러와 사용하기
# from 모듈명 import 모두
from calc_module import *

print("**** 두 수 입력 ****")
x = int(input('x 값 입력 > '))
y = int(input('y 값 입력 > '))

print("\n**** 결과 출력 ****")
print(x, "+", y, "=", add(x, y))
print(x, "-", y, "=", sub(x, y))
print(x, "*", y, "=", multiply(x, y))
print(x, "/", y, "=", divide(x, y))
