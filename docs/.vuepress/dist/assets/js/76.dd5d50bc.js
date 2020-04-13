(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{270:function(e,t,n){"use strict";n.r(t);var o=n(28),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"php-installation-et-configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php-installation-et-configuration"}},[e._v("#")]),e._v(" PHP - Installation et configuration")]),e._v(" "),n("h2",{attrs:{id:"ubuntu"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu"}},[e._v("#")]),e._v(" Ubuntu")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("php -m")]),e._v(" affiche les modules (extensions) installés.")]),e._v(" "),n("li",[e._v("Installer une version spécifique :\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://computingforgeeks.com/how-to-install-php-7-3-on-ubuntu-18-04-ubuntu-16-04-debian/",target:"_blank",rel:"noopener noreferrer"}},[e._v("PHP 7.3"),n("OutboundLink")],1),e._v(" "),n("ol",[n("li",[n("code",[e._v("sudo add-apt-repository ppa:ondrej/php")]),e._v(" ajoute le repository")]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get update")])]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get install php7.3")]),e._v(" installe php 7.3")])])])])]),e._v(" "),n("li",[e._v("Installer des extensions : "),n("code",[e._v("sudo apt-get install php-nomExtensionDésirée")]),e._v(" "),n("ul",[n("li",[e._v("xdebug :\n"),n("ol",[n("li",[n("code",[e._v("sudo apt-get install php-xdebug")]),e._v(" installe xdebug")]),e._v(" "),n("li",[e._v("Ajouter au "),n("code",[e._v("php.ini")]),e._v(" :"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[xdebug]\nzend_extension="/usr/lib/php/modules/xdebug.so"\nxdebug.remote_enable=on\nxdebug.profiler_enable=off\nxdebug.profiler_enable_trigger=off\nxdebug.remote_autostart=on\nxdebug.remote_connect_back=on\nxdebug.remote_host = localhost\n')])])])])])]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get install php-xml")]),e._v(" installe l'extension "),n("em",[e._v("xml")]),e._v(" nécessaire pour composer.")]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get install php-curl")]),e._v(" installe l'extension "),n("em",[e._v("curl")]),e._v(" utile pour composer.")]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get install php-mysql")]),e._v(" installe l'extension nécessaire pour mysql et mariadb.")]),e._v(" "),n("li",[n("code",[e._v("sudo apt-get install php-pgsql")]),e._v(" installe l'extension nécessaire pour postgresql.")])])])]),e._v(" "),n("h2",{attrs:{id:"configuration"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" Configuration")]),e._v(" "),n("ul",[n("li",[e._v("Configuration via le fichier "),n("code",[e._v("php.ini")]),e._v(" situé dans "),n("code",[e._v("/etc/php/numéro_version/apache2/")]),e._v(" et dans "),n("code",[e._v("/etc/php/numéro_version/cli/")]),e._v(".")]),e._v(" "),n("li",[e._v("Sélectionner une version\n"),n("ul",[n("li",[n("code",[e._v("sudo update-alternatives --set php /usr/bin/php7.3")]),e._v(" sélectionne la version PHP 7.3 pour la CLI")])])])]),e._v(" "),n("h2",{attrs:{id:"xdebug"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#xdebug"}},[e._v("#")]),e._v(" xDebug")]),e._v(" "),n("ol",[n("li",[n("code",[e._v("sudo apt-get install php-xdebug")]),e._v(" installe xdebug")]),e._v(" "),n("li",[e._v("Ajouter au "),n("code",[e._v("php.ini")]),e._v(" :"),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('[xdebug]\nzend_extension="/usr/lib/php/modules/xdebug.so"\nxdebug.remote_enable=on\nxdebug.profiler_enable=off\nxdebug.profiler_enable_trigger=off\nxdebug.remote_autostart=on\nxdebug.remote_connect_back=on\nxdebug.remote_host = localhost\n')])])])])])])}),[],!1,null,null,null);t.default=s.exports}}]);