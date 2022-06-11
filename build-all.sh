for target in client nginx server worker; do
  docker buildx build -t dawiddrzew/$target --push $target
done