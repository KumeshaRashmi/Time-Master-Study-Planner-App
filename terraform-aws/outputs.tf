output "ec2_public_ip" {
  value = aws_instance.mern_instance.public_ip
}
