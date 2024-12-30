#include <iostream>
using namespace std;
#include <vector>

int main()
{

    vector<int> arr = {3,2,3};

    int n = arr.size();

    for (int val:arr){

        int freq = 0;

        for (int el:arr){

            if (el == val){
                freq ++;
            }

            if (freq > n/2){
                cout << val << endl;
            }
        }
    }
}