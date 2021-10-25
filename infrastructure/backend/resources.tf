resource "docker_image" "backend" {
  name         = "oguzhanogreden2/rate-that-bench:infrastructure-digitalocean"
  keep_locally = false
}

resource "docker_container" "backend" {
  image = docker_image.backend.repo_digest
  name  = "backend"
  ports {
    internal = 3000
    external = 8000
  }
}