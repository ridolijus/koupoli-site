#!/usr/bin/env bash
set -euo pipefail

repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
asset_dir="$repo_root/site-assets/assets"
mkdir -p "$asset_dir"

while IFS='|' read -r filename url; do
  [ -z "$filename" ] && continue
  printf 'Downloading %s\n' "$filename"
  curl --fail --location --retry 3 --retry-all-errors --connect-timeout 20 --max-time 180 \
    --output "$asset_dir/$filename" "$url"
done <<'ASSETS'
hero-glow.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/656060f33885bcdd76d46cb2_blurred.png
karlo-profile.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/6560bf5964c0b2220d969211_Untitled_design__59_-removebg-preview.png
slavonski-brod-tvrdava.jpg|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/6565b4cc51b60aef24376d6e_tvrdava.jpg
ai-productivity-article.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6855b9055b50b3994e4b82a5_ChatGPT%20Image%20Jun%2020%2C%202025%2C%2009_39_31%20PM.png
ai-productivity-thumbnail.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6855b96bf5a59778b76374ed_the_ilusion_of_AI_productivity_thumbnail.png
soldered-logo.svg|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b813f652c6c7a82afa4738_soldered-logo-new.svg
gembet-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b814fcca7b6d5e2d22da33_gembet_logo_wide.png
top-betting-sites-logo.webp|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b8156a2c1b7928944188f8_Logo-White-Lockup.webp
ultralytics-logo.svg|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b8161e66943b9892765d90_ultralytics_logo.svg
alfa-gradnja-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81a53960c34a8b1ab3996_alfa_gradnja_logo.png
parilica-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81a880fc0f9f66d8f2d62_parilica_logo.png
cad-global-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81ae1adcbf0cc7431fc1f_cad_global_logo.png
thorns-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46bed/68b81aeec2304902beb76c0c_thorns_logo.png
progecad-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564ccb7a79ca25e8de1ef12_progecad_logo-removebg-preview.png
cad-global-project-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564ccf7c663f8c47bcfd9ce_CADglobal_transp_web-removebg-preview.png
parilica-project-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564cd7acfd642997c19acd7_logo.png
alfa-gradnja-project-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564cdcc72e05235107a7762_alfa_logo.png
cad4africa-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564d05011574ce71d79c204_logo_cad4africa-1.png
thorns-project-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6564d0d464777b81ed4eb999_Thorns-logo-2023.png
maxtreme-sports-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/65ca4aa7d96b32bcf81d38d5_Untitled%20design%20(62).png
gempartner-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/66164f6be41cdc64e7ead39d_Logo.png
top-betting-sites-project-logo.webp|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/6852d40357981a3a0d6cd518_topbettingsites_logo.webp
ultralytics-project-logo.svg|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68593bfc25b57b3a3c489fe7_680a070c3b99253410dd3e62_Ultralytics_full_blue.svg
gembet-project-logo.png|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68b828c29187e5ee9f0a6a3c_gembet_logo_wide.png
soldered-project-logo.svg|https://cdn.prod.website-files.com/656060f33885bcdd76d46c6a/68b82944992ee2db68f14ba2_soldered-logo-new.svg
ASSETS

printf 'koupoli.com\n' > "$repo_root/site-assets/CNAME"
printf '\nDownloaded assets:\n'
find "$asset_dir" -maxdepth 1 -type f -printf '%f\t%s bytes\n' | sort
printf '\nTotal size: '
du -sh "$asset_dir"
