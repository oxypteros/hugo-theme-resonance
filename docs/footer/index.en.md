---
# Content Identity
title: "Footer"
subtitle: "Customize the footer content"

# Authoring
date: "2025-12-12T19:31:48+01:00"

# Organization
weight: 220

# Publication Control
draft: false

# Advanced SEO
seo_type: "TechArticle"
---

The footer contains a call to action, copyright informations and solial network links.

## Call to Action
The CTA of the footer is defined by the `content/footer/index.md` headless file 

The default file contains:

```markdown
---
headless: true
# EDIT Only Below the line
# -----------------------------------------------------

title: 'Sound. Presence. Purpose.'
# The Links
params:
  links:
    - label: 'Aura Pro II'
      url: '/aura-pro-ii/'
    - label: 'Flow II'
      url: '/flow-ii/'
---

Focused on crafting immersive audio experiences. We believe sound should not just be heard—it should move you.
```

### Parameters Reference

title
: `title: 'Sound. Presence. Purpose.'` ---  (string) 
: Renders the CTA heading

#### Links parameters

links.label
: `label: 'Aura Pro II'`  --- (string, required)
: The label of the link

links.url
: `url: '/aura-pro-ii/'` --- (URL, required)
: The `href` value

links.style
: `style: 'outline'` --- (string)
: The CSS style of the links
: Values: primary, ghost (default: outline)

links.attributes
: `attributes: []`  --- (array)
: Custom attributes for the link anchor, such as `aria-label`, `target="_blank"` etc.