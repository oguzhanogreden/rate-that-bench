resource "docker_image" "backend" {
  name         = "oguzhanogreden2/rate-that-bench:b900d001a0e06ca2b658830f53a841e5cb55ae69"
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