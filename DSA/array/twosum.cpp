#include <iostream>
#include <vector>
using namespace std;

int main() {
    int num;
    cout << "enter your number : ";
    cin >> num;
    vector<int> arr = {1, 2, 3, 4, 5};
    int st = 0, end = arr.size() - 1;

    // While the two pointers do not cross
    while (st < end) {
        int sum = arr[st] + arr[end];

        // If the sum is greater than 'num', decrease 'end'
        if (sum > num) {
            end--;
        }
        // If the sum is smaller than 'num', increase 'st'
        else if (sum < num) {
            st++;
        }
        // If the sum equals 'num', print the pair
        else {
            cout << "Pair: (" << arr[st] << ", " << arr[end] << ") -> Sum: " << sum << endl;
            st++; // After printing a valid pair, move both pointers
            end--;
        }
    }

    return 0;
}
