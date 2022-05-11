#include<bits/stdc++.h>
using namespace std;
int main(){
int t;
cin>>t;
for(int i=0; i<t; i++){
int n;
string s;
cin>>n;
cin>>s;
int oc,zc,index;
oc = 2;
zc  = 3;
index=0;
while(oc!=zc){
oc = 0;
zc = 0;
for(int k=0; k<s.length(); k++){
if(s[k]=='1'){
s[k] = '0';
}
else{
s[k] = '1';
}
}
for(int m=0; m<s.length(); m++){
if(s[m]=='1'){
oc++;
}
else{
zc++;
}
}
index++;
cout<<s<<endl;
}
}
return 0;
}