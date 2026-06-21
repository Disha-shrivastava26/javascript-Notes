# Menu Fade Animation using Event Delegation and `bind()`

## Objective

Create a navigation menu hover effect where:

* The hovered link remains fully visible.
* Other navigation links fade to a lower opacity.
* The logo also fades.
* When the mouse leaves, all elements return to full opacity.

## Key Concepts Used

### 1. Event Delegation

Instead of attaching a separate event listener to every navigation link, a single listener is attached to the parent navigation element.

```js
nav.addEventListener('mouseover', handleHover.bind(0.5));
```

This improves performance and simplifies code maintenance.

---

### 2. `e.target`

`e.target` refers to the element that triggered the event.

```js
if (e.target.classList.contains('nav__link'))
```

This ensures the hover effect only runs when a navigation link is hovered.

---

### 3. `closest()`

Used to find the nearest ancestor matching a selector.

```js
link.closest('.nav')
```

This returns the parent navigation element containing the hovered link.

---

### 4. `querySelectorAll()`

Used to select all navigation links inside the navigation bar.

```js
const siblings = link
  .closest('.nav')
  .querySelectorAll('.nav__link');
```

---

### 5. Looping Through Siblings

```js
siblings.forEach(el => {
  if (el !== link) el.style.opacity = this;
});
```

The hovered link is excluded while all other links receive the new opacity value.

---

### 6. Using `bind()` to Pass Arguments

```js
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
```

`bind()` creates a new function and sets the value of `this`.

During `mouseover`:

```js
this === 0.5
```

During `mouseout`:

```js
this === 1
```

This allows the same function to handle both fading and restoring opacity.

---

## Why Use `bind()` Instead of Creating Two Functions?

Without `bind()`:

```js
mouseover -> fadeLinks()
mouseout  -> restoreLinks()
```

With `bind()`:

```js
mouseover -> handleHover.bind(0.5)
mouseout  -> handleHover.bind(1)
```

Benefits:

* Less code duplication
* Better reusability
* Cleaner and easier to maintain

---

## Complete Flow

1. User hovers over a navigation link.
2. Event bubbles to the parent navigation element.
3. `e.target` identifies the hovered link.
4. `closest('.nav')` finds the navigation container.
5. All navigation links are selected.
6. Non-hovered links and logo receive opacity `0.5`.
7. On `mouseout`, the same function runs with opacity `1`.
8. Navigation returns to its original state.

## Takeaways

* Event Delegation → Handle multiple elements with one listener.
* `closest()` → Traverse upward in the DOM.
* `querySelectorAll()` → Select multiple elements.
* `forEach()` → Apply changes to each element.
* `bind()` → Set the value of `this` and reuse the same callback with different parameters.
* Great example of writing reusable and maintainable JavaScript.
