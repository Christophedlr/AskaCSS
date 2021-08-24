# Panel component

The panel is used for display a news for example.

```html
<div class="panel">
    <h2 class="title">Success title panel</h2>
    <div class="body">I'm a content of panel</div>
    <div class="footer">I'm a footer of panel</div>
</div>
```

Used the panel-keyword for different colors.
The keywords is :
- success (greeen color and background)
- error (red color and background)
- warning (yellow color and background)
- info (cyan color and background)
- primary (white color and blue background)

The title and footer is not required.
The footer display an little text by default and title is higher.
The title is used only for h2, h3, h4 and h5 tag.
If not used an **title** CSS class, the font-size is h tag used.
