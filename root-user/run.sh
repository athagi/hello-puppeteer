docker run -i --init --rm --cap-add=SYS_ADMIN \
  --shm-size=256m \
  -v "$(pwd)/screenshot:/screenshot" \
  --name puppeteer-chrome puppeteer-chrome-linux \
  node -e "`cat example.js`"
  # node -e "`cat github.js`"

