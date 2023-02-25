import sys
import os

os.system('python3 -m pip install google')
os.system('pip install googlesearch-python')
os.system('pip install beautifulsoup4')
from googlesearch import search
import json
print(sys.argv[0])
print(sys.argv[1])
#with open('data.json','a')as file: json.dump("",file)
#query=sys.argv[1]
a=[]
# to search
query = sys.argv[1]

for j in search(query, tld="co.in", num=10, stop=10, pause=2):
	print(j)
	a.append(j)
	
with open('data.json','w')as file: json.dump(a,file)
