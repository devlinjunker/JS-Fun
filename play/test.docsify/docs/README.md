# Practicing with Docsify 

Testing a docsify project, setting different configurations and getting ideas for how to structure

[Continue Learning](https://docsify.js.org/#/plugins)
  
  
  
## Options
Describing the different configuration options available and explored:

### Sidebar
 Auto generated from headers in file. Auto Generated headers can be customized with `maxLevel` option, defining how low of header number will be included in the sidebar.  
  Can be customized if `loadSidebar` option equals true in docsify configuration.  
  Customized sidebar defined in `_sidebar.md`. Sub-directories will share the `_sidebar.md` file if it exists as well.

#### Logo
  Can be set with `logo` option that points to a logo image file.

#### Project Title
  Project Title is set by the `name` property, this is displayed at the top of the Sidebar on each page. Can also set a link for the project name to link to with `nameLink` option.

### Navbar
  Navbar will appear if `loadNavbar` option is set. Can be defined in `_navbar.md` with sub tabs if indented.

### Cover Page
  A cover page will appear at the same time as your home page, at the top of the page. You can set if the cover page should be shown with `coverpage` option. The cover page is defined in the `_coverpage.md` file. 
 If you only want to show the cover page you can set the `onlyCover` option.

### 404 - Not Found Page
  Error No Found page can be customized by setting `notFoundPage` option to the location of a file defining the not found page.

### Github Repo Link
  Can add a Github Corner widget to the top right of the page, this can be set to link to the url defined in the `repo` option of the configuration.

### Last Updated Date
  Can be set in an markdown file with \{ docsify-updated \}, this format can be set with the `formatUpdated` option. 

**Examples:**  
 ```'{MM}/{DD} {HH}:{mm}'```

 ```
  function(time) {
    // ...

    return time;
  }
 ```


Last Updated {docsify-updated}
