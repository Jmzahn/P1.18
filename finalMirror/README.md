## Smart Mirror using p5.js


## google cal

https://github.com/toniov/gcal-cli

```
gcal list -f $(date +%Y-%m-%d) -t $(date +%Y-%m-%d -d "14 day")|sed 1d|sed 's/-/./g'
```

## [p5.js](https://github.com/processing/p5.js)


Apache config

```
<VirtualHost *:80>
	ServerName example.org
	ServerAdmin webmaster@example.org
	DocumentRoot /var/www/html/
 
              Alias "/index.html" "/var/www/html/index.html"
              Alias "/index" "/var/www/html/index.html"
        ScriptAlias "/scpript" "/usr/lib/cgi-bin/script.cgi"
        ScriptAlias "/api/cal" "/usr/lib/cgi-bin/cal.cgi"
        

        RedirectMatch 404 .*\.htsh
        <Directory /var/www/html/>
            AllowOverride none
            Options -Indexes
            Require all granted
        </Directory>
	ErrorLog /var/log/apache2/error.log
	CustomLog /var/log/apache2/access.log combined
	Include conf-available/serve-cgi-bin.conf
</VirtualHost>
```

# google calendar 
su www-data -s /bin/bash
gcalcli --noauth_local_webserver list
