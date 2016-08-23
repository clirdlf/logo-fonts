# CLIR + DLF Fonts

Fonts for use in CLIR + DLF sites.

## Fonts Available

- `clir-logo`
- `dlf-logo`
- `ndsa-logo`

## The *Easy* Way

Link to the stylesheet:

**HTML (Jekyll)**

```html
<link rel="stylesheet" href="https://clirdlf.github.io/logo-fonts/dist/style.css">
```

**Rails**
```erb
<%= stylesheet_link_tag 'https://clirdlf.github.io/logo-fonts/dist/style.css' %>
```

## The *Hard* Way

I don't know, [submodule](https://git-scm.com/docs/git-submodule) this or something. Don't do it; it'll break unexpectedly.

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
  letter-spacing: 1px;
  margin-bottom: 0;
}
```

In the HTML

```html

<p class="logo">
  <i class="icon-clir-logo clir-color"></i> <span class="clir-font">CLIR</span>
</p>

<p class="logo">
  <i class="icon-clir-logo-square clir-color"></i> <span class="clir-font">CLIR</span>
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

## Updating

Log on to the [icomoon app](https://icomoon.io/app/#/select) and edit
the **CLIR+DLF Logos**.

After you get everything set up, click on the **Generate Font** menu (at
the bottom) and then **download** the font.

Unzip the package and replace the files in this repository.

Be sure to run `gulp` to generate a new minified css file in `dist`.

## Note on fonts

CLIR's logo is a variant of Albertus and DLF's is a variant of Trajan.

[Albertus](https://en.wikipedia.org/wiki/Albertus_(typeface)) is a Monotype Foundry font (from the 1930s) and I've not yet found a good (*free*) webfont replacement. Similar fonts include [Lydian](https://www.myfonts.com/fonts/mti/lydian-mt/) and [Friz Quadrata](https://www.myfonts.com/fonts/linotype/friz-quadrata/). In type, this pairs well with Goudy Old Style, but [Sorts Mill Goudy](https://fonts.google.com/specimen/Sorts+Mill+Goudy) is a good replacement.

Trajan is an Adobe Foundry font, but [Crimson Text](https://fonts.google.com/specimen/Crimson+Text) works well enough. Good pairings with this font are [Open Sans](https://fonts.google.com/specimen/Open+Sans), [Lato](https://fonts.google.com/specimen/Lato), [Raleway](https://fonts.google.com/specimen/Raleway), [Montserrat](https://fonts.google.com/specimen/Montserrat), and [Roboto](https://fonts.google.com/specimen/Roboto).

We couldn't figure out the original font used for the NDSA logo so we
just used [Open Sans](https://fonts.google.com/specimen/Open+Sans).
