docker build -t puppeteer-chrome-linux-root .

docker run -i --init --rm --cap-add=SYS_ADMIN \
  --shm-size=256m \
  -v "$(pwd)/screenshot:/screenshot" \
  --name puppeteer-chrome puppeteer-chrome-linux-root \
  node -e "`cat example.js`"
