#include<bits/stdc++.h>
using namespace std;
int main(){
int t;
cin>>t;
for(int i=0; i<t; i++){
int a,b,c,d,e,f;
cin>>a>>b>>c>>d>>e>>f;
int sum = a+b+c;
int sum2 = d+e+f;
if(sum>sum2){
cout<<"Dragon"<<"\n";
}
else if(sum<sum2){
cout<<"Sloth"<<"\n";
}
else if(sum==sum2){
if(a>d){
cout<<"Dragon"<<"\n";
}
else if(d>a){
cout<<"Sloth"<<"\n";
}
else if(a==d){
if(b>e){
cout<<"Dragon"<<"\n";
}
else if(e>b){
cout<<"Sloth"<<"\n";
}
else if(b==e){
if(c>f){
cout<<"Dragon"<<"\n";
}
else if(f>c){
cout<<"Sloth"<<"\n";
}
else{
cout<<"Tie"<<"\n";
}
}
}
}
}
return 0;
}