set -e

cd webserver && tsu build-cpp "g++" "src" "shoid-server" "-Wall -Iinclude -Iinclude/uWebSockets -O0 -g1 -fno-omit-frame-pointer" "libs/linux-x32_64/libuSockets.a -lz" && cd .. && ./webserver/build/shoid-server
