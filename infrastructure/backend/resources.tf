variable "branch" {
  default = "latest"
}

resource "docker_image" "backend" {
  name         = "oguzhanogreden2/rate-that-bench:${var.branch}"
  keep_locally = true
}

resource "docker_container" "backend" {
  image = docker_image.backend.repo_digest
  name  = "backend"
  
  rm = true
  ports {
    internal = 3000
    external = 8000
  }
}