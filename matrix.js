//Do chả đời nào người dùng xuất đòi xuất ma trận cắt dòng cột cả nên để ở đây, dễ dùng
function CatMaTran(mt, mtRow, mtCol, row, col){ 
    /*Mt : ma trận cần cắt
    Row : dòng cần cắt
    Col : cột cần cắt*/
    //Tạo ma trận phụ để trả về mtp
    let mtp = new Array();
    for(let i=0; i<mtRow; i++)
        mtp[i] = new Array();
        //Không cần quan tâm số cột vì đã có push
    
    let dongHT=0;
    //chứa dòng của mtp cho for dưới
    // mỗi lần bỏ qua dòng nào không tính thì dongHT không tăng nhưng i vẫn tăng
    for(let i=0; i<mtRow; i++){
        if(i==row) continue; //dòng nào ko lấy thì ko care
        for(let j=0; j<mtCol; j++){
            if(j==col) continue;
            mtp[dongHT].push(mt[i][j]); 
        }
        dongHT++; 
    }

    return mtp;
}


class Matrix {
    //Không thể tạo ma trận phụ với 1 công thức xác định được 
    //vì mỗi lần ma trận đều tạo ra khác nhau cho muc đich khác nhau
    constructor(arr){
        this.arr=arr;
        this.row=arr.length;
        this.col=arr[0].length;
    }

    Row(){ 
        return this.row;
    }

    Col(){ 
        return this.col;
    }

    OutputFullMatrix(){ 
        return this.arr;
    }

    OutputElement(i,j){
        return this.arr[i][j];
    }

    Det(){
        if (this.row!=this.col) return;
        let cap = this.row; // cấp của ma trận vuông
        if(cap==1) return this.arr[0][0];
        if(cap==2) return this.arr[0][0]*this.arr[1][1]-this.arr[0][1]*this.arr[1][0];
        if(cap==3) return this.arr[0][0]*this.arr[1][1]*this.arr[2][2]  
                        + this.arr[1][0]*this.arr[2][1]*this.arr[0][2]
                        + this.arr[0][1]*this.arr[1][2]*this.arr[2][0]
                        - this.arr[2][0]*this.arr[1][1]*this.arr[0][2] 
                        - this.arr[0][1]*this.arr[1][0]*this.arr[2][2] 
                        - this.arr[1][2]*this.arr[2][1]*this.arr[0][0];

        //Khi cấp ma trận lớn hơn 4
        let result = 0, dau;
        
        for(let i=0; i<cap; i++){
            //Tính định thức khai triển theo cột 1
            let j=0;

            //Ma trận phụ là ma trận sau khi cắt dòng i cột j
            //Cái đoạn này logic vậy hợp lý ko 
            let mtp = new Matrix(CatMaTran(this.arr, cap, cap, i, j));
            
            //Xét dấu với (-1)^(i+j)
            dau = ((i+j)%2==0) ? 1 : -1;
            result = result + dau*a[i][j]*mtp.Det();

        }

        return result;
    }

    ChuyenVi(){
        let mtp = new Array();// ma trận chuyển vị có this.col x this.row
        for(let i=0; i<this.col; i++){
            mtp[i] = new Array();
            for(let j=0; j<this.row; j++)
                mtp[i].push(this.arr[j][i]);
        }
        return mtp;  
    }

    MultiWithNumBer(number){
        let mtp = new Array();
        for(let i=0; i<this.row; i++){
            mtp[i] = new Array();
            for(let j=0; j<this.col; j++)
                mtp[i][j] *= number;
        }
        return mtp;
    }

    NghichDao(){
        if(this.row != this.col) return;
        let cap = this.row;

        let DinhThuc = this.Det();
        if(DinhThuc == 0) return;

        //p là phụ hợp nhưng trước khi chuyển vị
        let p = new Array();
        for(let i=0; i<cap; i++){
            p[i] = new Array();
            for(let j=0; j<cap; j++)
                let dau;
                dau = ((i+j)%2==0) ? 1 : -1;
                //mtp chính là Mij trong công thức trang 37
                let mtp = new Matrix(CatMaTran(this.arr, this.row, this.col, i, j));
                p[i].push(dau*mtp.Det());
        }

        
        let P1 = new Matrix(p);
        let P2 = new Matrix(P1.ChuyenVi());
        return P2.MultiWithNumBer(1/DinhThuc);
            
        
    }

    LuyThua(number){
        
    }

    Rank(){

    }

}


class Matrix2{
    constructor(a, b){
        this.a = a; this.aRow = a.length; this.aCol = a[0].length; 
        this.b = b; this.bRow = b.length; this.bCol = b[0].length;
    }

    Add(){
        if(this.aRow != this.bRow || this.aCol != this.bCol) return; 
        let mtp = new Array();
        for(let i=0; i<this.aRow; i++){
            mtp[i] = new Array();
            for(let j=0; j<this.aCol; j++)
                mtp[i].push(a[i][j]+b[i][j]);
        }

        return mtp;
    }

    Minus(){
        if(this.aRow != this.bRow || this.aCol != this.bCol) return; 
        let mtp = new Array();
        for(let i=0; i<this.aRow; i++){
            mtp[i] = new Array();
            for(let j=0; j<this.aCol; j++)
                mtp[i].push(a[i][j]-b[i][j]);
        }

        return mtp;
    }

    Multi(){
        if(this.aCol != this.bRow) return;
        let mtp = new Array();
        for(let i=0; i<this.aRow; i++){
            mtp[i] = new Array();
            for(let j=0; j<this.bCol; j++){                
                mtp[i].push(this.ElementOfMulti(i,j));
            }
            
        }

        return mtp;
    }

    ElementOfMulti(i,j){
        let sum = 0;
        for(let k=0; k<this.aRow; k++){
            sum += this.a[i][k]*this.b[k][j];
        }
        return sum;
    }
}





