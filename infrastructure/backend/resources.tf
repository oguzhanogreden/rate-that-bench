variable "branch" {
  default = "latest"
}

variable "postgress_password" {
}

# API
resource "docker_image" "backend" {
  name         = "oguzhanogreden2/rate-that-bench:${var.branch}"
  keep_locally = true
}

resource "docker_container" "backend" {
  image = docker_image.backend.latest
  name  = "backend"
  rm = true
  ports {
    internal = 3000
    external = 8000
  }
}

# Database
resource "docker_image" "postgres" {
  name = "postgres:14.0-bullseye"
  keep_locally = true
}

resource "docker_container" "postgres" {
  image = docker_image.postgres.latest
  name = "postgres"
  rm = true 
  env = [ 
    "POSTGRES_PASSWORD=${var.postgress_password}"
   ]
  ports {
    internal = 5432
    external = 5432
  }
}