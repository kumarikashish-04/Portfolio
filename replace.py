import os
import glob
import re

directory = r"d:\portfolio\my-portfolio\src\pages"
files = glob.glob(os.path.join(directory, "*.jsx"))

replacements = {
    '"#f1f5f9"': '"var(--text-heading)"',
    '"#94a3b8"': '"var(--text-body)"',
    '"#cbd5e1"': '"var(--text-base)"',
    '"#e2e8f0"': '"var(--text-heading)"',
    '"#bfdbfe"': '"var(--text-heading)"',
    '"#a5f3fc"': '"var(--text-heading)"',
    '"#64748b"': '"var(--text-muted)"',
    '"#334155"': '"var(--text-muted)"',
    '"#475569"': '"var(--text-muted)"',
    '"#c4b5fd"': '"var(--text-heading)"',
    
    # Backgrounds
    'background: "linear-gradient(180deg, #030014 0%, #050816 100%)"': 'background: "var(--bg-body)"',
    'background: "linear-gradient(180deg, #050816 0%, #030014 100%)"': 'background: "var(--bg-body)"',
    'background: "rgba(255,255,255,0.03)"': 'background: "var(--glass-bg)"',
    'background: "rgba(255,255,255,0.05)"': 'background: "var(--glass-bg)"',
    'background: "rgba(255, 255, 255, 0.05)"': 'background: "var(--glass-bg)"',
    'background: "rgba(30, 41, 59, 0.3)"': 'background: "var(--glass-bg)"',
    
    # Borders
    '"1px solid rgba(255,255,255,0.07)"': '"1px solid var(--glass-border)"',
    '"1px solid rgba(255,255,255,0.06)"': '"1px solid var(--glass-border)"',
    '"1px solid rgba(255,255,255,0.1)"': '"1px solid var(--glass-border)"',
    '"1px solid rgba(255, 255, 255, 0.05)"': '"1px solid var(--glass-border)"',

    # Group hover text white
    'group-hover:text-white': 'group-hover:text-slate-800 dark:group-hover:text-white',
}

for filepath in files:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    for old, new in replacements.items():
        content = content.replace(old, new)
        
    # Regex for custom color text inside specific spans/ps
    # For example: color: "#030014" -> color: "var(--bg-body)"
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Replaced colors in {len(files)} files.")
