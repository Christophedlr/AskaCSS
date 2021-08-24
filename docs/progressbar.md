# Progressbar component

The progressbar is used for display a percentage of progression of task.

```html
<div class="progressbar" aria-value="32000" aria-max="65000"></div>
<div class="progressbar" aria-value="75%" aria-max="100%"></div>
```

If not used percentage value for **aria-value** and **aria-max** attributes,
the percentage is calculated with values.

**aria-value** is used for define actually value and
**aria-max** is used for define a maximum value.

For small height of progressbar, used the **progressbar-small** CSS class,
replacing **progressbar** CSS class.

**Warning !** The progressbar required an activate JavaScript and used the **askacss.js**.
The JavaScript, automatically add an div with the **indicator** CSS class.
