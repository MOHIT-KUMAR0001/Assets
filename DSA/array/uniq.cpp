#include <iostream>
using namespace std;

void uniq(int arr[], int size)
{

    for (int i = 0; i < size; i++)
    {
        bool is_unique = true;

        for (int k = i + 1; k < size; k++)

        {
            if (arr[i] == arr[k])
            {

                is_unique = false;
                break;
            }
        }

        if (is_unique)
        {
            cout << arr[i] << " ";
        }
    }
}

int main()
{

    int arr[] = {8,5, 2, 2, 3, 4, 4, 8, 8, 8, 8, 8};
    int size = sizeof(arr) / sizeof(int);

    uniq(arr, size);
}
