#!/bin/bash
echo "Starting static export build..."
npm run build
echo "Build completed. Contents of out directory:"
ls -la out/
echo "Static export ready for deployment." 