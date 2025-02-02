---
wrapper_template: '_layouts/docs.html'
context:
  title: Icons | Components
  extra_stylesheet: build/css/standalone/patterns_icons-additional.css
---

{% macro icon_section(icon_set, theme) -%}

<section >
  <div class="p-strip is-shallow u-no-padding--top" {% if theme == "dark" %}style="background-color: transparent;"{% endif %}>{% for row in icon_set | batch(3) %}
  <div class="row u-equal-height">
    {% for icon in row %}<div class="p-card col-3 u-vertically-center" {% if theme == "dark" %}style="background-color: #111; color: #fff;"{% endif %}>
      <p><i class="p-icon--{{icon}}" style="margin-right: 1rem;"></i>p-icon--{{icon}}</p>
    </div>{% endfor %}
  </div>{% endfor %}
  </div>
</section>
{%- endmacro %}

{% set standard_icons = ['plus', 'minus', 'expand', 'collapse', 'spinner', 'drag', 'close', 'help', 'information', 'delete', 'external-link', 'chevron-down', 'chevron-up', 'menu', 'code', 'copy', 'search', 'share', 'user', 'anchor', 'show', 'hide'] %}

{% set status_icons = ['error', 'warning', 'success'] %}

{% set additional_icons = ['applications', 'controllers', 'fullscreen', 'models', 'machines', 'pin', 'units', 'priority-critical', 'priority-high', 'priority-low', 'priority-medium', 'priority-negligible', 'priority-unknown', 'add-canvas', 'add-logical-volume', 'add-partition', 'back-to-top', 'begin-downloading', 'bundle', 'canvas', 'change-version', 'comments', 'conflict-grey', 'conflict-resolution-grey', 'conflict-resolution', 'conflict', 'connected', 'containers', 'copy-to-clipboard', 'disconnect', 'edit', 'export', 'exposed', 'filter', 'fork', 'get-link', 'halfscreen-bar', 'hide', 'highlight-off', 'highlight-on', 'home', 'import', 'in-progress', 'inspector-debug', 'loading-steps', 'lock-locked-active', 'lock-locked', 'lock-unlock', 'maximise-bar', 'minimise-bar', 'mount-2', 'mount', 'open-terminal', 'plans', 'pods', 'power-error', 'power-off', 'power-on', 'profile', 'restart', 'revisions', 'security', 'settings', 'show', 'sort-both', 'sort-down', 'sort-up', 'starred', 'status-failed-small', 'status-in-progress-small', 'status-in-progress', 'status-queued-small', 'status-queued', 'status-succeeded-small', 'status-waiting-small', 'status-waiting', 'status', 'submit-bug', 'success-grey', 'switcher-dashboard', 'switcher-environments', 'switcher', 'tag', 'task-outstanding', 'timed-out-grey', 'timed-out', 'topic', 'unit-pending', 'unit-running', 'unmount', 'unstarred', 'user-group', 'video-play', 'warning-grey'] %}

{% set social_icons = ['facebook', 'instagram', 'twitter', 'linkedin', 'youtube', 'github', 'rss', 'email'] %}

# Icons

<hr>

Icons provide visual context and enhance usability, they can be added via an `<i>` element like so: `<i class="p-icon--{name}"></i>`.

<div class="embedded-example"><a href="/docs/examples/patterns/icons/icons-light" class="js-example">
View example of icons
</a></div>

## Icons as links

If an icon needs to act as a link, `p-icon--` classes can instead be applied to `<a>` elements:

<div class="embedded-example"><a href="/docs/examples/patterns/icons/icons-links" class="js-example">
View example of icons as links
</a></div>

## Standard

Our icons have two predefined color styles: light and dark. The light variant is the default style.

{{ icon_section(standard_icons, 'light') }}

## Dark theme

Our dark-themed icons are available when placed within a container that has the suffix `--dark` ex) `help-container--dark`. Icon colors will then be inverted to ensure legibility as shown in our example.

Alternatively to use light version of icons outside of the dark strip, add `is-light` class to the icon element (e.g. `p-icon--plus is-light`).

{{ icon_section(standard_icons, 'dark')}}

## Alert

Our alert icons are used to indicate the status of a message in a notification.

{{ icon_section(status_icons, 'light')}}

## Additional

Outside of the standard set, additional icons are available for use, and need to be individually imported.

{{ icon_section(additional_icons, 'light')}}

## Social

Our social icons are used to drive users to social content.

