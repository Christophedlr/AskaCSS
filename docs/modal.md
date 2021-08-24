# Modal component

The modal is used for display an information or form (for example),
in new window internally at page.

```html
<button class="modal" data-toggle="#modal">Demo modal</button>

<div class="modal" id="modal">
    <div class="content">
        <h2 class="header">
            <button class="close" data-toggle="close">&times;</button>
            Modal header
        </h2>
        <div class="body">Content</div>
        <div class="footer">Footer content</div>
    </div>
</div>
```

Create a button with **modal** CSS class and name define id with the ***data-toggle*** attribute.

In modal, used in ***id*** attribute, the name define in ***data-toggle*** of button.
The **content** CSS class is used for create modal window.
The **header** CSS class is used for create an header of modal.
The **body** CSS class is used for create an content of modal.
The **footer** CSS class is used for create a footer of modal.

For add the closed star button, used the **close** CSS class in button and
defined **close** in ***data-toggle*** attribute value.
A click outside the modal, closed the modal window.

**Warning !** Modal required an activate JavaScript and used the **askacss.js**.
