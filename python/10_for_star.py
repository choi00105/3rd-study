# 이중 for 문 - 별 그리기
for i in range(1, 6):
    for j in range(1, i+1): # 1 <= j < i+1 
        print("*", end="")
    print()
