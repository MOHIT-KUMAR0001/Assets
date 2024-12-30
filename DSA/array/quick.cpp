#include <iostream>
#include <vector>
using namespace std;


void sort (vector<int> &arr,int low,int high){
    
    int pivot = arr[high];
    int count = -1;
    
    for (int index=0; index<=high; index++){
        if(arr[index] <= pivot){
            count ++;
            swap (arr[count],arr[index]);
        }
    }
    
    swap(arr[count + 1],arr[high]);
    
}

int main() {
    
    vector<int> arr = {1,5,2,4,3};
    int low = 0;
    int high = arr.size() -1 ;
    
    sort(arr,low,high);
    sort (arr,low,high);
    
    for (int el: arr){
        cout << el << " ";
    }
}










