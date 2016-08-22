# CLIR + DLF Fonts

Fonts for use in CLIR + DLF sites.

## Fonts Available

- `clir-logo`
- `dlf-logo`
- `ndsa-logo`

## The *Easy* Way

Link to the stylesheet:

**HTML**

```html
<link rel="stylesheet" href="https://clirdlf.github.io/logo-fonts/style.css">
```

**Rails**
```erb
<%= stylesheet_link_tag 'https://clirdlf.github.io/logo-fonts/style.css' %>
```

## Usage

This is a self-contained snippet that can be used as a SCSS partial in
your project

```scss
$clir-burgundy: #560319;
$dlf-blue:      #046BA5;
$ndsa-blue:     #0165AE;
$hc-blue:       darken($dlf-blue, 15%);

@import 'https://fonts.googleapis.com/css?family=Crimson+Text|Open+Sans';

.clir-color { color: $clir-burgundy; }
.clir-font { font-family: '', serif; }

.dlf-font  { font-family: 'Crimson Text', serif; }
.dlf-color  { color: $dlf-blue; }

.ndsa-font { font-family: 'Open Sans', sans-serif; }
.ndsa-color { color: $ndsa-blue; }

.hidden-collections-color { color: $hc-blue; }

.logo {
  font-weight: 700;
  font-size: 22px;
  letting-spacing: 1px;
  margin-bottom: 0;
}
```

In the HTML

```html

<p class="logo">
  <i class="icon-clir-logo clir-color"></i> <span class="clir-font">CLIR</span>
</p>

<p class="logo">
  <i class="icon-dlf-logo dlf-color"></i> <span class="dlf-font">DLF</span>
</p>

<p class="logo">
  <i class="icon-ndsa-logo ndsa-color"></i> <span class="ndsa-font">DLF</span>
</p>

<p class="logo">
  <i class="icon-clir-logo hidden-collections-color"></i> <span class="clir-font">CLIR</span>
</p>

```