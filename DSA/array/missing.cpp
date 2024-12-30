// Online C++ compiler to run C++ program online
#include <iostream>
#include <vector>
using namespace std;
#include <algorithm>

int func(vector<int> &nums)
{

    vector<int> hash(nums.size() + 1, -1);
    int missing = -1;

    for (int i = 0; i < nums.size(); i++)
    {
        hash[nums[i]] = nums[i];
    }

    for (int i = 0; i < hash.size(); i++)
    {
        if (hash[i] == -1)
        {
            missing = i;
            break;
        }
    }

    return missing;

}

int main()
{

    vector<int> nums = {0, 1, 3, 2, 5};

    // for (int i=0; i <= nums.size(); i++){
    //     int flag = 0;
    //     for (int j=0; j < nums.size(); j++){
    //         if(nums[j] == i){
    //             flag = 1;
    //             break;
    //         }
    //     }

    //     if(flag == 0){
    //         flag = i;
    //         cout << flag << endl;
    //     }
    // }

    cout << func(nums) << endl;
}