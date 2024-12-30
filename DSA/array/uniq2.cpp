#include <iostream>
using namespace std;
#include <vector>

int main()
{

    vector<int> v = {4,1,2,1,2,5,6,6,7};
    int uniq = 0;
    for (int u : v)
    {

        uniq = (uniq ^ u);
    }

    cout << uniq;
}