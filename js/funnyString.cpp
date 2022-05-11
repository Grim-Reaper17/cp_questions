#include<bits/stdc++.h>
using namespace std;
int main(){
string s= "acxz";
string reverse;
for(int j=s.length()-1; j> -1; j--){
reverse+= s[j];
}
for(int i=0; i<s.length()-1; i++){
if(abs(int(reverse[i])-int(reverse[i+1]))!=abs(s[i]-s[i+1])){
cout<<"Not Funny"<<"\n";
}
}
cout<<"Funny"<<"\n";
return 0;
}