{{ icon_section(social_icons, 'light')}}

## Share

If you wish to add share icons for Twitter, Facebook or LinkedIn, we recommend using the networks' official buttons:

<div class="p-strip is-shallow u-no-padding--top">
  <div class="row">
    <ul class="p-inline-list--middot">
      <li class="p-inline-list__item">
        <a href="https://dev.twitter.com/web/tweet-button/">Twitter</a>
      </li>
      <li class="p-inline-list__item">
        <a href="https://developers.facebook.com/docs/plugins/share-button/">Facebook</a>
      </li>
      <li class="p-inline-list__item">
        <a href="https://docs.microsoft.com/en-us/linkedin/consumer/integrations/self-serve/plugins/share-plugin">LinkedIn</a>
      </li>
    </ul>
  </div>
</div>

## Accessibility

### How it works

Icons are used to enhance usability and provide clarity. `<i>` elements are used for our icons, and text should be added unless the icon is purely decorative. This text won’t be displayed visually. e.g.

`<i class="p-icon--chevron-down">This text will not be displayed</i>`

### Considerations

This component strives to follow [WCAG 2.1 (level AA) guidelines](https://www.w3.org/TR/WCAG21/), and care must be taken to ensure this effort is maintained when the component is implemented across other projects. This section offers advice to that effect:

- If the icon is purely decorative with accompanying text, don’t include any text within the `<i>` element.
- If there is no text with the icon, then the text within the `<i>` element must be clear and concise conveying the meaning of the icon.
- Choose well known icons where possible, the more commonly used the icon is, the more likely it is the user will know what it represents.
- Be consistent. The first time users encounter an icon, they learn the meaning or function associated with it. Using that same icon elsewhere or for a different purpose will disorient them.
- If the icon is actionable e.g. a menu icon, make sure it is focusable and it has a meaningful, clear and concise `alt` attribute.
- The colour contrast from the icon to the background should be at least 3:1, as mentioned in the [WCAG techniques](https://www.w3.org/WAI/WCAG21/Techniques/general/G207).

### Resources

- [Are your icons accessible?](https://www.system-concepts.com/insights/are-your-icons-usable-and-accessible/)
- [Keyboard - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Keyboard)
- Guidelines
  - [WCAG21 - 1.1.1 Non text content](https://www.w3.org/TR/WCAG21/#non-text-content)
  - [WCAG21 - 1.4.11 Non-text Contrast](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html)

## Import

To import just this component into your project, copy the snippet below and include it in your main Sass file.

```scss
@import 'patterns_icons';
@include vf-p-icons;

// for spin animation on the spinner icon you need to include animations utility
@import 'utilities_animations';
@include vf-u-animations;
```

The [additional](#additional) set of icons is not included in Vanilla by default, if you require them you can add them to your project, as in the example below.

```scss
@import 'patterns_icons';
@include vf-p-icon-status-waiting;
@include vf-p-icon-user-group;
@include vf-p-icon-video-play;
@include vf-p-icon-warning-grey;
```

If you use a limited set of icons you may want to include them individually to reduce the size of your CSS file.

```scss
@import 'patterns_icons';

// include common styles shared by all icons
@include vf-p-icons-common;

// include only the icons that you use in your project
{% for icon in standard_icons + status_icons + social_icons %}@include vf-p-icon-{{ icon }}
{% endfor %}

// additional icons
{% for icon in additional_icons %}@include vf-p-icon-{{ icon }}
{% endfor %}
```

## Customisation

Should you wish to change the colour of an icon, this can be achieved by using an icon mixin and passing a color as an argument to the mixin.

In the below example, the `.p-icon--share` class includes the `vf-icon-share` mixin, and overrides the icon's default `$color-mid-dark` with `$color-dark`:

```scss
// import Vanilla and include base mixins
// this only needs to happen once in a given project
@import 'vanilla-framework';
@include vf-base;

@include vf-p-icons;

.p-icon--share {
  @include vf-icon-share($color-dark);
}
```

You can find all of the available icon mixins listed [here](https://github.com/canonical-web-and-design/vanilla-framework/blob/main/scss/_base_icon-definitions.scss).

For more information see [Customising Vanilla](/docs/customising-vanilla/) in your projects, which includes overrides and importing instructions.

## React

You can use icons in React by installing our react-component library and importing `Icon` component.

[See the documentation for our React `Icon` component](https://canonical-web-and-design.github.io/react-components/?path=/docs/icon--default-story#icon)
