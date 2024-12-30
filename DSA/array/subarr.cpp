#include <iostream>
using namespace std;
#include <vector>

int main()
{

    vector<int> v = {1, 2, 3, 4, 5};

    int max_sum = INT8_MIN;

    for (int i = 0; i < 5; i++)
    {
        int current_sum = 0;
        for (int k = i; k < 5; k++)
        {
            current_sum += v[k];
            cout << v[k] << " ";
            max_sum = max(current_sum, max_sum);
        }
    }

    cout << max_sum;
}