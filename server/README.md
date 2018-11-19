## BLOG API

Please register / Login before to get access token server

login, POST, return
    {
        token: <token>
    }

How to use :

```
$_ npm install
$_ npm start
```

Route in **blog api**

Route|Method|Description|Requirement
-----|------|-----------|-----------
`/articles`|POST|Add new articles|*token*, *title*, *content*, *CategoryId*
`/articles`|GET|Get all article |
`/articles/:ArticleId`|GET|Get one article |
`/articles/:ArticleId`|PUT|Update one article |*token*, *title*, *content*, *CategoryId*
`/articles/:ArticleId`|DELETE|Delete one article base *token*|*token*, *title*, *content*, *CategoryId*