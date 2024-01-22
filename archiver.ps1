$name = Split-Path -Path (Get-Location) -Leaf
Compress-Archive -Force -Path "." -CompressionLevel "Fastest" -DestinationPath "..\..\archive\$name.zip"