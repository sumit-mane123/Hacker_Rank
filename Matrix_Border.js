var a = [[4,9,6,2],
        [ 11,12,16,13],
        [23, 19,18,17],
        [31, 30, 33, 36]


]
 let n=a.length;
 let element = 0;

for (let i = 0; i<n; i++){
    for(let j =0; j<n; j++){

        if(i==0 || j==n-1 ){
            
             console.log(a[i][j]);
        }

    }
}
    
    for(let i=n-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            if(i==n-1||j==0 ){
                console.log(a[i][j]);
            }
        }
    }
