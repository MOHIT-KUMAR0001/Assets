#include <iostream>

using namespace std;

int main()
{

  int num;
  cout << "enter your number : ";
  cin >> num;

  for (int i = 1; i <= num; i++)
  {

    for (int space = i; space <= num; space++)
    {
      cout << " ";
    }

    for (int ist = 1; ist <= i; ist++)
    {
      cout << ist;
    }

    for (int sec = i - 1; sec > 0; sec--)
    {
      cout << sec;
    }

    cout << endl;
  }
}


