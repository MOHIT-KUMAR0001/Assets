#include <iostream>
using namespace std;

int findsum(int num)
{
    int sum = 0;

    while (num > 0)
    {

        int last = num % 10;
        num = num / 10;
        sum += last;
    }

    return sum;
}

int main()
{
    cout << "enter your number : ";
    int num;
    cin >> num;

    cout << "the sum of digits are : " << findsum(num);
}
