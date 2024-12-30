#include <iostream>
#include <vector>
using namespace std;

void merge(vector<int> &arr, int low, int high, int mid) {
    vector<int> temp;
    int left = low;
    int right = mid + 1;

    // Merging the two halves
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push_back(arr[left]);
            left++;
        } else {
            temp.push_back(arr[right]);
            right++;
        }
    }

    // Add remaining elements from left half, if any
    while (left <= mid) {
        temp.push_back(arr[left]);
        left++;
    }

    // Add remaining elements from right half, if any
    while (right <= high) {
        temp.push_back(arr[right]);
        right++;
    }

    // Copy sorted elements back into original array
    for (int i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

void mS(vector<int> &arr, int low, int high) {
    if (low >= high) return;

    int mid = (low + high) / 2;
    mS(arr, low, mid);
    mS(arr, mid + 1, high);

    merge(arr, low, high, mid);
}

int main() {
    vector<int> arr = {5, 4, 3, 3, 2, 1};
    mS(arr, 0, arr.size() - 1);

    for (int elem : arr) {
        cout << elem << " ";
    }

    return 0;
}
