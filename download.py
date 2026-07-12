import urllib.request

urls = {
    "hero-bg.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ec/City_Mall_Tangerang.jpg",
    "masjid.jpg": "https://upload.wikimedia.org/wikipedia/commons/8/87/Masjid_Al_A%27zhom%2C_Tangerang_from_the_front.jpg",
    "pasar-lama.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Klenteng_Boen_Tek_Bio_Pasar_Lama_Kota_Tangerang_Banten_2.jpg",
    "cipondoh.jpg": "https://upload.wikimedia.org/wikipedia/commons/9/91/Perahu_Air_Setu_Cipondoh.jpg",
    "potret.jpg": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Taman_Makam_Pahlawan_Taruna%2C_Tangerang.jpg"
}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req) as response, open(f"public/assets/images/{name}", 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")

