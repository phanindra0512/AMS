#!/usr/bin/env bash
CACHE_PATH="${HOME}/.gradle/caches/8.13/transforms"
DAYS_OLD=7

if [ ! -d "$CACHE_PATH" ]; then
  echo "Cache path not found: $CACHE_PATH"
  exit 0
fi

find "$CACHE_PATH" -maxdepth 1 -type d -mtime +$DAYS_OLD -print0 | xargs -0 -r rm -rf --
# also remove a known bad entry name
BAD="d21e17928bc480429d0a0c2ed29766e1"
if [ -d "$CACHE_PATH/$BAD" ]; then
  rm -rf "$CACHE_PATH/$BAD"
fi

echo "Cleanup complete."
