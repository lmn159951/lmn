function det(mt, cap){
    //Chưa tự kiểm tra được đầu vào
    if(cap==1) return mt[0][0];
    if(cap==2) return mt[0][0]*mt[1][1]-mt[0][1]*mt[1][0];
    if(cap==3) return mt[0][0]*mt[1][1]*mt[2][2] + mt[1][0]*mt[2][1]*mt[0][2] + mt[0][1]*mt[1][2]*mt[2][0]
                - mt[2][0]*mt[1][1]*mt[0][2] - mt[0][1]*mt[1][0]*mt[2][2] - mt[1][2]*mt[2][1]*mt[0][0];

    //Khi cấp ma trận lớn hơn 4
    var result = 0, dau;
    for(var i=0; i<cap; i++){
        var j=0;

        //Ma trận phụ là ma trận sau khi cắt dòng i cột j
        var mtp = catMaTran(mt, cap, i, j);
        
        //Xét dấu với (-1)^(i+j)
        if((i+j)%2==0) dau = 1;
        else dau = -1;
        result = result + dau*a[i][j]*det(mtp, cap-1);

    }

    return result;
}


function catMaTran(mt ,cap, i, j){
    var mtp = new Array;
    for(var i=0; i<cap-1; i++){
        mtp[i] = new Array();
    }

    var dong = 0;
    for(var k=0; k<cap; k++){
        if(k==i) continue;
        for(var f=0;f<cap; f++){
            if(f==j) continue;
            mtp[dong].push(mt[i][j]);
        }
        dong++;
    }
    return mtp;
}

function chuyenVi(mt, dong, cot){
    var mtp = new Array();
    for(var i=0; i<cot; i++){
        mtp[i] = new Array();
    }

    for(var i=0; i<cot; i++)
        for(var j=0; j<dong; j++){
            mtp[i][j] = mt[j][i];
        }

    return mtp;
}

function nhanVoi1So(mt, dong, cot, heso){
    for(var i=0; i<dong; i++)
        for(var j=0; j<cot; j++)
            mt[i][j]=mt[i][j]*heso;
    return mt;
}

function nghichDao(mt, cap){
    var det = det(mt, cap);
    
    var p = new Array();
    for(var i=0; i<cap; i++){
        p[i] = new Array();
        for(var j=0; j<cap; j++){
            p[i][j].push(0);
        }
    }
        
    
    var dau;    
    for(var i=0; i<cap; i++)
        for(var j=0; j<cap; j++){
            if((i+j)%2==0) dau=1;
            else dau=-1;
            p[i][j] = dau*det(catMaTran(mt, i, j));
        }

    p =  chuyenVi(p, cap, cap);
    var heso = 1/det;
    return nhanVoi1So(p, cap, cap, heso);    

}

var a =[
    [1,2],
    [3,4]
];

console.log(nghichDao(a, 2));