#include <stdio.h>
#include <conio.h>


int a[100][100], n;
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


void ChuyenVi(){
	for(int i=0; i<n; i++)
		for(int j=i+1; j<n; j++){
			int x = a[i][j];
			a[i][j] = a[j][i];
			a[j][i] = x;
		}
			
}
int main(){
	
	printf("Nhap cap n cua ma tran : "); scanf("%d", &n);
	printf("Nhap ma tran : \n");
	
	Nhap();
	
	Xuat();
	printf("\n");
	
	ChuyenVi();
	
	Xuat();
	
	getch();
	return 0;
}

