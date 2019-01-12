<h1>Nodejs-Backend</h1>
<h3><u>Installation:</u></h3>

<ol type=1>
<li>Installiere Node.js</li>
<li>öffne die Console und Navigiere zum gewünschten Ordner
<li>fühle den Befehl <strong>"npm install"</strong> aus</li>
</ol>

<p>Mit <strong>"npm install"</strong> werden die benötigten Dependencies automatisch installiert, da diese in der package.json hinterlegt sind.</p>

<h3><u>Datenbank anpassen:</u></h3>
<p>in der Datei <b>"dbconnection.js"</b> sind die Informationen für die Verbindung mit einer Datenbank gespeichert, diese müssen noch an die gewünschte Datenbank angepasst werden</p>
<ul><b style=color:red>Beschreibung der Parameter:</b>
<li>host (Server der Datenbank)</li>
<li>user (Username der auf die Datenbank zugreift)</li>
<li>password (Das Passwort das zum Usernamen passt)</li>
<li>database (Datenbankname)</li>
</ul>

<h3><u>Ausführen:</u></h3>
<p>Zum Starten des Servers haben wir 2 Möglichkeiten:</p>
<dl>
<dt><b>npm start</b></dt>
<dd>Startet den Server, bei Änderungen im Code muss der Server manuell neu gestartet werden.</dd>
<dt><b>nodemon</b></dt>
<dd>Startet den Server, bei Änderungen im Code wird der Server automatisch neugestartet.<br><br>
damit dieser Befehl erkannt werden kann, muss <b>nodemon</b> installiert werden mit <b>npm install nodemon -g</b></dd>
</dl>


