# WEBDAV with curl

### Creating new foder on Webdav Server
```bash
   $ curl --digest --user 'test:test12345' -X MKCOL 'http://localhost/new_folder'
````
```Html
 <code>
        <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
            <html><head>
            <title>201 Created</title>
            </head><body>
            <h1>Created</h1>
            <p>Collection /new_folder has been created.</p>
            </body></html>
    </code>
