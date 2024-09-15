# web-development-notes
Notes for Web Development using Angular 18

# Angular notes
# angular-notes
Notes for Angular

# Pre-requisites
- JS Fundamentals
- Typescript

# What is Angular
- Cross platform, Flexible development, production ready fast and performant.
- UI framework created by google
- A component based framework for building scalable web applications.
- Collection of well integrated libraries that cover wide variety of features.
- Helps you build, develop, test, and update your code.
- Uses MVVC architecture.
- Heirarchial dependence implementated using an infusion system declaration, constructors function, and providers.

## AngularJS is the version 1
## Angular now is the version 2 and the latest version 

# Angular Component
- With annotation of @Component
- Set of HTML, CSS, and JavaScript separating each concern.
- Can have only one module.
- Is consist of Views, Template, Derivatives, and Components

## Angular Component Structure
<component-name>.component.html (Views)
- Contains the HTML elements

<component-name>.component.spec.ts or js (Test Service)
- Contains the unit test of your component

<component-name>.component.ts or js (Service)
- Contains the js or ts code for your component logic

<component-name>.component.css (Metadata)
- Contains the css styles

<component-name>.routes.ts (Routing)
- Contains the component routes/ navigation to other components

## Benefits of Components
- Separates html, css, and javascript files but works together
- Seamless in browser navigation
- Web component based is balanced

## How to use Component
- the `selector` attribute of your component defines how to use it. It can be used as custom HTML element by default and class attribute value instead just add . in selector.

## Create a component
```
ng g c <component-name>
```

# Template
- Is a HTML Snippet(1 - 3 lines of code) that tells angular how render the Component in Angular application.
- Is immediately associated with component and defines the component's template.
- Can only have 1 component

# Views
- Is a HTML Block (4-infinity lines of code) that tells angular how to render Component.
- Is immediately associated with component and defines the component's view.
- Can be used in multiple Component

## Difference of View and Template
- Basically View is your main UI for your component
- Template is the HTML Reusable Snippets that you use multiples times in a multiple views.

# Angular Binding
- () used for event binding
- [] used for property binding
- [()] used for two way data binding
- {{}} used for interpolation from ts/ js to html file

# Data Binding
## Interpolation {{}}
- After you pass the data from ts to html angular will read the variable and display it as a string
- Mainly use for directly displaying value directly in html element text.
```
<p>Hello There, {{currentUser}}</p>
```
## Property Binding []
- Angular will read it directly from ts file preserving its data type
- Mainly used for changing the html element property value.
- 
```
[htmlProperty] = "value_from_ts"

<img [src] = "variableName" />
```

- When you want to pass a data from parent to child. Declare the @Input in child component and follow this template.
```
<!-- Parent component template -->
<child-component [property-from-child]="propertyFromParent"></child-component>
```


## Event Binding ()
- Used to listen from anything you do in website
```
<button (event) = "functionNameFromTsFile()"> </button>
```
## 2 Way Data Binding [{}]
- import FormsModule
- Used to have a websocket like featured where html(view) and ts(model) file always are synchronize.
- Combination of all interpolation, property binding, and event binding.
```
<input type="text" [(ngModel)]="name">
<p>Hello, {{name}}!</p>
```

# Angular Directives
## Structural Directives
Structural directives alter the layout of the DOM by adding, changing, or removing elements.
Examples include:
- `*ngFor`: Iterates over a collection and instantiates a template once for each item.
- `*ngIf`: Conditionally includes or excludes a section of HTML based on an expression.
- `*ngSwitch`:
- `<ng-emplate> </ng-template>`:

###### Note: An html element can only have one and only one directive.

## Attribute Directives
Attribute directives change the appearance or behavior of an element, component, or another directive.
Examples include:
- `ngClass`: Adds or removes CSS classes dynamically based on certain conditions.
- `ngStyle`: Sets inline styles dynamically based on expressions.
- `ngModel`: Used for two wat data binding.
- `formControl`: Used to link input html element and ts variable.
- `formGroup`: Used to group form controls.
   - `formControlName=<form-control-name-from-ts-file>`: Same concept of form control but with different syntax.

## Component Directives
- Component directives are used to create reusable components with their own view and behavior.
They encapsulate a part of the UI and its logic. @Component

# Angular Dependency Injection
- Just like spring boot dependecy injection.

# Angular Services
- Can be anythind such as values, functions, or feature that are required by angular application.
- It is globally available by default.
## When to use services
- For businesss logic.
- Validations
- Distributing data between different components.
- To communicate with external services.
- Basically all the stuff for your application to meet business requirements.

## How to create a service 
```
ng g s <service-name>
```

# Angular Routing and Navigation
- Routing is just directing users to appropriate web page.
- Navigation is just users can do backward and forward history of web page.
- using routerLink=`"<component-name>"`

