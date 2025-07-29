import unittest
from sort import sort

class TestSort(unittest.TestCase):
    def test_standard(self):
        self.assertEqual(sort(10, 10, 10, 5), 'STANDARD')

    def test_special_bulky(self):
        self.assertEqual(sort(200, 10, 10, 5), 'SPECIAL')

    def test_special_heavy(self):
        self.assertEqual(sort(10, 10, 10, 30), 'SPECIAL')

    def test_rejected(self):
        self.assertEqual(sort(200, 200, 200, 25), 'REJECTED')

if __name__ == '__main__':
    unittest.main()
