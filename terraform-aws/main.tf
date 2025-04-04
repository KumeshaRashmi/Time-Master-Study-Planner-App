terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.41.0"  # Latest compatible with Free Tier
    }
  }
  required_version = ">= 1.5.0"  # Minimum stable version
}

provider "aws" {
  region = "eu-north-1"
}


data "aws_ami" "amazon_linux_2" {
  most_recent = true
  owners      = ["amazon"]
  
  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-*-x86_64-gp2"]
  }

  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

resource "aws_security_group" "mern_sg" {
  name        = "mern_security_group"
  description = "Allow inbound traffic for MERN stack"

  ingress {
    description = "SSH Access"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP Access"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Backend Service Access"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Frontend Service Access"
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "MongoDB Access"
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "Jenkins Service Access"
    from_port   = 8080
    to_port     = 8080
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    CostCenter = "FreeTier"
  }
}

resource "aws_instance" "mern_instance" {
  ami                    =data.aws_ami.amazon_linux_2.id
  instance_type          = "t3.micro"  # Free Tier eligible
  key_name               = "my-key-pair"
  vpc_security_group_ids = [aws_security_group.mern_sg.id]

  tags = {
    Name      = "MERN-Instance"
    ManagedBy = "Terraform"
  }

  # Explicitly set to meet Free Tier requirements
  root_block_device {
    volume_type = "gp2"
    volume_size = 8  # GB (Free Tier allows up to 30GB)
  }
}

output "instance_ip" {
  value = aws_instance.mern_instance.public_ip
}

output "instance_public_dns" {
  value = aws_instance.mern_instance.public_dns
  }
