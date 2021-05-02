docker run -i --init --rm --cap-add=SYS_ADMIN \
  --shm-size=256m \
  -w /home/pptruser \
  -v "$(pwd)/tmp:/home/pptruser" \
  -u `id -u`:`id -g` \
  --name puppeteer-chrome puppeteer-chrome-linux \
  node -e "`cat example.js`"


# docker run -i --init --rm --cap-add=SYS_ADMIN \
#   --shm-size=256m \
#   -w /home/pptruser \
#   -v "$(pwd)/tmp:/home/pptruser" \
#   --name puppeteer-chrome puppeteer-chrome-linux \
#   node -e "`cat example.js`"

# docker run -i --init --rm --cap-add=SYS_ADMIN \
#   --shm-size=256m \
#   -v "$(pwd)/tmp:/screenshot" \
#   --name puppeteer-chrome puppeteer-chrome-linux \
#   node -e "`cat yahoo.js`"

