# Alert component

The alert is used for display an specific message.

```html
<div class="alert">message</div>
```

With the alert-keyword, write a message in a different colors.
The keywords is :
- success (green message and background)
- error (red message and background)
- warning (yellow message and background)
- info (cyan message and background)

For display an message with the possibly close message,
used the **alert-close** CSS class in a button.

```html
<div class="alert">
    message
    <button type="button" class="alert-close">&times;</button>
</div>
```

**Warning !** The alert-close CSS class,
required an activate JavaScript and used the **askacss.js**.
