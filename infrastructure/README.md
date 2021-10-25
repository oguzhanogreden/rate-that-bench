# Development

## Run backend locally

```
git checkout feature-branch
cd ./backend
terraform init
terraform apply -var "branch=$(git rev-parse --abbrev-ref HEAD)" -auto-approve
```

# Release

```
# Provision a DigitalOcean droplet
terraform apply -var "do_token=${DO_PAT}" -var "pvt_key=${HOME}/.ssh/digitalocean"
```