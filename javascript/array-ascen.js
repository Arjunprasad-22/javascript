const num = [1, 2, 3, 4, 4, 11, 6, 7, 8, 9, 12, 14 ];
console.log(num);
let count = 0;
for( let i of num){
   count++;
}
console.log(count);
for(j = 0; j< count; j++ ){
    for(k = j+1; k< count; k++ ){
        if(num[j] > num[k]){
            const p = num[j];
            num[j] = num[k];
            num[k] = p;
        }
    }
}
console.log(num);
