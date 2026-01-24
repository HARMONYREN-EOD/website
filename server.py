from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

DOCS_DIR = "./docs"  # folder containing your HTML files

class NoHTMLExtensionHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        # Pass the directory to the parent class
        super().__init__(*args, directory=DOCS_DIR, **kwargs)

    def do_GET(self):
        # Get requested path without leading slash
        path = self.path.lstrip("/")

        # Default to index.html if empty
        if not path:
            path = "index.html"
        else:
            full_path = os.path.join(DOCS_DIR, path)
            if not os.path.isfile(full_path):
                if os.path.isfile(full_path + ".html"):
                    path += ".html"

        # Serve the file if it exists
        full_path = os.path.join(DOCS_DIR, path)
        if os.path.isfile(full_path):
            self.path = "/" + path  # required by SimpleHTTPRequestHandler
            return super().do_GET()
        else:
            self.send_error(404, f"File not found: {self.path}")

if __name__ == "__main__":
    PORT = 8080
    server = HTTPServer(("0.0.0.0", PORT), NoHTMLExtensionHandler)
    print(f"Serving from {DOCS_DIR} on http://127.0.0.1:{PORT}/ …")
    server.serve_forever()
