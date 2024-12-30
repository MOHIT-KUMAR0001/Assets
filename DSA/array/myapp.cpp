#include <iostream>
#include <vector>
using namespace std;
#include <algorithm>

int main(){


    vector<int>arr = {3,2,3};

    int size = arr.size();
    int start=0, end=size-1;

    // while(start < end){

    //     swap(arr[start],arr[end]);

    //     start ++;
    //     end --;
    // }

    sort(arr.begin(),arr.end());

    for(int elem: arr){

        cout << elem << " ";
    }

    cout << arr[size/2] << endl;
}