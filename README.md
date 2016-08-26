# CLIR + DLF Fonts

Fonts for use in CLIR + DLF sites.

You can check out the specifimen sheets for

- [CLIR Replacement Web Font](https://clirdlf.github.io/logo-fonts/clir-font/demo.html)
- [Logo Fonts](https://clirdlf.github.io/logo-fonts/demo.html)

## Fonts Available

- `clir-logo`
- `dlf-logo`
- `ndsa-logo`

## The *Easy* Way

Link to the stylesheet:

**HTML (Jekyll)**

```html
<link rel="stylesheet" href="https://clirdlf.github.io/logo-fonts/style.css.min">
<link rel="stylesheet" href="https://clirdlf.github.io/logo-fonts/clir-font/stylesheet.css.min">
```

**Rails**
```erb
<%= stylesheet_link_tag 'https://clirdlf.github.io/logo-fonts/style.css.min' %>
<%= stylesheet_link_tag 'https://clirdlf.github.io/logo-fonts/clir-font/stylesheet.css.min' %>
```

**CSS**
```css
@import 'https://clirdlf.github.io/logo-fonts/style.css.min';
@import 'https://clirdlf.github.io/logo-fonts/clir-font/stylesheet.css.min';
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
@import 'https://clirdlf.github.io/logo-fonts/style.css.min';
@import 'https://clirdlf.github.io/logo-fonts/clir-font/stylesheet.css.min';

.clir-color { color: $clir-burgundy; }
.clir-font  { font-family: 'A028', serif; }

.dlf-font   { font-family: 'Crimson Text', serif; }
.dlf-color  { color: $dlf-blue; }

.ndsa-font  { font-family: 'Open Sans', sans-serif; }
.ndsa-color { color: $ndsa-blue; }

.hidden-collections-color { color: $hc-blue; }
.hidden-collections-font  {font-family: 'A028', serif; }


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

> So I'm keeping the above here, but I found that (UFW)++ Design and
> Development created a look-alike font called A028 and released it
> under an [AFPL license](https://en.wikipedia.org/wiki/Aladdin_Free_Public_License)
> license. I generated web fonts from the TTF I found and updated this
> document with the links to these fonts.

Trajan is an Adobe Foundry font, but [Crimson Text](https://fonts.google.com/specimen/Crimson+Text) works well enough. Good pairings with this font are [Open Sans](https://fonts.google.com/specimen/Open+Sans), [Lato](https://fonts.google.com/specimen/Lato), [Raleway](https://fonts.google.com/specimen/Raleway), [Montserrat](https://fonts.google.com/specimen/Montserrat), and [Roboto](https://fonts.google.com/specimen/Roboto).

We couldn't figure out the original font used for the NDSA logo so we
just used [Open Sans](https://fonts.google.com/specimen/Open+Sans).

### Generating Webfont for A028

Seriously, don't even try this if you're not on OS X...

Turns out there was a very similiar font to Albertus created for Linux
called A028 with an AFPL license (by (URW)++ Design & Development). I
grabbed the TTF from this repo (which has some other great fonts).

https://github.com/greyscalepress/font-specimens

Specifically `font-speciments/fonts/encore_des_fontes_manu/A028`

I converted these to web fonts with FontForge. The filesize isn't huge,
and I'm shying away form creating a variant of the font that only has
the 4 letters we need, but it's definately something we could do (but
probably premature optimization). 

```
$ brew install ttf2eot ttfautohint fontforge --with-python
$ npm install
$ ./convert2svgfont.pe path/to/font.ttf
```




