# -*- mode: ruby -*-
# vi: set ft=ruby :

$script = <<SCRIPT
add-apt-repository ppa:duggan/bats --yes
apt-get update; apt-get install -y apache2 bats shellcheck curl
tee /etc/apache2/sites-enabled/000-default.conf >/dev/null <<EOF
<VirtualHost *:80>
	ServerName example.org
	ServerAdmin webmaster@example.org
	DocumentRoot /var/www/html/
 
              Alias "/index.html" "/var/www/html/index.html"
              Alias "/index" "/var/www/html/index.html"
        ScriptAlias "/scpript" "/usr/lib/cgi-bin/script.cgi"
        ScriptAlias "/api/cal" "/usr/lib/cgi-bin/cal.cgi"

        <Directory /var/www/html/>
          AllowOverride none
          Options -Indexes
          Require all granted
        </Directory>

	ErrorLog /var/log/apache2/error.log
	CustomLog /var/log/apache2/access.log combined

	Include conf-available/serve-cgi-bin.conf
</VirtualHost>
EOF
sed -i 's/www-data/vagrant/g' /etc/apache2/envvars
a2enmod cgid
service apache2 restart
SCRIPT

Vagrant.configure("2") do |config|
config.vm.define "smart" do |smart|
  smart.vm.hostname = "smart"
  smart.vm.box = "ubuntu/bionic64"
  smart.vm.provision "shell", inline: $script
  smart.vm.network "forwarded_port", guest: 80, host: 7777
  smart.vm.synced_folder ".", "/var/www/html"
  end
config.vm.provider "virtualbox" do |v|
  v.memory = 1024
  v.cpus = 2
  end
end
