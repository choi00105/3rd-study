# 1번
numbers = [1, 22, 333, 4444, 55555] 
'''
for n in range(len(numbers)): 
    print(str(n) + "번째 값: " + str(numbers[n]))
'''
# 2 번
nums = []

for i in range(1, 11):
    nums.append(i)

'''
print(nums)
'''
# 3 번
score = [ 54, 97, 99, 36, 82]
for j in range(len(score)):
    if score[j]>= 80:
        print(str(score[j]) + ': 합격')
    else:
        print(str(score[j]) + ': 불합격')
