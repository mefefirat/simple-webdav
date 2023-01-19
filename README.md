# Actions WEBDAV with curl

### Reading Files/Folders
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
    <li><a href="Advertisements/"> Advertisements/</a></li>
    <li><a href="Archive/"> Archive/</a></li>
    <li><a href="Blog Posts/"> Blog Posts/</a></li>
    <li><a href="Customer Emails/"> Customer Emails/</a></li>
    <li><a href="Landing Pages/"> Landing Pages/</a></li>
</ul>
</body>
</html>
```
### Creating new Folder
```bash
$ curl --digest --user 'test:test12345' -X MKCOL 'http://localhost/Documents'
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
```
### Deleting Files/Folders
```bash
$ curl --digest --user 'test:test12345' -X DELETE 'http://localhost/Advertisements'
````
```Html
HTTP response status codes: 204
```

### Uploading File
```bash
$ curl --digest --user 'test:test12345' -T '/path/test.pdf' 'http://localhost/Documents/test.pdf'
````
```Html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head>
    <title>201 Created</title>
</head>
<body>
    <h1>Created</h1>
    <p>Resource /Documents/test.pdf has been created.</p>
</body>
</html>
```

### Renaming File
```bash
$ curl --digest --user 'test:test12345' MOVE --header 'Destination:http://localhost/Documents/old.pdf' 'http://localhost/Documents/new.pdf'
````
```Html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head>
    <title>201 Created</title>
</head>
<body>
    <h1>Created</h1>
    <p>Destination /Documents/test-new.pdf has been created.</p>
</body>

</html>
```

### Copy File/Folder
```bash
$ curl --digest --user 'test:test12345' COPY --header 'Destination:http://localhost/Documents/file-copy.pdf' 'http://localhost/Documents/file.pdf'
````
```Html
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html>
<head>
    <title>201 Created</title>
</head>
<body>
    <h1>Created</h1>
    <p>Destination /Documents/file-copy.pdf has been created.</p>
</body>

</html>
```

### List Files in a Folder (PROPFIND)
```bash
$ curl --digest --user 'test:test12345' -X PROPFIND --header 'Depth:1' 'http://localhost/'
````
```Xml
<?xml version="1.0" encoding="utf-8"?>
<D:multistatus xmlns:D="DAV:" xmlns:ns0="DAV:">
    <D:response>
        <D:href>/</D:href>
        <D:propstat>
            <D:prop>
                <D:getcontenttype>httpd/unix-directory</D:getcontenttype>
            </D:prop>
            <D:status>HTTP/1.1 200 OK</D:status>
        </D:propstat>
    </D:response>
    <D:response>
        <D:href>/Customer%20Emails/</D:href>
        <D:propstat>
            <D:prop>
                <D:getcontenttype>httpd/unix-directory</D:getcontenttype>
            </D:prop>
            <D:status>HTTP/1.1 200 OK</D:status>
        </D:propstat>
    </D:response>
</D:multistatus>
```
