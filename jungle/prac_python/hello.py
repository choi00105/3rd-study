print('Hello, jungle')

fruits = ['사과','배','배','감','수박','귤','딸기','사과','배','수박']
people = [{'name': 'bob', 'age': 20}, 
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'smith', 'age': 17},
          {'name': 'ben', 'age': 27}]

count = 0
for fruit in fruits:
	if fruit == '사과':
		count += 1

print(count)

def count_fruits(target):
	count = 0
	for fruit in fruits:
		if fruit == target:
			count += 1
	return count

subak_count = count_fruits('수박')
print('수박 갯수 : ',subak_count) #수박의 갯수

gam_count = count_fruits('감')
print(gam_count) #감의 갯수

def search_people(name):
  for person in people:
    if person['name']==name:
      print(person['name'], person['age'])

search_people('ben')