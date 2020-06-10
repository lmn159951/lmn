#include <stdio.h>
#include <conio.h>


int a[100][100], n;
int b[100][100]; //B la phan ma tran A sau khi cat dong i cot j
void Nhap(){
	for(int i=0; i<n; i++)
		for(int j=0; j<n; j++)
		{
			printf("Phan tu dong %d cot %d  ", i+1, j+1);
			scanf("%d", &a[i][j]);
		}
}

void Xuat(){
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++)
		{
			printf("%d ", a[i][j]);
		}	
		printf("\n");
	}
		
}

int Det(int a[100][100], int n);
void CatDongICotJ(int i, int j);
void XuatB();
int main(){
	
	printf("Nhap cap n cua ma tran : "); scanf("%d", &n);
	printf("Nhap ma tran : \n");
	
	Nhap();
	
	Xuat();
	printf("\n");
	
	
	
	printf("Dinh thuc cua ma tran la : %d", Det(a, n));
	
	getch();
	return 0;
}


int Det(int a[100][100], int n){
	
	if(n==1) return a[0][0];
	if(n==2) {
		return a[0][0]*a[1][1] - a[0][1]*a[1][0];
		
	}
	
	if(n==3) {
		return a[0][0]*a[1][1]*a[2][2] + a[1][0]*a[2][1]*a[0][2] + a[0][1]*a[1][2]*a[2][0]
		- a[2][0]*a[1][1]*a[0][2] - a[0][1]*a[1][0]*a[2][2] - a[1][2]*a[2][1]*a[0][0];
	}
	
	int result = 0, dau=1;
	for(int i=0; i<n; i++){
		int j=0;
		
		
		//Cat dong i cot j cua ma tran A va dan vao B
		CatDongICotJ(i, j);
		
		result += dau*a[i][j]*Det(b, n-1);
		dau*=-1;
	}
	return result;
	
}


void CatDongICotJ(int i, int j){
	int dongB=0, cotB=0;
	for(int k=0; k<n; k++){
		if(k==i) continue;
		for(int f=0; f<n; f++){
			if(f==j) continue;
			b[dongB][cotB] = a[k][f];
			cotB++;
			if(cotB==n-1){
				dongB++;
				cotB=0;
			}
		}
		
		
	}
	
}

void XuatB(){
	for(int i=0; i<n-1; i++){
		for(int j=0; j<n-1; j++)
		{
			printf("%d ", b[i][j]);
		}	
		printf("\n");
	}
}





