import urllib.request
import json
import urllib.parse

try:
    q = "Lambang Kota Tangerang"
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(q)}&utf8=&format=json&srnamespace=6"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    res = json.loads(urllib.request.urlopen(req).read())
    search_results = res.get("query", {}).get("search", [])
    
    if search_results:
        title = search_results[0]["title"]
        url2 = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json"
        req2 = urllib.request.Request(url2, headers={"User-Agent": "Mozilla/5.0"})
        res2 = json.loads(urllib.request.urlopen(req2).read())
        pages = res2.get("query", {}).get("pages", {})
        image_url = None
        for k, v in pages.items():
            image_url = v.get("imageinfo", [{}])[0].get("url")
            
        if image_url:
            print(f"Downloading {image_url}")
            req3 = urllib.request.Request(image_url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req3) as response, open("public/assets/images/logo-tgr.png", 'wb') as out_file:
                out_file.write(response.read())
            print("Success logo")
except Exception as e:
    print(f"Error: {e}")

