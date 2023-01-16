const num = [1, 2, 3, 4, 4, 11, 6, 7, 4, 8, 9, 12, 14 ];
let count = 0;
for(let i of num)
{
count++;
}
 let a = 4;
 let b = 100;
 for( let j = 0; j< count; j++)
 {
    if(num[j] === a){
    
        num[j] = b;
    }
 }
 console.log(num);