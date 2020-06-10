#include <stdio.h>
#include <conio.h>


int a[100][100], i1, j1;
int b[100][100], i2, j2; //B la phan ma tran A sau khi cat dong i cot j
int c[100][100], i3, j3;

void NhapA();
void XuatA();
void NhapB();
void XuatB();
void Cong();
void Tru();
void Nhan();
void DapAn();
int main(){
	NhapA();printf("\n");XuatA();
	NhapB();printf("\n");XuatB();
	
	
	printf("Dap an la : \n");
	DapAn();
	
	getch();
	return 0;
}
void NhapA(){
	printf("Ma tran A : \n");
	printf("So dong : "); scanf("%d", &i1);
	printf("So cot : "); scanf("%d", &j1);
	for(int i=0; i<i1; i++)
		for(int j=0; j<j1; j++)
		{
			printf("Phan tu dong %d cot %d  ", i+1, j+1);
			scanf("%d", &a[i][j]);
		}
}

void XuatA(){
	for(int i=0; i<i1; i++){
		for(int j=0; j<j1; j++)
		{
			printf("%d ", a[i][j]);
		}	
		printf("\n");
	}
		
}

void NhapB(){
	printf("Ma tran B : \n");
	printf("So dong : "); scanf("%d", &i2);
	printf("So cot : "); scanf("%d", &j2);
	for(int i=0; i<i2; i++)
		for(int j=0; j<j2; j++)
		{
			printf("Phan tu dong %d cot %d  ", i+1, j+1);
			scanf("%d", &b[i][j]);
		}
}

void XuatB(){
	for(int i=0; i<i2; i++){
		for(int j=0; j<j2; j++)
		{
			printf("%d ", b[i][j]);
		}	
		printf("\n");
	}
}

void Cong(){
	if(i1==i2 && j1==j2){
		i3=i1;
		j3=j1;
		for(int i=0; i<i3; i++)
			for(int j=0; j<j3; j++){
				c[i][j] = a[i][j] + b[i][j];
			}
	}
	else printf("Cong khong hop le\n");
}

void Tru(){
	if(i1==i2 && j1==j2){
		i3=i1;
		j3=j1;
		for(int i=0; i<i3; i++)
			for(int j=0; j<j3; j++){
				c[i][j] = a[i][j] - b[i][j];
			}
	}
	else printf("Tru khong hop le\n");
}

void Nhan(){
	if(j1==i2){
		i3=i1;
		j3=j2;
		for(int i=0; i<i3; i++){
			for(int j=0; j<j3; j++){
				int sum = 0;
				
				for(int k=0; k<j1; k++){
					sum+=(a[i][k]*b[k][j]);
				}
				
				c[i][j] = sum;
			}
		}
			
	}
	else printf("Nhan khong hop le\n");
}

void DapAn(){
	for(int i=0; i<i3; i++){
		for(int j=0; j<j3; j++){
			printf("%d ", c[i][j]);
		}
	printf("\n");
	}
		
}



