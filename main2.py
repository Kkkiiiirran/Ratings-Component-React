from collections import Counter
import re

# Function to extract video IDs from URLs
def extract_video_ids(urls):
    video_ids = []
    for url in urls:
        match = re.search(r'video/([a-zA-Z0-9]+)', url)
        if match:
            video_ids.append(match.group(1))
    return video_ids

# Function to count letter frequencies in video IDs
def count_letter_frequencies(video_ids):
    letter_counter = Counter()
    for video_id in video_ids:
        for char in video_id:
            if char.isalpha():
                letter_counter[char] += 1
    return letter_counter

# Function to determine the most frequent letter
def get_most_frequent_letter(letter_counter):
    if not letter_counter:
        return None, 0
    most_frequent_letter = min(letter_counter, key=lambda x: (-letter_counter[x], x))
    return most_frequent_letter, letter_counter[most_frequent_letter]

# Read URLs from a text file
file_path = 'tseries-urls.txt'
with open(file_path, 'r') as file:
    urls = file.read().splitlines()

# Extract video IDs
video_ids = extract_video_ids(urls)

# Count letter frequencies
letter_counter = count_letter_frequencies(video_ids)

# Get the most frequent letter
most_frequent_letter, frequency = get_most_frequent_letter(letter_counter)

# Print the result

print(f"{most_frequent_letter}:{frequency}")

with open("output.txt", "w") as file:
    file.write(f"{most_frequent_letter}:{frequency}")


