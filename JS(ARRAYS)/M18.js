var p= [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var i=0
var count=0
var k=0
var j=0
while (i<p.length){
    if (p[i]>=10000000){
		count+=1}
	else if (p[i]>=100000){
		j+=1}
	else{
		k+=1}
	i+=1}
console.log(count+' crorepati')
console.log(j+' lakhpati')
console.log(k+' dilwale')