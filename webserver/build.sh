set -e

tsu build-cpp "g++" "src" "shoid-server" "-Wall -Iinclude -Iinclude/uWebSockets" "libs/linux-x32_64/libuSockets.a -lz" && ./build/shoid-server
