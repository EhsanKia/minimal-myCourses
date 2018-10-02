import re
import requests

faculty_page="https://www.mcgill.ca/psychology/about/faculty-0"
output = requests.get(faculty_page)

faculty = re.findall(b'<a href="//(www.mcgill.ca/psychology/.+?)">Faculty Profile</a>', output.content)

for link in faculty:
    output = requests.get(b'https://'+link)
    name_match = re.search(b'<h1>(.+?)</h1>', output.content)
    summary_match = re.search(b'Research (?:Summary|Interests):[\S\s]+?<p>(.+?)</p>', output.content, flags=re.DOTALL)
    print(name_match.group(1))
    print(summary_match.group(1))
    print('-------------------------')
