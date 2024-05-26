#!/bin/bash

route_name="$1"
path="$2"

# Check if both folder name and path are provided
if [ -z "$route_name" ] || [ -z "$path" ]; then
    echo "Usage: $0 <route name> <path>"
    exit 1
fi

# Create the folder in path
mkdir -p "$path/$route_name"

# Create Loading.tsx in path
template_index=$(cat ./template_page.tsx)
echo "$template_index" > "$path/$route_name/page.tsx"

# Create Loading.tsx in path
template_index=$(cat ./template_loading.tsx)
echo "$template_index" > "$path/$route_name/loading.tsx"

# Create Error.tsx with template in path
template_content=$(cat ./template_error.tsx)
echo "$template_content" > "$path/$route_name/error.tsx"