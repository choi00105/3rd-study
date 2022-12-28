# 클래스 정의
class Person:
    # 메소드 정의
    def say_hello(self):
        print('Hi!! Nice to meet you.')

#p = Person() # 객체 p
#p.say_hello() # 메소드 호출

class Person:
    count = 0
    # 생성자
    def __init__(self, name, age): # __init__(self, 'Suzy', 20)
        self.name = name # self.name = 'Suzy'
        self.age = age # self.age = 20
        Person.count = Person.count + 1
    def say_hello(self):
        print('Hi!! Nice to meet you.')

    def about_me(self):
        print('I am ' + self.name + ' (' + str(self.age) + ')')

print('******* 총 ' + str(Person.count) + '명 *******')
suzy = Person('Suzy', 20) # 클래스명(name_초기값, age_초기값)
suzy.say_hello()
suzy.about_me()
print('******* 총 ' + str(Person.count) + '명 *******')
 
minho = Person('Minho', 23)
minho.say_hello()
minho.about_me()
print('******* 총 ' + str(Person.count) + '명 *******')
 
yeji = Person('Yeji', 21)
yeji.say_hello()
yeji.about_me()
print('******* 총 ' + str(Person.count) + '명 *******')
