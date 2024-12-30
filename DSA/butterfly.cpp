#include <iostream>
using namespace std;

int main()
{

    int num;
    cout << "enter your number : ";
    cin >> num;

    for (int i = 0; i < num; i++)
    {

        for (int o = 0; o < i; o++)
        {
            cout << "*";
        }

        for (int s = 0; s < 2 * i - 1; s++)
        {

            cout << "#";
        }

        cout << endl;
    }



     for (int i = 0; i < num; i++)
    {

        for (int o = 0; o < i; o++)
        {
            cout << "*";
        }

        for (int s = 0; s < 2 * i - 1; s++)
        {

            cout << "#";
        }

        cout << endl;
    }

    cout << endl;




}