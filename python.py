#import sys
from googlesearch import search
import json
#with open('data.json','a')as file: json.dump("",file)
#query=sys.argv[1]
a=[]
# to search
query = "ipl"

for j in search(query, tld="co.in", num=10, stop=10, pause=2):
	print(j)
	a.append(j)
	
with open('data.json','w')as file: json.dump(a,file)
