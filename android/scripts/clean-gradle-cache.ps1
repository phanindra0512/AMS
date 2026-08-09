param(
  [string]$CachePath = "$env:USERPROFILE\.gradle\caches\8.13\transforms",
  [int]$DaysOld = 7
)

if (-not (Test-Path $CachePath)) {
  Write-Output "Cache path not found: $CachePath"
  exit 0
}

$now = Get-Date
$threshold = $now.AddDays(-$DaysOld)

$removed = @()
Get-ChildItem -Path $CachePath -Directory | Where-Object {
  ($_.LastWriteTime -lt $threshold) -or ($_.Name -match 'd21e17928bc480429d0a0c2ed29766e1')
} | ForEach-Object {
  try {
    Remove-Item -LiteralPath $_.FullName -Recurse -Force -ErrorAction Stop
    $removed += $_.FullName
  } catch {
    Write-Warning "Failed to remove $($_.FullName): $_"
  }
}

if ($removed.Count -eq 0) {
  Write-Output "No transform cache directories removed."
} else {
  Write-Output "Removed transform cache directories:"
  $removed | ForEach-Object { Write-Output " - $_" }
}
