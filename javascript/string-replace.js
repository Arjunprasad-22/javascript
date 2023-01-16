const num = ['arjun', 'jewel', 'abjith', 'vishak', 'sonu', 'ria' ];
let count = 0;
for(let i of num)
{
count++;
}
 let a = 'vishak';
 let b = 'anand';
 for( let j = 0; j< count; j++)
 {
    if(num[j] === a){
    
        num[j] = b;
    }
 }
 console.log(num);