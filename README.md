# Actions WEBDAV with curl

> Reading Files/Folders
```bash
$ curl --digest --user 'test:test12345' 'http://localhost/'
````
```Html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
<head>
    <title>Index of /</title>
</head>
<body>
<h1>Index of /</h1>
<ul>
    <li><a href="Documents/"> Documents/</a></li>
    <li><a href="new_folder/"> new_folder/</a></li>
    <li><a href="sdfsdf/"> sdfsdf/</a></li>
    <li><a href="sdfsdf2/"> sdfsdf2/</a></li>
</ul>
</body>
</html>
```
> Creating new Folder
```bash
$ curl --digest --user 'test:test12345' -X MKCOL 'http://localhost/new_folder'
````
```Html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
    <head>
        <title>201 Created</title>
    </head>
    <body>
        <h1>Created</h1>
        <p>Collection /Documents has been created.</p>
    </body>
</html>

