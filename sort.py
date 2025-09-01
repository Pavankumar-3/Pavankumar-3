"""Package sorting module.

This module provides ``sort``, a utility function to classify packages by their
volume and mass.

Repository: https://github.com/Pavankumar-3/Pavankumar-3
"""


def sort(width: float, height: float, length: float, mass: float) -> str:
    """Return the stack name for a package.

    Parameters:
        width (float): width in cm
        height (float): height in cm
        length (float): length in cm
        mass (float): mass in kg

    Returns:
        str: ``STANDARD``, ``SPECIAL``, or ``REJECTED`` classification.
    """
    volume = width * height * length
    bulky = volume >= 1_000_000 or max(width, height, length) >= 150
    heavy = mass >= 20
    if bulky and heavy:
        return "REJECTED"
    if bulky or heavy:
        return "SPECIAL"
    return "STANDARD"
