#include <iostream>
#include <vector>
#include <unordered_map>
#include <cmath>

struct Entry {
    int id;
    double x;
    double y;
};

int main() {
    std::vector<Entry> entries;
    int id;
    double x, y;

    while (std::cin >> id >> x >> y) {
        entries.push_back({id, x, y});
    }

    std::unordered_map<int, double> cumulativeDistances;
    std::unordered_map<int, Entry> lastEntry;

    for (const auto &e : entries) {
        auto it = lastEntry.find(e.id);
        if (it != lastEntry.end()) {
            double dx = e.x - it->second.x;
            double dy = e.y - it->second.y;
            cumulativeDistances[e.id] += std::sqrt(dx * dx + dy * dy);
        }
        lastEntry[e.id] = e;
    }

    for (const auto &pair : cumulativeDistances) {
        std::cout << "ID: " << pair.first << ", cumulative distance: " << pair.second << '\n';
    }
    return 0;
}
