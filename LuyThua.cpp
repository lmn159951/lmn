#include <stdio.h>
#include <conio.h>


int a[100][100], b[100][100], c[100][100], n, k;

void NhapA();
void XuatA();
void LuyThua(int k);
void CBangA();
void Nhan();
void DapAn();

int main(){
	NhapA();printf("\n");XuatA();
	printf("Luy thua mu k : "); scanf("%d", &k);
	LuyThua(k);
	
	
	printf("Dap an la : \n");
	DapAn();
	
	getch();
	return 0;
}


void NhapA(){
	printf("Ma tran A : \n");
	printf("Cap cua ma tran "); scanf("%d", &n);
	for(int i=0; i<n; i++)
		for(int j=0; j<n; j++)
		{
			printf("Phan tu dong %d cot %d  ", i+1, j+1);
			scanf("%d", &a[i][j]);
		}
}

void XuatA(){
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++)
		{
			printf("%d ", a[i][j]);
		}	
		printf("\n");
	}
		
}

void LuyThua(int k){
	CBangA();// Gan C cho A
	
	for(int i=1; i<k; i++){
		Nhan();
		//B = C
		//C = B * A
	}
}

void CBangA(){
	for(int i=0; i<n; i++)
		for(int j=0; j<n; j++)
			c[i][j] = a[i][j];
	
}

void Nhan(){
	//B = C
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++)
			b[i][j] = c[i][j];
	}
	
	//C = B * A
		for(int i=0; i<n; i++){
			for(int j=0; j<n; j++){
				int sum = 0;
				
				for(int k=0; k<n; k++){
					sum+=(b[i][k]*a[k][j]);
				}
				
				c[i][j] = sum;
			}
		}
			
}


void DapAn(){
	for(int i=0; i<n; i++){
		for(int j=0; j<n; j++){
			printf("%d ", c[i][j]);
		}
	printf("\n");
	}
		
}



