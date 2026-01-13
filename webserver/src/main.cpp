#include <iostream>
#include <string>

#include <uWebSockets/App.h>

#include <filesystem>
#include <fstream>

namespace fs = std::filesystem;

std::string load_file(fs::path path) {
  std::ifstream file(path, std::ios::binary);
  if (!file)
    return "";

  return std::string((std::istreambuf_iterator<char>(file)),
                     std::istreambuf_iterator<char>());
}

#include <string>

void replace_all_fields(std::string &str, std::string from, std::string to) {
  from = "{ " + from + " }";
  if (from.empty())
    return;
  size_t pos = 0;
  while ((pos = str.find(from, pos)) != std::string::npos) {
    str.replace(pos, from.length(), to);
    pos += to.length();
  }
}

int main() {
  std::string base = "";
  fs::current_path("./pages");

  base = load_file("../wcf/templates/base.html");

  uWS::App()
  .get("/*",
       [base](auto *res, uWS::HttpRequest *req) {
         std::string url = std::string(req->getUrl());
         fs::path filePath = fs::path("../wcf/components") / url.substr(1);
         if (!fs::exists(filePath) || fs::is_directory(filePath)) {
           res->writeStatus("404 Not Found")->end("Not found");
           return;
         }

         std::string out = base;
         replace_all_fields(out, "nav" , load_file("../wcf/components/nav.html"));
         replace_all_fields(out, "main" , load_file(filePath));

         res->writeHeader("Content-Type", "text/html; charset=utf-8")
         ->end(out);
       })
      .get("/assets/*",
           [](auto *res, auto *req) {
             std::string url = std::string(req->getUrl());
             // "/assets/style.css"

             fs::path filePath = fs::path("../pages") / url.substr(1);
             // "../pages/assets/style.css"

             if (!fs::exists(filePath) || fs::is_directory(filePath)) {
               res->writeStatus("404 Not Found")->end("Not found");
               return;
             }

             std::string data = load_file(filePath);

             // 超ざっくり MIME（必要なら増やしてOK）
             if (filePath.extension() == ".css")
               res->writeHeader("Content-Type", "text/css");
             else if (filePath.extension() == ".js")
               res->writeHeader("Content-Type", "application/javascript");
             else if (filePath.extension() == ".png")
               res->writeHeader("Content-Type", "image/png");

             res->end(data);
           })
      .listen(8080, [](auto *sock) {})
      .run();
  return 0;
}