## Routing and Navigation Life Cycle
1. URL Redirects applied.
2. Match URL to Router State.
3. Process guards and resolvers.
4. Activate view using router-outlet.
5. Navigate, update browser location.

## How to use Angular Routing
[Angular Routing Sample](https://medium.com/@biplavmazumdar5/angular-17-routing-cc4a20cc4d8c)
1. Create the components
2. Go to app.routes.ts
```
export const routes: Routes = [
    {
        path: "myComponentPath", // This is what you will specify in routerLink
        title: "", // Optional add information about your routing
        component: MycomponentComponent // The component where you want to go
    },
    {
        path: "myOtherComponentPath", // This is what you will specify in routerLink
        title: "", // Optional add information about your routing
        component: MyothercomponentComponent // The component where you want to go
    }
];
```
3. Go to app.component.ts and add these imports to @Component
```
imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
```
4. Go to html file and add routerLink
```
<button routerLink="/myComponentPath">Go to other component</button>
<button routerLink="/myOtherComponentPath">Go to my other component</button>
```
5. DONT FORGET TO ADD THE <router-outlet></router-outlet> at the end of html file or else it will not work!!.
```
<router-outlet></router-outlet>
```

## Router Events
- NavigationStart
- RouterConfigLoadEnd
- NavigationEnd
- RouterConfigLoadStart
- NavigationError
- NavigationCancel

# Angular Forms
- Allow to manage data by sending inputs to the serv- er for processing


## Building Blocks
### Form Control
- Used to handle user input also validate and update.
### Form Group 
- Used to group form controls
### Control Value Accessor
- Used to create a link between form control instance and html element

## 2 Types of Forms
### Reactive Forms
#### Control Value Management
- Angular gives access to form control state and the value and can be change in template and component class.
- To gain access you have 2 choices either use Observable or in component class using the ``subscribe()`` method
### Templated Forms
![330440403-40c762c0-cdc8-4fae-b879-384445a0c76a](https://github.com/user-attachments/assets/354750aa-4797-461b-a526-931a25dd985e)

# CSS notes
## Positioning
- absolute: Will be removed from the DOM. The other html elements treat it as it doesn't exists. Bahala ka san mo sya ilalagay.

- relative: Will take the value from the parent element and up in the heirarchy. Kung anong value ni parent ganun nadin sya.

- fixed: Will be removes from the DOM but it will scroll along with the page.
Susunod sa sayo kahit saan.

- static: default. Default!

- sticky: Just like fixed but it will only work with top attribute specified. It will start scrolling along with the page with the given top. Susunod sayo pag tinawag mona yung top attribute yon.

# Media query
- min-width: Will be applied when screen size is above to the specified unit.

- max-width: Will be applied when screen size is below to the specified unit.

# Float
- Will place the element either on top, bottom, left, or right inside its parent element. It will be removed from the DOM of its parent element only but the other elements will respect its position. unlike to abosulute positioning. So sa madaling salita kunware nasa kwarto ka kahit san ka pumwesto sa kwarto ok lang lahat ng gamit don magaadjust kung san mo gusto. So basically yung float property bahala ka sa buhay mo magpalutang lutang sa loob ng kwarto parang ganon.
![images (14)](https://github.com/user-attachments/assets/6428fa96-2b84-4f05-8021-14f01adfea7b)

# Units
- em: Will be relative to parent or the element itself. Generally used for margin, padding, and widths.
- rem: Will be relative to the browser font size. Generally used for sizes.
- %: Will be relative to the parent element.
- vh: Will be relative to the screen size. yung patayo ba.
- wv: Will relative to the screen size also. yung pahiga ba.
- px: The myth the legend px alam monato dapat aba.

# Isolation
- Will make an element to be isolated from other elements. Meaning that an element declared as isolated will block all the styles coming from other element styles. The most useful this property is when creating a visual effect on an targeted element. In tagalog iisolate nya sarili nya lahat mg makakaapekto sakanya eh dinya papansinin para maging unique sya (visual effect).
![images (17)](https://github.com/user-attachments/assets/7d631b28-6ca5-46e2-9a82-42fead50a8ba)

# Display
- flex: The flex system.
- none: none
- block: Will make child elements display each row. Its like every element will take the 100% percent of width.
- inline: Will literally put the element inside the where it is declared and will not respect the size of parent. width and height doesnt apply here.
- inline-block: Will put the element inside where it is declared with respect to the parent size.
- grid: The grid system.

# Text
- font-family: Calibri, etc...
- font-weight: bold, etc...
- font-size: size
- font-style: italic, etc...
- text-align: center, right, left, etc...
- text-decoration: underline, etc...
- line-height: Control space between each line.
- letter-spacing: Control space between individual character.
- text-transform: uppercase, etc...
- text-overflow: clip or ellipsis, etc...

# Variables
Declare it inside the :root. All variables goes inside the :root.
```
:root {
   --variable-name: value;
   // Other variables
}
```
To use it
```
element {
   color: var(--variable-name);
}
```

# Box model
![images (2)](https://github.com/user-attachments/assets/21ad18ce-3fb1-4b08-b86e-c9c1e533daff)

# Inheritance
## Properties that are auto-inherited.
- color
- font-size
- font-family
- line-height
- text-align
Meaning that all properties related to the text and fonts are inherited while properties related to box model, layout, and positioning are not.

## Properties that are not auto-inherited.
- width
- height
- margin
- padding
- border
- background-color
Meaning that some of the parent propertues are not applied automatically in its child.

# Pseudo classes and elements
## Classes
- :hover
- :active
- :focus
- :visited
- :nth-child(n)
- :nth-of-type(n)
- :first-child
- :last-child
- :not(selector)
- :disabled
- etc...

## Elements
- ::before
- ::after
- ::first-letter
- ::first-line
- ::selection
- etc...

# Break after and before
- Utilities for controlling how a column or page should break an element.

# Box decoration
- Use to control a element how it is going to be rendered as if it is a one continuous fragmnet or block.

- Used to control whether properties like background, border, border-image, box-shadow, clip-path, margin, and padding should be rendered as if the element were one continuous fragment, or distinct blocks.

# Object fit
![images (12)](https://github.com/user-attachments/assets/d7d4cf33-eac5-4646-9bb9-9e6d242e3457)

# Object position
![IMG_20240906_222632](https://github.com/user-attachments/assets/2aca3541-75a1-4414-b4fd-42287ee36904)

# Overflow
- Sometimes the content doesnt fit inside its parent container and the content overflow. You can control that with this property.
![1681726386478-css overflow property example](https://github.com/user-attachments/assets/6f57db8d-4ee5-4026-a21e-5c41afbab9c2)

# Overscroll
- Controls how the scroll behaves when scrollable boundary reached. Set this always to contain. Ang default nito eh after mareach yung end magsscroll na yung page. Pero pag contain pagka nareach nya yung end ng scrollable content eh ok na di mahsscroll yung page.
![overscroll-behavior-only-affects-scroll-containers@2x](https://github.com/user-attachments/assets/29b8828f-7899-4a57-974f-cf72d417f12f)


# Flex
Keep in mind that when you specify an element to be display:flex it will create a cross where the main axis is based on your flex-direction since flex direction defaults to row the main axis by default is vertical. when you set the flex direction to be column the main axis will be horizontal.

- flex-direction: row; // The default is row and can be change with column.
- justify-content: Will control the elements in the main-axis.
- align-items: will control the elements in the cross axis.
- flex-wrap: Will control how the elements in the main axis should behave. wrap or no-wrap.
- flex-grow: Can be used only in child element. It defines how a certain element takes ups a space.
![images (4)](https://github.com/user-attachments/assets/60b90355-90a4-46e4-92f3-fa54983f2d65)

- flex-shrink: Can be used only in child element. It defines how a certain element start to shink before other elements.

- flex-basis: Can be used only in child element. It used to redefine the size of child element.

- align-self: Can be use only in child element if want you a certain element to be special in its position.
- gap: add gap to every element. use this instead of margin or padding.
![images (2)](https://github.com/user-attachments/assets/9d040ad1-c834-4515-b55d-1e6b912036d5)

# Tricks
- Make your element below to other element para di nya matakpan yung ibamg element nasa likod sya ba.
```
z-index: -1
```
- Removes the annoying scrollbar in your dom.
```css
overflow: hidden
```

- Always apply this to all your css files. Just include it dont ask why. Trust me it will helps.
```
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
    margin: 0;
    padding: 0;
    overflow: hidden;
}
```

## Background Attachment
- Controls how thr bs behaves when scrolled.
- Fixed
- Scroll
![Uploading image.png…]()

## Background clip
- Set what should the background occupy in box model
![image](https://github.com/user-attachments/assets/4645903e-b993-4084-9095-32abd50b18ad)

###### Now that you know the fundamentals of CSS we now talk about proper front end development. This topic is not that mandatatory to learn. Build a css project first explore it yourself.

# To properly build a website you need three things.
1. THINK
2. PLAN
3. RESEARCH
4. IMPLEMENT

As you can see almost the coding part the implement step is just 1 step. It is because when you do all the 1 - 3 step its like you are done almost 70 percent so that when you start coding you dont randomly placing items and redoing the design over and over again.

# Headers
- Should be what was the website or topic all about.
- What your user want in your website or topic.

# Colors
- Standard of 4 color with black and white as default. The other will be the main color of your website

# Section
- Every section must answer a USER question directly.
- Every section must be consistent and transparent on information you want to convey.
- Every section text must be simple and no bullshit just say what you website is doing
