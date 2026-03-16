#!/bin/bash
# Spusti tento skript v priečinku projektu pred deployom na Vercel
# Stiahne všetky obrázky z etraktor.sk do lokálneho priečinka images/

mkdir -p images/galeria

BASE="https://www.etraktor.sk/images"

echo "Sťahujem hlavné obrázky..."
curl -A "Mozilla/5.0" -o images/elektricky-malotraktor.jpg "$BASE/elektricky-malotraktor.jpg"
curl -A "Mozilla/5.0" -o images/dojazd1.jpg "$BASE/dojazd1.jpg"
curl -A "Mozilla/5.0" -o images/dojazd2.jpg "$BASE/dojazd2.jpg"
curl -A "Mozilla/5.0" -o images/prislusenstvo.jpg "$BASE/prislusenstvo.jpg"
curl -A "Mozilla/5.0" -o images/zadnyzaves.png "$BASE/zadnyzaves.png"
curl -A "Mozilla/5.0" -o images/prislusenstvosumar.jpg "$BASE/prislusenstvosumar.jpg"
curl -A "Mozilla/5.0" -o images/rozmerythumb1.png "$BASE/rozmerythumb1.png"
curl -A "Mozilla/5.0" -o images/rozmerythumb2.png "$BASE/rozmerythumb2.png"
curl -A "Mozilla/5.0" -o images/rozmerythumb3.png "$BASE/rozmerythumb3.png"
curl -A "Mozilla/5.0" -o images/certifikat1.jpg "$BASE/certifikat1.jpg"
curl -A "Mozilla/5.0" -o images/certifikat2.jpg "$BASE/certifikat2.jpg"
curl -A "Mozilla/5.0" -o images/bateria.png "$BASE/bateria.png"
curl -A "Mozilla/5.0" -o images/nabijanie.png "$BASE/nabijanie.png"

echo "Sťahujem galériu..."
for i in $(seq -f "%02g" 1 15); do
  curl -A "Mozilla/5.0" -o "images/galeria/elektricky-malotraktor-$i.JPG" \
    "$BASE/galeria/elektricky-malotraktor-$i.JPG"
  echo "  galeria/$i hotovo"
done

echo ""
echo "Hotovo! Všetky obrázky sú v priečinku images/"
echo "Teraz môžeš spustiť: git add . && git commit -m 'Add images' && git push"
