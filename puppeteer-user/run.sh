docker build -t puppeteer-chrome-linux-pptr .

mkdir -p tmp
chmod 777 tmp

docker run -i --init --rm --cap-add=SYS_ADMIN \
  --shm-size=256m \
  -w /screenshot/ \
  -v "$(pwd)/tmp:/screenshot" \
  --name puppeteer-chrome puppeteer-chrome-linux-pptr \
  node -e "`cat example.js`"

