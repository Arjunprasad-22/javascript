const nu = [1, 2, 3, 4, 4, 11, 6, 7, 4, 8, 9, 12, 14 ];
let count = 0;
for(let i of nu)
{
count++;
}
console.log(count);
for(let j = 0; j< count ; j++)
{
    for(let k = j+1; k < count ; k++)
    {
        if(nu[j]==nu[k])
        {
            for(let l  = j; l < count; l++){
                         nu[l] = nu[l+1];
                      }
                      k--;
                      count--;
                   }
                }
             }
console.log(nu);