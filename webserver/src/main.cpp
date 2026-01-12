#include <iostream>
#include <regex>
#include <string>
#include <uWebSockets/App.h>

#include <fstream>

int main() {
  std::string index = "";


  std::ifstream file("pages/index.html", std::ios::in | std::ios::binary | std::ios::ate);
  if (file) {
    std::streamsize size = file.tellg();  // now gives the file size
    file.seekg(0, std::ios::beg);         // rewind to start
    index.resize(size);
    file.read(&index[0], size);
  }
  file.close();

  uWS::App()
  .get("/services/shoid", [index](uWS::HttpResponse<false>* res, uWS::HttpRequest* req) {
    /*std::string data = "<html><h1>IP: _CLIENT_IP_</h1></html>";
    std::string clientIp = std::string(res->getRemoteAddressAsText());
    data = std::regex_replace(data, std::regex("_CLIENT_IP_"), clientIp);
*/
    std::string data = index;
    res->writeHeader("Content-Type", "text/html; charset=utf-8")
    ->end(data);
  })
  .listen(8080, [](auto *sock){})
  .run();
}
