#include <iostream>
#include <vector>
using namespace std;

int main(){
    
    vector<int>arr = {88,7,5,8,3,4,2};
    
    for (int i=0; i<arr.size(); i++){
        
        bool swapped = false;
        
        for (int j=0; j<arr.size()-1-i; j++){

            if (arr[j] > arr[j + 1]){
                swap(arr[j],arr[j+1]);
                swapped = true;
            }
        }
        
        if (!swapped){
            break;
        }
    }
    
    for (int el:arr){
        cout << el << " ";
    }
    
    cout << endl;
}