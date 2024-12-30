#include <iostream>
using namespace std;

int myfunc(int num)
{

    int result = 0;
    for (int i = 1; i <= num; i++)
    {
        result += i;
    }
    return result;
}

int main()
{
    cout << "enter your number : ";
    int num;
    cin >> num;

    cout << " the sum of number is :" << myfunc(num);
}