resource "digitalocean_droplet" "monorepo" {
  image  = "debian-11-x64"
  name   = "monorepo"
  region = "ams3"
  size   = "s-1vcpu-1gb"
  #   private_networking = true // Deprecated, uncomment and plan to see warning
  ssh_keys = [
    data.digitalocean_ssh_key.terraform.id // TODO: What does `.id` do?
  ]
  connection {
    host        = self.ipv4_address
    user        = "root"
    type        = "ssh"
    private_key = file(var.pvt_key)
    timeout     = "2m"
  }
  // TODO: Add Debian environment variable for unattended installation:
  //       Because "-y" may not be satisfying all the time.
  // https://superuser.com/a/939651
  provisioner "remote-exec" {
    inline = [
      # "export PATH=$PATH:/user/bin",
      # Install Docker
      # https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-debian-10
      "sudo apt-get update",
      "sudo apt-get -y install apt-transport-https ca-certificates curl gnupg2 software-properties-common",
      "curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -",
      "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable\"",
      "sudo apt-get update",
      "apt-cache policy docker-ce",
      "sudo apt-get -y install docker-ce",
      # Install terraform
      "curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -",
      "sudo apt-add-repository \"deb [arch=$(dpkg --print-architecture)] https://apt.releases.hashicorp.com $(lsb_release -cs) main\"",
      "sudo apt-get update",
      "sudo apt-get -y install terraform"
    ]
  }
  // Copy over Terraform files
  // NOTE: This is not a good idea but will help me cut costs: I can run several 
  // Docker images in one Droplet instead of running several of them.
  provisioner "remote-exec" {
    inline = [
      "mkdir -p /src/terraform/backend",
    ]
  }
  provisioner "file" {
    source      = "./backend/"
    destination = "/src/terraform/backend"
  }
  provisioner "remote-exec" {
    inline = [
      "cd /src/terraform/backend",
      "terraform init",
      "terraform apply -auto-approve"
    ]
  }
}