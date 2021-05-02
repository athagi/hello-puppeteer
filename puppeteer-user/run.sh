docker build -t puppeteer-chrome-linux-pptr .

mkdir -p screenshot
chmod 777 screenshot

docker run -i --init --rm --cap-add=SYS_ADMIN \
  --shm-size=256m \
  -w /screenshot/ \
  -v "$(pwd)/screenshot:/screenshot" \
  --name puppeteer-chrome puppeteer-chrome-linux-pptr \
  node -e "`cat example.js`"

