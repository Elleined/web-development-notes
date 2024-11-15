# web-development-notes
Notes for Web Development using Angular 18

# Angular notes
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
# Directives
- Directives in angular are like Annotation in java
- Add additional behavior to your element/ component

##### Types of Directive ####
## Component Directives: It is a custom element that has its own HTML and Javascript. Did you know that every angular component is a Directive with a view.

## Structural Directives: Used to alter the DOM by adding or removing elements. In analogy they are the workers/ labors in your construction site. Examples are @if, @for,
and @switch. Identified by * or @ in html file.

- @for properties: index, first, last, even, odd, and count.

In angular 17 and up *ngIf is now updated to @If instead this applies to all structural directives like ngFor, ngSwitch and so on... The main advantage of using the latest is that you dont need to import the CommonModule, supports if else, and provide performace benefits.

## Attribute Directives: Used to change the appearance or behavior of elements. In analogy they are the designers of your house. Examples are ngClass and ngStyle that will apply the specified style or class based on condition.

#### 
Attribute directive can have @Input, @Output, and @HostListener just like your typical component.

Example of custom attribute directive
```
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() color: string = 'yellow';  // default color

  constructor(private el: ElementRef) {}

  // Mouse enter event
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  // Mouse leave event
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.color);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
```

Example of custom attribute directive usage
```
<p highlight [color]="red"> </p>
```

# What is ng-template
- Is a short code template that can be later used in our component html file. Unlike regular html ng-template will not be rendered in DOM by default unless specific requirements are met. Its best used in conditional rendering.

## ngTemplateOutlet
- So we know that ng-template will not be rendered in DOM unless specific requirements are met right? This is where ngTemplateOutlet comes for example we have a code that we want to use in different parts of our component html ngTemplateOutlet comes.

Usage
1. import NgTemplateOutlet in TS file
2. Define a ng-template with #<ng-template-name>
```
<ng-template #name>
  <button> Join now </button>
</ng-template>

<div>
  <div> Hero Section </div>
  <div ngTemplateOutlet="name"></div>
</div>

Outputs to
<div>
  <div> Hero Section </div>
  <button> Join now </button>
</div>
```


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

- formGroup: 
- formGroupName: For nested form
- formControlName: For each form field
- formArrayName: For dynamic fields like list

