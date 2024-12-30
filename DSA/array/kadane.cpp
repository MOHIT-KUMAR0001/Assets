#include <iostream>
using namespace std;
#include <vector>

int main()
{

    vector<int> arr = {1, 2, 3, 4, 5};

    int maxSum = INT8_MIN;
    int current_sum = 0;

    for (int i = 0; i < 5; i++)
    {

        current_sum += arr[i];
        maxSum = max(maxSum, current_sum);
        if (current_sum < 0)
        {
            current_sum = 0;
        }
    }

    cout << maxSum << endl;
}