'''
# w 모드로 파일 열기
file = open('first.txt', 'w')

# write(): 파일에 내용 쓰기
file.write('Very Nice!! \n이건 내가 만든 첫 번째 파일>_< \n') 

# 파일 닫기
file.close() 
'''
with open('first.txt', 'w') as file:
    file.write('Very Nice!! \n이건 내가 만든 첫 번째 파일\nwith로 수정 ㅋ>_< \n')
with open('first.txt', 'a') as file:  
    file.write('여기는 내용 추가한 부분~!')
