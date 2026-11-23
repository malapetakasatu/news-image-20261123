import os
import subprocess
import sys

def main():
    cwd = os.path.abspath(os.path.dirname(__file__))
    html_path = os.path.join(cwd, "index.html")
    out_png = os.path.join(cwd, "entry.png")
    
    cmd = [
        "google-chrome-stable",
        "--headless",
        "--no-sandbox",
        "--disable-gpu-sandbox",
        "--window-size=1024,1024",
        "--hide-scrollbars",
        f"--screenshot={out_png}",
        f"file://{html_path}"
    ]
    
    print(f"Executing: {' '.join(cmd)}")
    res = subprocess.run(cmd, check=True)
    if res.returncode == 0:
        print(f"Rendered {out_png} successfully.")
    else:
        sys.exit(res.returncode)

if __name__ == "__main__":
    main()
