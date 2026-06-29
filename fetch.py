import urllib.request
import re

url = "https://melbourneautoworks.com.au"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    m = re.search(r'<footer(.*?)</footer>', html, re.DOTALL | re.IGNORECASE)
    if m:
        print(m.group(0))
    else:
        print("Footer not found")
except Exception as e:
    print(e)
