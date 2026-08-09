Gradle Transform Cache Cleanup

Usage
- PowerShell (Windows):
  - Run `./clean-gradle-cache.ps1` from `android/scripts` or provide a different cache path: `.\in\powershell -File clean-gradle-cache.ps1 -CachePath "C:\Users\you\.gradle\caches\8.13\transforms"`
- Bash (macOS/Linux/WSL):
  - Make executable: `chmod +x clean-gradle-cache.sh`
  - Run: `./clean-gradle-cache.sh`

When to use
- Use these scripts if you encounter errors mentioning `metadata.bin` under `~/.gradle/caches/*/transforms` during a Gradle build. They remove old transform cache directories and a known-bad entry.

Notes
- These scripts remove cache directories. They are safe to run but will force Gradle to re-download and re-transform dependencies on the next build.
