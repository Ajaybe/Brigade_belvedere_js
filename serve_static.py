#!/usr/bin/env python3
"""
Simple HTTP server to serve static files from /app/public directory
"""
import http.server
import socketserver
import os
from pathlib import Path

PORT = 3000
DIRECTORY = Path("/app/public")

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(DIRECTORY), **kwargs)
    
    def end_headers(self):
        # Add CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        print(f"Serving static files from {DIRECTORY} on port {PORT}")
        print(f"Visit http://localhost:{PORT}")
        httpd.serve_forever()