## 2 Types of Forms
### Reactive Forms
#### Control Value Management
- Angular gives access to form control state and the value and can be change in template and component class.
- To gain access you have 2 choices either use Observable or in component class using the ``subscribe()`` method
### Templated Forms
![330440403-40c762c0-cdc8-4fae-b879-384445a0c76a](https://github.com/user-attachments/assets/354750aa-4797-461b-a526-931a25dd985e)


# ViewChild
- Used for complex scenarios where you need direct access to child component properties and methods. Like when modifying DOM, Directives, and etc...

## When to use
- Whenever you need a complex logic that needs direct access to child properties and methods.
- Whenever you need more than just data passing

# Input
- Achieve using @Input()
- Used for just simply passing data properties from parent to child.
- Used for concise and standard way of passing data between parent to child.
- Promotes loose coupling.

## When to use
- When you need to pass data from parent to child.

# Output
- Achieve using @Output()
- Used for notifying the parent component whenever something happens in the child component. Just like event driven architecture.
- Promotes loose coupling

## When to use
- When you need to notify the parent component that something happens in the child component.

# Angular Life Cycle Hooks
## ngOnInit: Will run before the component HTML file is rendered making it perfect for initialization logics. Only run once.

## ngOnDestroy: Will run when components are no longer visible in DOM like ngIf and navigating to different page perfect use for clean up code. Such as unsubscribing to Observables, detaching event listeners, and clearing timers.
 
## ngOnChanges: Will run when changes are detected in @Input properties of your component and will run first before ngOnInit. Related interfaces are SimpleChanges. Run multiple times.

## ngAfterViewInit: Will run after the child components are initialized in the parent component. Only run once. Perfect used case for when using @ViewChild.

## ngAfterContentInit: Will run after all the nested child components in the parent component are initialized. Only run once.

## ngAfterViewChecked: Will run after the component view has been checked for changes. Just don't use this when you really need it. Research it and you will know.

## ngAfterContentChecked: Will run after the component content has been checked. Just don't use this when you really need it. Research it and you will know.

# Pipe
- Is used to transform and format a data directly in your component.html file without needing to write code. It makes your code cleaner and modular.
- Pipe is just a utility class in Java.

## Syntax
- Identified by {{ data | pipe : parameter }}
- where the the data is your data
- where pipe is the name of your pipe.
- where : <parameter> is the parameter of your pipe function : is used instead of comma (,)
```
<p> {{ money | number : £}} </p>
```

Pipe with property binding
```
[elementProperty]="data | pipe : argument"
```

## Creating custom pipe just extend the PipeTransform

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
![float-sample](https://github.com/user-attachments/assets/34be4771-effd-4f38-bfef-3c1377c1d2f2)

# Units
- em: Will be relative to parent or the element itself. Generally used for margin, padding, and widths.
- rem: Will be relative to the browser font size. Generally used for sizes.
- %: Will be relative to the parent element.
- vh: Will be relative to the screen size. yung patayo ba.
- wv: Will relative to the screen size also. yung pahiga ba.
- px: The myth the legend px alam monato dapat aba.

# Isolation
- Will make an element to be isolated from other elements. Meaning that an element declared as isolated will block all the styles coming from other element styles. The most useful this property is when creating a visual effect on an targeted element. In tagalog iisolate nya sarili nya lahat mg makakaapekto sakanya eh dinya papansinin para maging unique sya (visual effect).
![isolation-sample](https://github.com/user-attachments/assets/d73f44f3-7bde-43a9-a386-97e075097408)

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
![box-model-sample](https://github.com/user-attachments/assets/aa1a76ef-3d73-41fa-b11a-ea6bd281e9f8)

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
![object-fit-sample](https://github.com/user-attachments/assets/87ea4efd-4106-49a1-b5c1-6cf437c1004d)


# Object position
![object-position-sample](https://github.com/user-attachments/assets/510320ef-01b9-4b96-a8b8-37d5c44b3463)

# Overflow
- Sometimes the content doesnt fit inside its parent container and the content overflow. You can control that with this property.
![overflow-sample](https://github.com/user-attachments/assets/263200b7-33c1-4415-995b-e4e9e035ea21)

# Overscroll
- Controls how the scroll behaves when scrollable boundary reached. Set this always to contain. Ang default nito eh after mareach yung end magsscroll na yung page. Pero pag contain pagka nareach nya yung end ng scrollable content eh ok na di mahsscroll yung page.
![overscroll-sample](https://github.com/user-attachments/assets/f14178e7-3439-48f5-8f22-513bb27b6ac6)

# Flex
Keep in mind that when you specify an element to be display:flex it will create a cross where the main axis is based on your flex-direction since flex direction defaults to row the main axis by default is vertical. when you set the flex direction to be column the main axis will be horizontal.
![flex-sample](https://github.com/user-attachments/assets/33faf235-7fa4-4143-a514-52ddfdcb7832)

- flex-direction: row; // The default is row and can be change with column.
- justify-content: Will control the elements in the main-axis.
- align-items: will control the elements in the cross axis.
- flex-wrap: Will control how the elements in the main axis should behave. wrap or no-wrap.
- flex-grow: Can be used only in child element. It defines how a certain element takes ups a space.
![flex-grow-sample](https://github.com/user-attachments/assets/84d95d63-3f37-49de-a7ac-694c4ac806ae)

- flex-shrink: Can be used only in child element. It defines how a certain element start to shink before other elements.

- flex-basis: Can be used only in child element. It used to redefine the size of child element.

- align-self: Can be use only in child element if want you a certain element to be special in its position.
- gap: add gap to every element. use this instead of margin or padding.


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
![background-clip-sample](https://github.com/user-attachments/assets/c0f94f47-e8c0-48f3-b78e-d31e5b9d5a8a)

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
