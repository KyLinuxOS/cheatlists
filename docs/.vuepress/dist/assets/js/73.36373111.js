(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{275:function(e,t,a){"use strict";a.r(t);var n=a(28),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"xdebug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xdebug"}},[e._v("#")]),e._v(" xDebug")]),e._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("sudo apt-get install php-xdebug")]),e._v(" installe xdebug sur debian et dérivés.")]),e._v(" "),a("li",[a("code",[e._v("pecl install xdebug")]),e._v(" installe xdebug via pecl.")])]),e._v(" "),a("h2",{attrs:{id:"php-ini"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-ini"}},[e._v("#")]),e._v(" php.ini")]),e._v(" "),a("p",[e._v("Ajouter les lignes suivantes au fichier "),a("code",[e._v("php.ini")]),e._v(" de la version de php utilisée :")]),e._v(" "),a("ul",[a("li",[e._v("Linux"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[xdebug]\nzend_extension="/usr/lib/php/modules/xdebug.so" # Optionel\nxdebug.remote_enable=on\nxdebug.profiler_enable=off\nxdebug.profiler_enable_trigger=off\nxdebug.remote_autostart=on\nxdebug.remote_connect_back=on\nxdebug.remote_host = localhost\n')])])])]),e._v(" "),a("li",[e._v("Windows"),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[xdebug]\nzend_extension="c:/wamp64/bin/php/php7.3.5/zend_ext/php_xdebug-2.7.2-7.3-vc15-x86_64.dll"\nxdebug.remote_enable = On\nxdebug.profiler_enable = On\nxdebug.profiler_enable_trigger = On\nxdebug.profiler_output_name = cachegrind.out.%t.%p\nxdebug.profiler_output_dir ="c:/wamp64/tmp"\nxdebug.show_local_vars = Off\nxdebug.remote_autostart = on\nxdebug.remote_connect_back = on\n')])])])])]),e._v(" "),a("h2",{attrs:{id:"utilisation-dans-postman"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#utilisation-dans-postman"}},[e._v("#")]),e._v(" Utilisation dans Postman")]),e._v(" "),a("ul",[a("li",[e._v("Ajouter "),a("code",[e._v("XDEBUG_SESSION_START=PHPSTORM")]),e._v(" comme paramètre de l'URL de la requête : "),a("code",[e._v("http://localhost:8000/monUri?XDEBUG_SESSION_START=PHPSTORM")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);