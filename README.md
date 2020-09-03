# wolox-tt

# Currently deployed in:
## [https://wlx-tt.azurewebsites.net](https://wlx-tt.azurewebsites.net)

<hr />

### Content

1. [Scope completed](#scope-completed)
2. [Prerequisites](#prerequisites)
3. [Notes](#notes)
4. [Architecture](#architecture)
5. [How to run locally](#how-to-run-locally)
6. [Switch between mock services and real services](#switch-between-mock-services-and-real-services)
7. [Responsive support](#response-support)
8. [Criteria acceptance](#criteria-acceptance)
9. [Optional criteria acceptance](#criteria-acceptance)

## Scope completed
The following scope completed values are based on a simple average formula using the criteria acceptance items.

### **Criteria acceptance**
Total criteria acceptance items: **27** <br />
Total criteria acceptance items completed so far: **24** <br/>
Criteria acceptance completed so far: **88%**

### **Optional criteria acceptance**
Total criteria acceptance items: **8** <br />
Total criteria acceptance items completed so far: **6** <br/>
Criteria acceptance completed so far: **75%**

## Prerequisites

1. [Git](https://git-scm.com/)
2. [Node](https://nodejs.org/en/)
3. [VS Code](https://code.visualstudio.com/)

## Notes
### **Your login endpoint works with any data sent but if you want to login with service mocker enabled must use the following credentials:**

<br />

| Email               | Password    |
|-                    |-            |
| admin@wolox.com.ar  | 123456      |

<br />

### **I didn't see necessary implement all the needed fonts through the files you sent me within the assets because I already had a helper in the core to load custom fonts from custom sources.**

<br />

So please check the file `index.js` located in `src/core` and the `material-ui.js` located in `src/styles` to review the full implementation:

```javascript
// core/index.js
WebFontLoader.load({
    google: {
        families: [
            'Fira Sans',
            'Material Icons',
            'Montserrat',
            'Roboto:300,400,500,700'
        ]
    },
    custom: {
        families: ['FontAwesome'],
        urls: ['https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css']
    }
});

// styles/material-ui.js
export const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '"Montserrat"',
            '"Fira Sans"',
            'sans-serif'
        ].join(',')
    }
});
```

<br />

## Architecture

| Folder        | Description  	|
|---	        |---	|
| .vscode  	    | Visual studio code workspace settings.  	|
| src/assets  	| Web app assets, such as images, fonts, css stylesheets, icons, etc.   	|
| src/common  	| Common components and controls that could be being used anywhere in the application or in the project itself.  	|
| src/config  	| Services routes, application internal routes, environments settings, unit test config, etc.   	|
| src/core  	| Main startup of the application, compatibility, mock services, routes and url mapping.  	|
| src/pages  	| Main pages of the application, such as: login page, settings page, home page, etc.  	|
| src/resources  	| Language support text files.   	|
| src/redux  	| Redux store, action creators, reducers, services and everything related with the flow data of the application.  	|
| src/styles  	| Main styles, css stylesheets files, custom theme, color palette, etc.  	|
| src/test  	| Unit test coverage of the components, redux and util functions etc.  	|

<br />

## How to run locally

Once you already clone this repo just go the root folder and run:

```bash
# Install needed packages
> npm install
# Run local server
> npm run start
# Happy hacking!
```

## Switch between mock services and real services

Open the `globals.json` file located in `src/config/settings` and toggle the property `isEnabled` in `serviceMocker` object:

```json
"serviceMocker": {
    "delayResponse": 300,
    "isEnabled": true,
    "loginEmail": "admin@wolox.com.ar",
    "loginPassword": "MTIzNDU2",
    "passwordRecoveryCode": "MTIzNDU2"
}
```

## Responsive and support

| Screen / Component       | Supported          |
|-                         |:-:                 |
| Landing page             | :x:                |
| Login page               | :white_check_mark: |
| Home page                | :white_check_mark: |
| Settings page            | :white_check_mark: |
| Ctrl top bar             | :white_check_mark: |

<br />

## Criteria acceptance
### General
- [ ] Don't use libraries such as Bootstrap or related
- [x] Use flexbox as main tool to define layout
- [x] Make screens responsive up to 300px
- [x] Don't use html tables
- [x] Use ES6+, Babel and any other plugins
- [x] Buttons must have hover effects
- [ ] Use at least one animation
- [x] Configure linter
### Landing
- [x] Respect the sent design
- [x] When a top menu item is clicked it must redirect to the related section.
- [x] When the button "Follow us" is clicked it must redirect to the Wolox twitter
- [x] The login button must redirect to the login page
- [x] The "Learn button" must redirect to Wolox page
### Login
- [x] The login must have and email and password inputs, plus a checkbox to ask the user if want to keep the session alive
- [x] The email and password inputs must have a valid format before send the request
- [x] In case of selecting "Keep session alive" checkbox the user must be saved in localstorage and the next time user connects to the web app must be redirect to the tech collection page. The user must not be able to go to the login page and must be  redirect to the tech collection page. In the landing page the login button must be hidden.
- [x] In case of not selecting "Keep session alive" checkbox, the user won't be remembered, once the page is refreshed must be redirect to the login page.
### List
- [x] List all items returned by the service with all its data
- [x] Allow to filter items by any criteria on them
- [x] Allow to sort items by name, either asc or desc
- [x] Don't use pagination
- [x] Show count of all items and count of filtered items
### React
- [x] Implement a routing solution to flag routes with permissions
- [x] Use a state management  such as redux, context, recoil, etc
- [x] Implement component and data flow test with jest
- [ ] Implement lazy loading with React.Lazy and React.Suspense
- [x] Use react hooks


## Optional criteria acceptance
### General
- [x] Use SCSS and/or SCSS modules
- [x] Use CSS Grid
- [x] Implement component and data flow test with jest
- [ ] Configure webpack
- [x] Make the web "accessible”
### React
- [x] Use i18n to handle language texts through the web app and add a button to switch between languages
- [ ] Implement error boundary
- [x] Make deploy of the web app to a related production environment
